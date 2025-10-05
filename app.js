/* ===== Helpers ========================================================== */
const fmtPrice = (v, cur='VND') => {
  try { return new Intl.NumberFormat('vi-VN',{style:'currency',currency:cur}).format(v); }
  catch { return `${v} ${cur}`; }
};
const $  = (s, r=document)=>r.querySelector(s);
const $$ = (s, r=document)=>[...r.querySelectorAll(s)];

/* ===== List render with delegation ===================================== */
function primaryImage(p){ return (p.images && p.images[0]) || p.image || 'images/noimg.png'; }

function render(products){
  const host=$("#products");
  if(!products?.length){ host.innerHTML="<p>Không tìm thấy sản phẩm phù hợp.</p>"; return;}
  host.innerHTML = products.map((p,i)=>`
    <article class="product-card" tabindex="0" aria-labelledby="${p.id}-name">
      <img src="${primaryImage(p)}" alt="${p.name}" loading="lazy" onerror="this.src='images/noimg.png'">
      <div class="product-info">
        <h2 id="${p.id}-name">${p.name}</h2>
        <p class="meta">${p.description||""}</p>
        ${Number.isFinite(p.price)?`<div class="price">${fmtPrice(p.price,p.currency||'VND')}</div>`:''}
        <div class="actions">
          <button class="btn secondary" data-act="detail" data-idx="${i}" aria-label="Xem chi tiết ${p.name}">Xem chi tiết</button>
          <button class="btn primary" data-act="buy" data-idx="${i}" aria-label="Mua ${p.name} qua Zalo">Mua qua Zalo</button>
        </div>
      </div>
    </article>
  `).join("");

  host.onclick = (e)=>{
    const btn = e.target.closest('button[data-act]');
    if(!btn) return;
    const idx = +btn.dataset.idx;
    if(btn.dataset.act==='buy')   buyNow(idx);
    if(btn.dataset.act==='detail') showDetail(idx);
  };
}

/* ===== Filters (debounce) ============================================== */
let current = PRODUCTS.slice();
let debounceTimer = null;
function applyFiltersNow(){
  const q=($("#q")?.value||"").trim().toLowerCase();
  const sort=$("#sort")?.value||"default";
  let data=PRODUCTS.filter(p=>
    p.name.toLowerCase().includes(q) ||
    (p.description||"").toLowerCase().includes(q) ||
    (p.info||"").toLowerCase().includes(q)
  );
  if(sort==="price-asc")  data.sort((a,b)=>(a.price??Infinity)-(b.price??Infinity));
  if(sort==="price-desc") data.sort((a,b)=>(b.price??-Infinity)-(a.price??-Infinity));
  current=data; render(current);
}
function applyFilters(){ clearTimeout(debounceTimer); debounceTimer=setTimeout(applyFiltersNow,120); }

/* ===== Actions ========================================================== */
function buyNow(idx){
  const p=current[idx]||PRODUCTS[idx];
  window.open(p?.zalo||"https://zalo.me/0393414926","_blank","noopener");
}

/* ===== Modal lifecycle ================================================== */
let lastFocus=null;
function openModal(){
  const m=$("#modal");
  m.style.display="flex";
  m.setAttribute("aria-hidden","false");
  lastFocus=document.activeElement;
  $("#closeModal").focus();
  document.body.style.overflow="hidden";
}
function closeModal(){
  const m=$("#modal");
  m.style.display="none";
  m.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  lastFocus && lastFocus.focus();
}

