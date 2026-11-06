/* 감성미학발전소 — 공통 스크립트 (헤더/푸터, 포트폴리오 데이터, 3D 링, 슬라이더, 필터, 3D 장면) */
(function () {
  "use strict";
  var PAGE = document.body.getAttribute("data-page") || "home";
  var EMAIL = "hrkim@gamsung-mihak.com";
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 포트폴리오 데이터 (감성미학발전소 서류 및 자료 → 브랜딩_디자인 / 공공_디자인 지명원) ---------- */
  var WORKS = [
    { id: "ggwf", name: "경기복지재단", cat: "BRANDING", tags: ["CIP", "Editorial"], scope: "CIP 개발 · 보고서 커버 · 패턴", year: "2021–22", img: ["ggwf", "ggwf2"],
      desc: "경기도민을 위한 복지서비스와 정책을 신뢰감 있게 담은 경기복지재단의 CIP. 사람·직업·관계로 구분한 카테고리를 재단과 도민, 내부고객, 타 공공기관 사이의 관계성으로 시각화했습니다. G 심벌을 활용한 북커버와 패턴으로 딱딱한 공공기관 이미지를 벗어난 젊고 열정적인 정체성을 구축했습니다." },
    { id: "hswf", name: "화성시사회복지재단", cat: "BRANDING", tags: ["CIP", "Manual"], scope: "CIP 개발 · 표준디자인 매뉴얼", year: "2023–24", img: ["hswf", "hswf2"],
      desc: "화성시민을 위한 복지서비스와 든든한 관계의 조직 구성원들이 함께 그리는 미래 비전을 담은 CIP. HS 모노그램을 도식화한 패턴을 쇼핑백, 보고서, 노트 등 다양한 어플리케이션으로 확장했습니다." },
    { id: "sanson", name: "산소앤플러스 sanso·n+", cat: "BRANDING", tags: ["BI", "Package"], scope: "BI · 패키지 디자인", year: "2025–26", img: ["sanson", "sansonG"],
      desc: "청량한 틸그린과 깨끗한 화이트의 대비로 브랜드의 맑고 신선한 에너지를 강조했습니다. 장식을 배제한 로고타입과 넓은 여백의 미니멀함, 크라프트지 패키지로 세련된 웰니스 아이덴티티를 완성했습니다." },
    { id: "belle", name: "belle Café & Patisserie", cat: "BRANDING", tags: ["CIP", "F&B"], scope: "브랜드 아이덴티티", year: "", img: ["belle"],
      desc: "프랑스어로 ‘아름다움’을 뜻하는 belle. ‘simple, honest, delicious’ 철학 아래 불필요한 장식을 덜어내고 재료 본연의 맛과 질감에 집중한 따뜻한 미식 경험을 제안합니다." },
    { id: "brewb", name: "카페 브룹브룹", cat: "BRANDING", tags: ["Naming", "BI"], scope: "네이밍 · 브랜딩 · 굿즈", year: "", img: ["brewb"],
      desc: "좋은 커피는 공간의 공기를 바꾸고 사람의 기분에 새로운 템포를 부여한다는 생각에서 출발. ‘브룹브룹’의 반복적 운율을 골드 아이덴티티 컬러와 대소문자를 오가는 산세리프로 표현했습니다." },
    { id: "gba", name: "글로벌브릿지에셋 GBA", cat: "BRANDING", tags: ["CIP", "Finance"], scope: "CIP · 홈페이지 디자인", year: "2025–26", img: ["gba"],
      desc: "미국·홍콩의 금융보험상품을 소개하는 금융전문기업. 신뢰라는 자산으로 세대를 잇는 평생의 동반자라는 철학을 산세리프 타이포와 팔을 맞잡은 형상의 ‘A’로 표현했습니다." },
    { id: "vcoel", name: "아린코스메틱 V·COEL", cat: "PACKAGE", tags: ["BI", "Package"], scope: "BI · 패키지 디자인", year: "2025–26", img: ["vcoel", "aylnn"],
      desc: "자연의 선과 색, 패턴을 시각화한 미니멀리즘 디자인. 장미를 구상화한 패키지를 베이비 핑크와 로고로 간결하게 구성하고, 배경 컬러만 바꿔 시즌별로 확장할 수 있게 했습니다." },
    { id: "nutrilab", name: "뉴트리랩 NUTRILAB", cat: "BRANDING", tags: ["CIP", "Health"], scope: "브랜딩 · CIP", year: "2025–26", img: ["nutrilab"],
      desc: "개인 맞춤 영양 서비스를 제공하는 캐나다 건기식 브랜드. 개인의 상태에 맞는 영양분을 하나에 담은 캡슐 이미지를 심벌로 삼고, 라운드 산세리프로 순수함을 더했습니다." },
    { id: "garam", name: "도성사 커피하우스 가람", cat: "LOGO", tags: ["Logo", "Calligraphy"], scope: "카페 BI · 로고 디자인", year: "2023–24", img: ["garam"],
      desc: "사찰 한켠의 카페. ‘절집에서 편안함을 느껴 오롯이 쉬어가라’는 뜻을 거칠지만 소박하게, 강하지만 부드럽게 캘리그래피로 담았습니다." },
    { id: "sowon", name: "소원성취", cat: "LOGO", tags: ["Brand", "Package"], scope: "브랜드 아이덴티티", year: "", img: ["sowon"],
      desc: "한국 전통 증류주를 업그레이드해 선보인 브랜드. 한 잔 한 잔 마시며 소원을 이루고 애환을 씻어내라는 철학을 로고와 패키지에 담았습니다." },
    { id: "yangcheon", name: "양천구 경로당 브랜딩 해븐브릿", cat: "PUBLIC", tags: ["Branding", "Public"], scope: "18개 경로당 브랜딩", year: "2025–26", img: ["yangcheon"],
      desc: "‘해븐브릿’은 세대와 마음을 잇는 따뜻한 다리. 곡선과 직선을 자유롭게 연결한 산세리프로 공감·따뜻함·부드러움을 표현해 양천구 18개 경로당의 브랜드 시스템을 구축했습니다." },
    { id: "dorim", name: "도림천 수변테라스 공원 사인", cat: "PUBLIC", tags: ["Signage", "Pictogram"], scope: "사인시스템 · 픽토그램 개발", year: "2021–22", img: ["dorim"],
      desc: "신림동 도림천 이미지 개선 프로젝트. 혼재된 디자인을 통합해 젊고 활기찬 천변을 만들기 위해 부드럽고 유려한 사인 형태와 독특한 안내 픽토그램을 개발했습니다." },
    { id: "yangju", name: "양주시 경로당 환경개선 (유니버설디자인)", cat: "PUBLIC", tags: ["Universal", "Proposal"], scope: "제안공모 · 공간 설계", year: "", img: ["yangju"],
      desc: "생활안전에 취약한 경로당과 어린이 놀이터가 인접한 지역에 유니버설디자인을 적용한 경로당 내·외부와 세대 통합형 놀이터의 모범 사례를 제안했습니다." },
    { id: "jinju", name: "진주시 경관 기본계획 · 공공디자인 가이드라인", cat: "PUBLIC", tags: ["Guideline", "Urban"], scope: "가이드라인 수립 용역 제안", year: "", img: ["jinju"],
      desc: "천년 역사를 이어가는 물빛 문화도시의 비전 아래 파노라마 도시, 첨단예술 융합도시, 원도심과 신도시가 함께 변화하는 도시를 위한 공공디자인 가이드라인을 제안했습니다." },
    { id: "goryeong", name: "고령군 공공디자인 가이드라인", cat: "PUBLIC", tags: ["Guideline", "Urban"], scope: "가이드라인 수립 용역", year: "", img: ["goryeong"],
      desc: "친환경순환도시를 기조로 역사문화·스마트 안전·포용적 배려·문화균형 도시를 5대 핵심전략으로 도출해 미래지향적 글로벌 역사문화도시를 위한 가이드라인을 구성했습니다." },
    { id: "luxia", name: "루시아도산 208", cat: "COLOR", tags: ["Color", "Sign"], scope: "주상복합 색채 · 사인디자인", year: "2023–24", img: ["luxia"],
      desc: "DL건설 주상복합 ‘루시아도산 208’의 외부·로비 색채계획과 사인디자인. 차분한 우드·베이지 톤의 컬러 팔레트로 고급스러운 주거 공간을 설계했습니다." },
    { id: "daelim", name: "대림건설 외관 색채디자인", cat: "COLOR", tags: ["Color", "Architecture"], scope: "외관 · 주차장 색채", year: "", img: ["daelim"],
      desc: "피엔디환경디자인그룹과 협업한 대림건설 단지 외관 색채디자인. 안산 초지역 푸르지오 메이저타운, e편한세상 인창 어반포레, 신곡 포레스타뷰, 송도 8공구 A3 등." },
    { id: "siheung", name: "시흥시청 인근 단지 색채", cat: "COLOR", tags: ["Color", "Urban"], scope: "외관 색채디자인", year: "", img: ["siheung"],
      desc: "피엔디환경디자인그룹과 협업한 대림건설 외관색채디자인. 자연과 모던의 조화를 컨셉으로 컬러 팔레트와 재료 구성을 제안했습니다." },
    { id: "keli", name: "한국고용노동교육원 대전지부", cat: "COLOR", tags: ["Space", "Color"], scope: "내부공간 설계 · 마감 · 컬러", year: "2021", img: ["keli"],
      desc: "한국고용노동교육개발원 대전지부 내부공간 설계와 마감·컬러디자인. 자몽 웰니스 스튜디오 내부설계(2021.04)까지 이어진 공간 색채 프로젝트입니다." }
  ];
  window.WORKS = WORKS;
  var CATS = { ALL: "ALL", BRANDING: "BRANDING·CI", PACKAGE: "PACKAGE", LOGO: "LOGO", PUBLIC: "PUBLIC DESIGN", COLOR: "COLOR·SPACE" };
  var IMG = function (n) { return "img/work/" + n + ".jpg"; };

  /* ---------- 헤더 / 푸터 ---------- */
  var on = function (k) { return PAGE === k ? ' class="on"' : ""; };
  var hdHtml =
    '<header class="hd" id="hd"><div class="wrap">' +
    '<a class="logo" href="index.html" aria-label="감성미학발전소 홈"><img src="img/logo.png" alt="感成美學"><span>감성미학발전소<br>EMOTIONAL AESTHETICS</span></a>' +
    '<nav aria-label="주 메뉴"><ul class="menu" id="menu">' +
    '<li><a href="about.html"' + on("about") + "><b>About</b><small>회사소개</small></a></li>" +
    '<li><a href="works.html"' + on("works") + "><b>Works</b><small>포트폴리오</small></a></li>" +
    '<li><a href="index.html#service"><b>Service</b><small>서비스</small></a></li>' +
    '<li><a class="sub' + (PAGE === "soundbeam" ? " on" : "") + '" href="soundbeam.html"><b>Soundbeam <span class="edu">Edu</span></b><small>사운드빔에듀</small></a></li>' +
    '<li><a class="sub' + (PAGE === "trip" ? " on" : "") + '" href="colortrip.html"><b>Color Trip</b><small>컬러로 떠나는 인문학 여행</small></a></li>' +
    '<li><a href="#contact"><b>Contact</b><small>문의</small></a></li></ul></nav>' +
    '<button class="burger" id="burger" aria-label="메뉴" aria-expanded="false" aria-controls="menu"><i></i><i></i><i></i></button></div></header>';
  var ftHtml =
    '<footer class="contact" id="contact"><div class="wrap">' +
    '<h2><span>Let’s talk</span><span>about color.</span></h2>' +
    '<div class="cols"><div><h4>Contact</h4><a class="mail" href="mailto:' + EMAIL + '">' + EMAIL + '</a></div>' +
    '<div><h4>Address</h4><p>경기도 화성시 동탄구<br>동탄지성로 11, 7층 714-디187호<br>(반송동)</p></div>' +
    '<div><h4>Menu</h4><ul><li><a href="about.html">About</a></li><li><a href="works.html">Works</a></li><li><a href="index.html#service">Service</a></li></ul></div>' +
    '<div><h4>Sub Brand</h4><ul><li><a href="soundbeam.html">Soundbeam Edu</a></li><li><a href="colortrip.html">Color Trip</a></li></ul></div></div>' +
    '<div class="copy"><span>(주)감성미학발전소 · 대표 김향란 · 산업디자인전문회사 신고 제17901호</span><span>© ' + new Date().getFullYear() + " Emotional Aesthetics Development Company</span></div></div></footer>" +
    '<button class="totop" id="totop" aria-label="맨 위로">Scroll<br>up ↑</button>';
  var hm = document.getElementById("site-header"), fm = document.getElementById("site-footer");
  if (hm) hm.outerHTML = hdHtml;
  if (fm) fm.outerHTML = ftHtml;

  var hd = document.getElementById("hd"), totop = document.getElementById("totop");
  var onScroll = function () {
    if (hd) hd.classList.toggle("solid", window.scrollY > 40);
    if (totop) totop.classList.toggle("show", window.scrollY > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  if (totop) totop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });
  var burger = document.getElementById("burger"), menu = document.getElementById("menu");
  if (burger) {
    burger.addEventListener("click", function () {
      var o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o ? "true" : "false");
      document.body.style.overflow = o ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; }); });
  }

  /* ---------- 카드 렌더 ---------- */
  function card(w, i) {
    return '<a class="work rv" href="works.html#' + w.id + '" data-id="' + w.id + '" data-cat="' + w.cat + '" style="--d:' + ((i % 3) * 0.08) + 's">' +
      '<div class="im"><img src="' + IMG(w.img[0]) + '" alt="' + w.name + ' 포트폴리오" loading="lazy"></div>' +
      "<h3>" + w.name + '</h3><div class="tags">' + w.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("") + "</div>" +
      '<dl class="meta"><b>Client</b><span>' + w.name.split(" ")[0] + "</span><b>Scope</b><span>" + w.scope + "</span>" + (w.year ? "<b>Year</b><span>" + w.year + "</span>" : "") + "</dl></a>";
  }
  var sl = document.getElementById("slider");
  if (sl) {
    var feat = WORKS.filter(function (w) { return ["ggwf", "hswf", "sanson", "belle", "brewb", "vcoel", "gba", "yangcheon", "garam", "nutrilab"].indexOf(w.id) > -1; });
    sl.innerHTML = feat.map(card).join("");
    var cur = document.getElementById("cur"), tot = document.getElementById("tot");
    if (tot) tot.textContent = String(feat.length).padStart(2, "0");
    var upd = function () {
      var items = sl.children, best = 0, bd = 1e9;
      for (var i = 0; i < items.length; i++) { var d = Math.abs(items[i].offsetLeft - sl.scrollLeft - sl.firstElementChild.offsetLeft); if (d < bd) { bd = d; best = i; } }
      if (cur) cur.textContent = String(best + 1).padStart(2, "0");
    };
    sl.addEventListener("scroll", upd, { passive: true }); upd();
    var step = function (dir) { var w = sl.firstElementChild.getBoundingClientRect().width + 24; sl.scrollBy({ left: dir * w, behavior: "smooth" }); };
    var pv = document.getElementById("prev"), nx = document.getElementById("next");
    if (pv) pv.addEventListener("click", function () { step(-1); }); if (nx) nx.addEventListener("click", function () { step(1); });
    var down = false, sx = 0, sl0 = 0, moved = false;
    sl.addEventListener("pointerdown", function (e) { if (e.pointerType !== "mouse") return; down = true; moved = false; sx = e.clientX; sl0 = sl.scrollLeft; sl.style.scrollSnapType = "none"; });
    window.addEventListener("pointermove", function (e) { if (!down) return; var dx = e.clientX - sx; if (Math.abs(dx) > 4) moved = true; sl.scrollLeft = sl0 - dx; });
    window.addEventListener("pointerup", function () { if (!down) return; down = false; sl.style.scrollSnapType = ""; });
    sl.addEventListener("click", function (e) { if (moved) { e.preventDefault(); moved = false; } }, true);
  }

  /* ---------- 3D 링 ---------- */
  var ring = document.getElementById("ring");
  if (ring) {
    var rw = ring.parentNode, ids = ["ggwf", "sanson", "hswf", "belle", "vcoel", "brewb", "gba", "garam", "nutrilab", "sowon"];
    var items = ids.map(function (id) { return WORKS.filter(function (w) { return w.id === id; })[0]; });
    var n = items.length;
    ring.innerHTML = items.map(function (w, i) {
      return '<a class="face" href="works.html#' + w.id + '" style="--a:' + (360 / n * i) + 'deg" draggable="false"><img src="' + IMG(w.img[0]) + '" alt="' + w.name + '" draggable="false"><figcaption>' + w.name + "</figcaption></a>";
    }).join("");
    var angle = 0, vel = reduce ? 0 : 0.12, drag = false, lx = 0, dragged = false;
    var setR = function () { var fw = ring.firstElementChild.offsetWidth; var r = Math.round(fw / 2 / Math.tan(Math.PI / n) * 1.12); ring.style.setProperty("--r", r + "px"); ring.querySelectorAll(".face").forEach(function (f) { f.style.setProperty("--r", r + "px"); }); };
    setR(); window.addEventListener("resize", setR);
    rw.addEventListener("pointerdown", function (e) { drag = true; dragged = false; lx = e.clientX; vel = 0; });
    window.addEventListener("pointermove", function (e) { if (!drag) return; var dx = e.clientX - lx; if (Math.abs(dx) > 3) dragged = true; angle += dx * 0.22; vel = dx * 0.22; lx = e.clientX; });
    window.addEventListener("pointerup", function () { drag = false; if (!reduce && Math.abs(vel) < 0.05) vel = 0.12; });
    ring.addEventListener("click", function (e) { if (dragged) { e.preventDefault(); dragged = false; } }, true);
    var vis = true; if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { vis = es[0].isIntersecting; }).observe(rw);
    (function loop() {
      if (vis) { if (!drag) { vel += ((reduce ? 0 : 0.12) - vel) * 0.02; angle += vel; } ring.style.transform = "translateZ(-" + parseInt(ring.style.getPropertyValue("--r") || 400) * 0.9 + "px) rotateX(-6deg) rotateY(" + angle + "deg)"; }
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- Works 페이지 ---------- */
  var grid = document.getElementById("grid");
  if (grid) {
    grid.innerHTML = WORKS.map(card).join("");
    var fl = document.getElementById("filters");
    fl.innerHTML = Object.keys(CATS).map(function (k, i) { return '<button data-c="' + k + '"' + (i === 0 ? ' class="on"' : "") + ">" + CATS[k] + "</button>"; }).join("");
    fl.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return; fl.querySelectorAll("button").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on");
      var c = b.getAttribute("data-c"); grid.querySelectorAll(".work").forEach(function (w) { w.classList.toggle("hide", c !== "ALL" && w.getAttribute("data-cat") !== c); });
    });
    var modal = document.getElementById("modal");
    var open = function (id) {
      var w = WORKS.filter(function (x) { return x.id === id; })[0]; if (!w) return;
      modal.querySelector(".pics").innerHTML = w.img.map(function (n) { return '<img src="' + IMG(n) + '" alt="' + w.name + '">'; }).join("");
      modal.querySelector(".txt").innerHTML = '<span class="eyebrow">' + CATS[w.cat] + "</span><h3>" + w.name + "</h3><p>" + w.desc + '</p><dl class="meta"><b>Scope</b><span>' + w.scope + "</span>" + (w.year ? "<b>Year</b><span>" + w.year + "</span>" : "") + '</dl><div class="tags" style="margin-top:18px">' + w.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("") + "</div>";
      modal.classList.add("on"); document.body.style.overflow = "hidden"; modal.scrollTop = 0;
    };
    var close = function () { modal.classList.remove("on"); document.body.style.overflow = ""; if (location.hash) history.replaceState(null, "", location.pathname); };
    grid.addEventListener("click", function (e) { var a = e.target.closest(".work"); if (!a) return; e.preventDefault(); open(a.getAttribute("data-id")); });
    modal.addEventListener("click", function (e) { if (e.target === modal || e.target.classList.contains("x")) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    if (location.hash.length > 1) open(location.hash.slice(1));
  }

  /* ---------- 3D 틸트 ---------- */
  if (!reduce && window.matchMedia("(hover:hover)").matches) {
    document.body.addEventListener("pointermove", function (e) {
      var t = e.target.closest && e.target.closest(".work .im, .ep .im, .photo3d .card"); if (!t) return;
      var r = t.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      t.style.transform = "perspective(900px) rotateY(" + (x * 12) + "deg) rotateX(" + (-y * 12) + "deg) translateZ(10px)";
    });
    document.body.addEventListener("pointerout", function (e) { var t = e.target.closest && e.target.closest(".work .im, .ep .im, .photo3d .card"); if (t) t.style.transform = ""; });
  }

  /* ---------- 스크롤 등장 ---------- */
  var obs = function () {
    var rv = document.querySelectorAll(".rv:not(.in)");
    if ("IntersectionObserver" in window) { var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.1 }); rv.forEach(function (el) { io.observe(el); }); }
    else rv.forEach(function (el) { el.classList.add("in"); });
  };
  obs();

  /* ---------- 탭 / 아코디언 / 라이트박스 ---------- */
  document.querySelectorAll("[data-tabs]").forEach(function (box) {
    var tabs = box.querySelectorAll(".tab"), panels = box.querySelectorAll(".panel");
    tabs.forEach(function (t, i) { t.addEventListener("click", function () { tabs.forEach(function (x) { x.setAttribute("aria-selected", "false"); }); panels.forEach(function (p) { p.classList.remove("on"); }); t.setAttribute("aria-selected", "true"); panels[i].classList.add("on"); }); });
  });
  document.querySelectorAll(".unit > button").forEach(function (b) { b.addEventListener("click", function () { var u = b.parentElement, o = u.classList.toggle("open"); b.setAttribute("aria-expanded", o ? "true" : "false"); }); });
  document.querySelectorAll("[data-gfilter]").forEach(function (box) {
    var gal = document.getElementById(box.getAttribute("data-gfilter"));
    box.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      box.querySelectorAll("button").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on");
      var c = b.getAttribute("data-c");
      gal.querySelectorAll("figure").forEach(function (f) { f.classList.toggle("hide", c !== "ALL" && f.getAttribute("data-ep") !== c); });
    });
  });
  document.querySelectorAll(".vid video").forEach(function (v) { v.addEventListener("play", function () { document.querySelectorAll(".vid video").forEach(function (o) { if (o !== v) o.pause(); }); }); });
  var lb = document.getElementById("lb");
  if (lb) {
    var li = lb.querySelector("img"), lc = function () { lb.classList.remove("on"); document.body.style.overflow = ""; };
    document.querySelectorAll("[data-poster]").forEach(function (el) { el.addEventListener("click", function () { li.src = el.getAttribute("data-poster"); li.alt = el.getAttribute("data-alt") || ""; lb.classList.add("on"); document.body.style.overflow = "hidden"; lb.scrollTop = 0; }); });
    lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("x")) lc(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") lc(); });
  }

  /* ---------- three.js 3D 장면 (사운드빔 / 컬러 트립) ---------- */
  var stage = document.getElementById("stage3d");
  if (stage && !reduce) {
    var kind = stage.getAttribute("data-kind");
    var boot = function () {
      if (!window.THREE) return; var T = window.THREE;
      var W = stage.clientWidth, H = stage.clientHeight;
      var renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(2, window.devicePixelRatio)); renderer.setSize(W, H); stage.appendChild(renderer.domElement);
      var fb = stage.querySelector(".fallback-orbs"); if (fb) fb.style.display = "none";
      var scene = new T.Scene(), cam = new T.PerspectiveCamera(38, W / H, 0.1, 100); cam.position.set(0, 0.6, 9);
      scene.add(new T.HemisphereLight(0xffffff, 0x1a3a34, 0.9));
      var dl = new T.DirectionalLight(0xffffff, 1.1); dl.position.set(4, 6, 6); scene.add(dl);
      var pl = new T.PointLight(0x6ce3c4, 1.2, 30); pl.position.set(-5, -2, 4); scene.add(pl);
      var group = new T.Group(); scene.add(group); var anim = [];
      group.scale.setScalar(kind === "sound" ? 0.56 : 0.7); group.position.set(W < 900 ? 0 : 3.0, W < 900 ? 1.6 : (W < 1300 ? 1.1 : 0.7), 0);
      var mat = function (c, o) { return new T.MeshPhysicalMaterial(Object.assign({ color: c, roughness: 0.18, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.08 }, o || {})); };
      if (kind === "sound") {
        var cv = document.createElement("canvas"); cv.width = 512; cv.height = 256; var cx = cv.getContext("2d");
        var g = cx.createLinearGradient(0, 0, 512, 0); ["#e93e22", "#f6a400", "#f3e600", "#4caf50", "#2aa5d6", "#4b3b9a", "#e93e22"].forEach(function (c, i) { g.addColorStop(i / 6, c); }); cx.fillStyle = g; cx.fillRect(0, 0, 512, 256);
        var core = new T.Mesh(new T.SphereGeometry(1.15, 64, 64), new T.MeshPhysicalMaterial({ map: new T.CanvasTexture(cv), roughness: 0.15, clearcoat: 1 })); group.add(core); anim.push(function (t) { core.rotation.y = t * 0.6; });
        for (var i = 0; i < 6; i++) {
          var ringM = new T.Mesh(new T.TorusGeometry(1.8 + i * 0.62, 0.07 + i * 0.012, 24, 160), mat(i % 2 ? 0xffffff : 0x6ce3c4, { transparent: true, opacity: 0.92 - i * 0.1 })); ringM.rotation.x = Math.PI / 2.15; group.add(ringM);
          (function (m, k) { anim.push(function (t) { var s = 1 + 0.06 * Math.sin(t * 1.6 - k * 0.7); m.scale.set(s, s, s); m.position.y = Math.sin(t * 1.2 - k * 0.6) * 0.18; }); })(ringM, i);
        }
        group.rotation.x = 0.35;
      } else {
        var cols = [0xf2c230, 0x3f6fb5, 0xd6443f, 0xf28c28, 0x4e9b5b, 0xee7fa2, 0x7a5bb5, 0xf4f4f0, 0x6ce3c4];
        cols.forEach(function (c, i) {
          var a = i / cols.length * Math.PI * 2, m = new T.Mesh(new T.SphereGeometry(i === 8 ? 1.0 : 0.62 + (i % 3) * 0.12, 48, 48), mat(c)); group.add(m);
          (function (mm, ang, k) { anim.push(function (t) { var q = ang + t * 0.35; mm.position.set(Math.cos(q) * 3.1, Math.sin(q * 2) * 0.7, Math.sin(q) * 2.2); mm.rotation.y = t; }); })(m, a, i);
        });
        group.rotation.z = -0.18; group.rotation.x = 0.25;
      }
      var mx = 0, my = 0; window.addEventListener("pointermove", function (e) { var r = stage.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - 0.5; my = (e.clientY - r.top) / r.height - 0.5; });
      var vis = true; if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { vis = es[0].isIntersecting; }).observe(stage);
      var clock = new T.Clock();
      (function loop() { requestAnimationFrame(loop); if (!vis) return; var t = clock.getElapsedTime(); anim.forEach(function (f) { f(t); }); group.rotation.y += ((mx * 0.8) - group.rotation.y) * 0.04; cam.position.y += ((0.6 - my * 1.6) - cam.position.y) * 0.05; cam.lookAt(0, 0, 0); renderer.render(scene, cam); })();
      window.addEventListener("resize", function () { var w = stage.clientWidth, h = stage.clientHeight; renderer.setSize(w, h); cam.aspect = w / h; cam.updateProjectionMatrix(); });
    };
    if (window.THREE) boot(); else { var sc = document.createElement("script"); sc.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"; sc.onload = boot; document.head.appendChild(sc); }
  }
})();