/* ===== Detail (polished) =============================================== */
function showDetail(idx){
  const p=current[idx]||PRODUCTS[idx];
  const imgs = (p.images && p.images.length) ? p.images : ['images/noimg.png'];
  const vids = (p.videos && p.videos.length) ? p.videos : [];

  const body=$("#modalBody");
  body.innerHTML = `
    <div class="modal-titlebar">
      <h3 class="modal-title" id="modalTitle">${p.name}</h3>
      <span class="sku-badge">Mã hàng: ${p.id}</span>
    </div>

    <div class="modal-grid">
      <!-- MEDIA COLUMN -->
      <div class="media-col">
        <!-- IMAGES -->
        <section class="media-section">
          <h4 class="media-title">Hình ảnh</h4>
          <div class="carousel" data-idx="0">
            <div class="carousel-viewport">
              <div class="carousel-track">
                ${imgs.map((src,i)=>`
                  <div class="carousel-slide">
                    <img src="${src}" alt="${p.name} - ảnh ${i+1}" loading="lazy" onerror="this.src='images/noimg.png'">
                  </div>`).join("")}
              </div>
            </div>
            <div class="carousel-nav">
              <button class="carousel-btn prev" aria-label="Ảnh trước">‹</button>
              <button class="carousel-btn next" aria-label="Ảnh sau">›</button>
            </div>
          </div>
          <div class="carousel-dots">
            ${imgs.map((_,i)=>`<button class="carousel-dot" data-dot="${i}" ${i===0?'aria-current="true"':''}></button>`).join("")}
          </div>
          <div class="thumbs">
            ${imgs.map((src,i)=>`
              <button class="thumb" data-thumb="${i}" ${i===0?'aria-current="true"':''} aria-label="Xem ảnh ${i+1}">
                <img src="${src}" alt="">
              </button>`).join("")}
          </div>
        </section>

        <!-- VIDEO (separate) -->
        ${vids.length ? `
        <section class="media-section">
          <h4 class="media-title">Video</h4>
          <div class="video-wrap">
            <iframe id="productVideo" loading="lazy"
                    src="${vids[0]}"
                    title="${p.name} - video 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
          </div>
          ${vids.length>1 ? `
          <div class="video-switch">
            ${vids.map((url,i)=>`
              <button class="video-btn" data-video="${encodeURIComponent(url)}" ${i===0?'aria-current="true"':''}>Video ${i+1}</button>
            `).join("")}
          </div>`:''}
        </section>`:''}
      </div>

      <!-- INFO COLUMN -->
      <div class="modal-info">
        ${Number.isFinite(p.price) ? `
        <div class="price-card">
          <div class="big-price">${fmtPrice(p.price, p.currency||'VND')}</div>
          <a class="btn primary" href="${p.zalo||'https://zalo.me/0393414926'}" target="_blank" rel="noopener">Mua qua Zalo</a>
        </div>` : `
        <div class="price-card">
          <div class="sec-note">Liên hệ để báo giá</div>
          <a class="btn primary" href="${p.zalo||'https://zalo.me/0393414926'}" target="_blank" rel="noopener">Chat Zalo</a>
        </div>`}

        <div class="info-card">
          <div class="info-row"><span class="label">Mô tả</span><span>${p.description||""}</span></div>
          <div class="info-row"><span class="label">Thông tin</span><span>${p.info||""}</span></div>
        </div>
      </div>
    </div>
  `;

  injectJSONLD(p);
  initCarousel($("#modalBody .carousel"), imgs.length);
  if (vids.length) initVideoSwitcher(vids);
  openModal();
}

/* ===== Carousel: arrows + dots + thumbs + swipe ======================== */
function initCarousel(carousel, total){
  const viewport = $(".carousel-viewport", carousel);
  const track = $(".carousel-track", carousel);
  const prev = $(".carousel-btn.prev", carousel);
  const next = $(".carousel-btn.next", carousel);
  const dots = $$(".carousel-dot", carousel.parentElement);
  const thumbs = $$(".thumb", carousel.parentElement);

  let idx = 0, startX = 0, curX = 0, dragging = false;

  function update(){
    track.style.transform = `translateX(${idx*-100}%)`;
    dots.forEach((d,i)=> d.setAttribute("aria-current", i===idx ? "true" : "false"));
    thumbs.forEach((t,i)=> t.setAttribute("aria-current", i===idx ? "true" : "false"));
  }
  function go(i){ idx = Math.max(0, Math.min(total-1, i)); update(); }

  prev.onclick = ()=> go(idx-1);
  next.onclick = ()=> go(idx+1);
  dots.forEach(d=> d.onclick = ()=> go(parseInt(d.dataset.dot,10)));
  thumbs.forEach(t=> t.onclick = ()=> go(parseInt(t.dataset.thumb,10)));

  viewport.addEventListener("touchstart",(e)=>{ dragging=true; startX=e.touches[0].clientX; curX=startX; track.style.transition="none"; },{passive:true});
  viewport.addEventListener("touchmove",(e)=>{ if(!dragging)return; curX=e.touches[0].clientX; const dx=curX-startX; track.style.transform=`translateX(calc(${idx*-100}% + ${dx}px))`; },{passive:true});
  viewport.addEventListener("touchend",()=>{ track.style.transition=""; const dx=curX-startX; if(Math.abs(dx)>60){ if(dx<0) go(idx+1); else go(idx-1);} else update(); dragging=false; },{passive:true});

  // keyboard when modal open
  window.addEventListener("keydown", (e)=>{
    if($("#modal").getAttribute("aria-hidden")!=="false") return;
  }); // (arrow keys handled below in global trap)

  update();
}

/* ===== Video switcher =================================================== */
function initVideoSwitcher(urls){
  const video = $("#productVideo"); if(!video) return;
  const btns = $$(".video-btn");
  btns.forEach((b,i)=>{
    b.addEventListener("click", ()=>{
      btns.forEach(x=>x.setAttribute("aria-current","false"));
      b.setAttribute("aria-current","true");
      video.src = decodeURIComponent(b.dataset.video);
    });
  });
}

/* ===== SEO JSON-LD ====================================================== */
function injectJSONLD(p){
  const prev=document.getElementById("product-jsonld"); if(prev) prev.remove();
  const images = (p.images && p.images.length ? p.images : [primaryImage(p)]);
  const data = {
    "@context":"https://schema.org",
    "@type":"Product",
    "name":p.name,
    "image":images,
    "description":p.description||"",
    "sku":p.id,
    "brand":{"@type":"Brand","name":"Đồ Của Dân Chơi"}
  };
  if (Number.isFinite(p.price)) {
    data.offers = {
      "@type":"Offer","priceCurrency":p.currency||"VND","price":String(p.price),
      "availability":"https://schema.org/InStock","url":(p.zalo||"https://zalo.me/0393414926")
    };
  }
  const s=document.createElement("script"); s.type="application/ld+json"; s.id="product-jsonld"; s.textContent=JSON.stringify(data);
  document.head.appendChild(s);
}

/* ===== Boot + a11y traps =============================================== */
window.addEventListener("DOMContentLoaded",()=>{
  $("#year").textContent=new Date().getFullYear();
  render(PRODUCTS);
  $("#q").addEventListener("input",applyFilters);
  $("#sort").addEventListener("change",applyFilters);

  $("#closeModal").addEventListener("click",closeModal);
  window.addEventListener("click",(e)=>{ if(e.target === $("#modal")) closeModal(); });

  // ESC + arrow keys (global khi modal mở)
  window.addEventListener("keydown",(e)=>{
    if($("#modal").getAttribute("aria-hidden")==="false"){
      if(e.key==="Escape") closeModal();

      // mũi tên: tìm carousel hiện tại để chuyển ảnh
      if(e.key==="ArrowLeft"||e.key==="ArrowRight"){
        const car = $("#modalBody .carousel");
        if(!car) return;
        const track = $(".carousel-track",car);
        const slides = $$(".carousel-slide", track);
        const dots = $$(".carousel-dot", car.parentElement);
        let active = dots.findIndex(d=>d.getAttribute("aria-current")==="true");
        if(active<0) active=0;
        const next = e.key==="ArrowRight" ? Math.min(slides.length-1, active+1) : Math.max(0, active-1);
        dots[next].click();
      }

      // focus trap
      if(e.key==="Tab"){
        const f=$$("#modal .modal-content button, #modal .modal-content a, #modal .modal-content iframe, #modal .modal-content input, #modal .modal-content select");
        if(f.length){
          const first=f[0],last=f[f.length-1];
          if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
          else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
        }
      }
    }
  });
});
