/* 컬러로 떠나는 인문학 여행 — 에피소드 데이터 + 3D 컬러 비주얼 렌더 */
(function () {
  "use strict";
  var PLACE = "서울시 강남구 강남대로 102길 45, 앙트레블(논현동)";
  var EP = [
    { n: 1, c: "#F2C230", l: "#FFF1B0", d: "#B8860B", name: "노랑의 여정", en: "Yellow", date: "2024.07.30 (화)", time: "오후 7시 ~ 8시 20분 (80분)", price: "35,000원",
      head: "37살의 고흐에게 마지막까지 한줄기 빛이 되어주던 노랑",
      body: "첫 번째 시리즈 노란색의 여정에서는 고흐에게 노랑이 그토록 찬란할 수밖에 없었던 이야기에서부터, 금분으로 장식한 화려함의 극치를 보여준 클림트의 노랑까지 그 의미들을 파헤쳐 봅니다. 두 거장의 다양한 감정과 이야기들을 쏟아내고, 현대적 시각에서 재해석합니다.",
      program: [], speakers: [["김향란 박사", "컬러소통전문가 · 홍익대학교 대학원 미술학박사(색채전공)"]],
      keys: ["반 고흐", "클림트", "해바라기", "금박"], note: "노랑은 햇빛과 황금, 그리고 가장 먼저 눈에 들어오는 ‘주목’의 색입니다. 같은 노랑이 고흐에게는 희망의 빛이었고 클림트에게는 장식과 부의 언어였다는 점이 이 여정의 출발점입니다.", poster: "ep1_s" },
    { n: 2, c: "#3F6FB5", l: "#BFD8F5", d: "#1F4A8A", name: "파랑의 여정", en: "Blue", date: "2024.09.27 (금)", time: "오후 6시 40분 ~ 8시 (80분)", price: "35,000원",
      head: "20세기 현대 미술의 두 거장, 피카소와 앙리 마티스의 파랑",
      body: "이들은 서로 다른 길을 걸어갔지만, 그들의 예술 세계를 관통하는 파랑에 대해 시대와 감정, 삶의 철학을 들여다봅니다. 피카소의 깊고 어두운 파랑과 마티스의 밝고 활기찬 파랑, 이 두 파랑이 만나면 어떤 대화가 펼쳐질까요?",
      program: [], speakers: [["김향란 박사", "컬러소통전문가 · 홍익대학교 대학원 미술학박사(색채전공)"]],
      keys: ["파블로 피카소", "앙리 마티스", "시대와 감정", "삶의 철학"], note: "파랑은 우울과 고요, 신뢰와 자유를 함께 품은 색입니다. 하나의 색이 작가의 삶에 따라 얼마나 다른 표정을 갖는지 나란히 비교해 보는 시간입니다.", poster: "ep2_s" },
    { n: 3, c: "#D6443F", l: "#FFC9C2", d: "#8E1B16", name: "욕망의 색, RED", en: "Red", date: "2024.11.26 (화)", time: "오후 6시 40분 ~ 8시", price: "35,000원 · 사전 신청자 깜짝 선물(선착순)",
      head: "억눌린 감정인가? 뜨거운 열정인가? 빨간색이 그려내는 욕망의 이야기",
      body: "빨간색은 단순한 색이 아닙니다. 사랑과 욕망, 억압과 해방이라는 복잡한 감정을 품고 있는 강렬한 상징입니다. 절제된 욕망의 화양연화, 타오르는 불꽃같은 열정, 물랑루즈를 통해 시대와 공간에 따른 상징의 의미와 욕망을 들여다봅니다.",
      program: [["프롤로그", "영화음악 감독 김수영 교수(한양대 실용음악과 겸임교수)의 영화음악 이야기"], ["1부", "뜨겁게 타오르는 욕망과 자유의 붉은 소용돌이, 물랑루즈"], ["2부", "숨겨진 갈망의 붉은빛, 절제된 욕망과 프레임 속 시공간, 화양연화"]],
      speakers: [["김향란 박사", "컬러소통전문가 · 홍익대학교 대학원 미술학박사(색채전공)"], ["김수영 교수", "영화음악 감독 · 한양대 실용음악과 겸임교수"]],
      keys: ["물랑루즈", "화양연화", "욕망", "영화음악"], note: "빨강은 사랑과 경고, 혁명과 축제를 동시에 상징하는 가장 모순적인 색입니다. 영화 속 붉은 장면을 색채의 눈으로 다시 읽어 봅니다.", poster: "ep3_s" },
    { n: 4, c: "#F28C28", l: "#FFD9AE", d: "#A8540A", name: "오렌지의 향유", en: "Orange", date: "2025.02.26 (수)", time: "오후 6시 40분 ~ 8시", price: "35,000원",
      head: "한낮의 뜨거움부터 밤의 열기까지, 타히티로 떠난 폴 고갱과 몽마르트의 작은 거인 툴루즈 로트렉!",
      body: "에피소드 4에서는 두 거장의 시대적 배경과 서로 다른 감수성을 오렌지 컬러라는 키워드로 조명합니다. 타히티의 뜨거운 태양을 그려낸 고갱의 정열과 로트렉이 포착한 도시의 찬란한 불빛 속 찰나의 열기를 낯설고도 매혹적인 색채의 향유 속에서, 한 시대를 살아낸 예술가의 몸부림을 들여다봅니다.",
      program: [["1부", "폴 고갱, 오렌지 빛으로 그린 태평양의 낙원, 타히티"], ["2부", "툴루즈 로트렉, 찬란하고 뜨거운 밤의 찰나, 물랑루즈"]],
      speakers: [["김향란 박사", "컬러소통전문가 · 홍익대학교 대학원 미술학박사(색채전공)"]],
      keys: ["폴 고갱", "툴루즈 로트렉", "타히티", "물랑루즈"], note: "오렌지는 따뜻함과 활기, 그리고 해 질 녘의 열기를 담은 색입니다. 현장에는 오렌지 테이블 세팅으로 색을 오감으로 경험하도록 꾸몄습니다.", poster: "ep4_s" },
    { n: 5, c: "#4E9B5B", l: "#C8F0CF", d: "#1F6B2D", name: "초록의 서사", en: "Green", date: "2025.04.29 (화)", time: "오후 6시 40분 ~ 8시", price: "35,000원 · 사전접수 후 현장결제 가능",
      head: "개츠비가 밤마다 바라본 초록 불빛은, 도달할 수 없는 꿈이었을까?",
      body: "익숙하지만 알고 보면 가장 많은 이야기를 품고 있는 초록색입니다. 영화 〈위대한 개츠비〉에서 ‘초록 불빛’은 잡힐 듯 잡히지 않는 미래와 욕망을, 흑인 여행자를 위한 가이드북 ‘Green Book’은 실화를 바탕으로 차별의 시대 속에서 반드시 필요한 ‘안전’과 ‘희망’이었습니다. 초록이 전하는 생명력과 안도, 그리고 끈질긴 욕망의 이면에 담긴 인문학적 스토리를 함께합니다.",
      program: [["1부", "김수영 영화음악 감독의 유쾌한 영화 음악이야기"], ["2부", "그린북 — 편견의 시대, 차별과 혐오를 넘은 갈망"], ["3부", "위대한 개츠비 — 개츠비는 왜 밤마다 초록 불빛을 보았을까?"]],
      speakers: [["김수영 영화음악 감독", "크렘스 대표 · 한양대 예체능대학 실용음악학과 겸임교수"], ["김향란 박사", "컬러소통전문가 · 홍익대학교 대학원 미술학박사(색채전공)"]],
      keys: ["위대한 개츠비", "그린북", "초록 불빛", "영화음악"], note: "초록은 생명과 안도의 색이면서 동시에 닿을 수 없는 욕망의 신호가 되기도 합니다. 영화 두 편으로 초록의 두 얼굴을 읽습니다.", poster: "ep5_s" },
    { n: 6, c: "#EE7FA2", l: "#FFD3E3", d: "#B03A63", name: "Romantic, PINK", en: "Pink", date: "2025.07.30 (수)", time: "오후 6시 40분 ~ 8시 (2부 네트워킹 ~ 9시)", price: "35,000원 · 사전접수 후 현장결제 가능",
      head: "감각과 상상을 깨울 특별한 인문학 여행 — 핑크, 감성의 미래로 초대합니다",
      body: "단순한 ‘로맨틱 컬러’를 넘어 핑크가 지닌 역사적 깊이와 철학적 의미를 꿰뚫어 봅니다. 중세 왕실의 장식부터 현대 미술의 아이콘 컬러로 거듭나기까지 핑크는 어떻게 우리의 정체성과 감성을 정의해 왔을까요? 소규모 하우스 콘서트 형식으로 진행됩니다.",
      program: [["1부 18:40~20:00", "프롤로그 — 김수영 영화음악감독과 풀문공연단의 공연"], ["", "김향란 박사 — 핑크, 정체성과 감정의 미래를 입다"], ["", "유은미 교수 — 공간으로 해석하는 감정"], ["2부 20:00~21:00", "교류를 위한 특별한 네트워킹 (2부 신청자에 한함)"]],
      speakers: [["김수영 영화음악 감독", "크렘스 대표 · 한양대학교 실용음악학과 겸임교수"], ["김향란 박사", "컬러소통전문가 · 홍익대학교 대학원 미술학박사"], ["유은미 교수", "세명대 실내디자인학과 교수 · (사)한국색채학회 회장"]],
      keys: ["핑크", "정체성", "하우스 콘서트", "네트워킹"], note: "핑크는 부드러움의 색이기도 하지만 역사 속에서는 권위와 취향을 드러내는 색이기도 했습니다. 이번 여정은 강연 뒤 이어지는 네트워킹까지 하나의 경험으로 설계되었습니다.", poster: "ep6_s" },
    { n: 7, c: "#7A5BB5", l: "#DCCEF5", d: "#44297D", name: "권력과 욕망 사이, PURPLE", en: "Purple", date: "2025.11.18 (화)", time: "오후 6시 40분 ~ 8시 10분", price: "40,000원 · 와인 시음 비용 포함",
      head: "보라색이 말하는 권력의 언어, 그리고 욕망의 미학",
      body: "고귀함과 금기, 지배와 해방이 교차하는 색. 고대 제왕의 망토에서 현대 예술의 무대까지 보라색은 수천 년 동안 권력과 욕망의 상징으로 빛나왔습니다. 이번 에피소드에서는 보라색이 인간의 욕망을 어떻게 시각화했는지 그 깊이를 들여다보고, 보랏빛 와인이 품은 권력의 여운과 인간의 욕망, 그 고귀함 속에 숨어 있는 아이러니한 아름다움을 ‘색이 말하고, 향이 응답하는 찰나의 순간’으로 만납니다.",
      program: [["1부 18:40~19:20", "권력과 욕망의 색, 퍼플을 말하다 — 김향란 박사 (김수영 영화음악 감독의 피아노 연주)"], ["2부 19:25~20:10", "권력과 욕망의 향기, 보랏빛 와인 — 최윤진 원장 (와인소믈리에와 함께하는 와인 시음과 스토리)"]],
      speakers: [["김향란 박사", "컬러소통전문가 · (사)한국색채학회 상임이사"], ["최윤진 원장", "경희대 관광대학원 와인·소믈리에학과 겸임교수 · (사)한국국제소믈리에협회 부회장 · Vinojin Company CEO"]],
      keys: ["권력", "욕망", "보랏빛 와인", "소믈리에"], note: "보라는 오랫동안 구하기 어려운 염료로 만들어져 왕과 귀족의 색이 되었습니다. 색과 향, 맛이 만나는 감각 확장형 여정입니다.", poster: "ep7_s" },
    { n: 8, c: "#B9CBD3", l: "#EEF4F6", d: "#4A6B7B", name: "비움의 언어 — 화이트", en: "White", date: "2026.04.24 (금)", time: "오후 6시 40분 ~ 8시", price: "40,000원 · 사전접수 후 현장결제 가능",
      head: "비워야 채워지는 시간 — 시즌 2의 첫 번째 여정",
      body: "세계가 동시에 하나의 색을 갈망하고 있습니다. 아무것도 덧칠하지 않은, 비어 있되 충만한, 고요하되 깊은 색. 장식 하나 없는 순백의 달항아리에서 무한을 본 조선의 도공들, 먹빛 바위 사이로 흰 안개를 흘려보내며 여백으로 철학을 그린 겸재 정선, 획과 획 사이의 빈 공간에서 예술의 본질을 찾은 추사 김정희. 시즌 2의 첫 여정은 이 이야기에서 시작합니다.",
      program: [["1부 18:40~19:20", "시대읽기 — 왜 지금, 흰색인가? (김수영 영화음악 감독의 피아노 연주)"]],
      speakers: [["김향란 박사", "(주)감성미학발전소 대표 · (사)한국색채학회 상임이사"], ["김수영 영화음악 감독", "피아노 연주"]],
      keys: ["달항아리", "겸재 정선", "추사 김정희", "여백"], note: "흰색은 ‘없음’이 아니라 ‘비움’이라는 적극적인 선택으로 읽힙니다. 한국 미술 속 여백의 미학과 지금 시대의 ‘리셋’ 욕구를 연결합니다.", poster: "ep8_s" },
    { n: 9, c: "#6CE3C4", l: "#D2F7EC", d: "#12A58B", name: "색이 그린 소리", en: "Blue · Yellow · White", date: "2026.08.21 (금)", time: "오후 6시 40분 ~ 8시", price: "40,000원 · 사전접수 후 현장결제 가능",
      head: "화가와 음악가의 조우, 색이 그린 소리",
      body: "칸딘스키는 색을 칠하지 않았습니다. 그는 색으로 들었습니다. 같은 시대, 같은 도시, 같은 색을 공유했던 화가와 음악가들 사이에 어떤 만남이 있었을까요? 파리의 파랑 속에서 피카소와 드뷔시가, 세기말 빈의 황금빛 속에서 클림트와 말러가, 비움과 절제의 흰색 속에서 휘슬러와 에릭 사티가 만납니다. 색이라는 하나의 렌즈로 그림과 음악을 동시에 꿰뚫는 이 시간에서 익숙한 예술을 새로운 방식으로 다시 만나는 경험이 될 것입니다.",
      program: [["1부 BLUE", "피카소와 드뷔시 — 파리의 파랑, 우울과 달빛"], ["2부 YELLOW", "클림트와 말러 — 세기말 빈의 황금빛, 그 화려함 뒤의 그림자"], ["3부 WHITE", "휘슬러와 에릭 사티 — 비움과 절제, 그림에 붙은 ‘교향곡’"]],
      speakers: [["김향란 박사", "(주)감성미학발전소 대표 · (사)한국색채학회 감사 · 세종시 건축위원회 / 화성시 환경공공디자인진흥위원회 위원"]],
      keys: ["칸딘스키", "피카소 × 드뷔시", "클림트 × 말러", "휘슬러 × 사티"], note: "시즌 1의 색을 한데 모은 시즌 2의 두 번째 이야기. 그림과 음악이 같은 시대의 색을 공유했다는 관점으로, 눈으로 듣고 귀로 보는 감각 여행을 설계했습니다.", poster: "ep9_s" }
  ];
  window.EPISODES = EP;
  var list = document.getElementById("eplist"), chips = document.getElementById("epchips");
  if (!list) return;
  var pad = function (n) { return String(n).padStart(2, "0"); };
  list.innerHTML = EP.map(function (e) {
    return '<article class="epx rv" id="ep' + e.n + '" style="--c:' + e.c + ";--l:" + e.l + ";--d:" + e.d + '">' +
      '<div class="epx-vis"><img src="img/cover/ep' + e.n + '.jpg" alt="Episode ' + e.n + ' ' + e.name + ' 커버" loading="lazy"></div>' +
      '<div class="epx-txt"><span class="epx-meta">EPISODE ' + pad(e.n) + ' · ' + e.date + '</span>' +
      '<h3><i></i>' + e.name + '<small>' + e.en + "</small></h3>" +
      '<p class="epx-head">' + e.head + "</p><p class=\"epx-body\">" + e.body + "</p>" +
      (e.program.length ? '<h4>Program 프로그램</h4><ol class="epx-prog">' + e.program.map(function (p) { return "<li><b>" + p[0] + "</b><span>" + p[1] + "</span></li>"; }).join("") + "</ol>" : "") +
      '<h4>Speaker 강연자</h4><ul class="epx-spk">' + e.speakers.map(function (s) { return "<li><b>" + s[0] + "</b><span>" + s[1] + "</span></li>"; }).join("") + "</ul>" +
      '<dl class="epx-info"><dt>일시</dt><dd>' + e.date + " " + e.time + "</dd><dt>장소</dt><dd>" + PLACE + "</dd><dt>참가비</dt><dd>" + e.price + "</dd></dl>" +
      '<div class="epx-note"><b>Color Note</b><p>' + e.note + '</p><div class="tags">' + e.keys.map(function (k) { return "<span>" + k + "</span>"; }).join("") + "</div></div>" +
      '</div></article>';
  }).join("");
  if (chips) chips.innerHTML = EP.map(function (e) { return '<a href="#ep' + e.n + '" style="--c:' + e.c + '"><i></i>' + pad(e.n) + "<small>" + (e.en.indexOf("·") > -1 ? "Mix" : e.en.split(" ")[0]) + "</small></a>"; }).join("");

  /* ---------- 3D 컬러 비주얼 (한 번만 렌더 → 2D 캔버스로 복사) ---------- */
  var render = function () {
    var T = window.THREE; if (!T) return;
    var W = 900, H = 760;
    var r = new T.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true }); r.setSize(W, H); r.setPixelRatio(1);
    var cam = new T.PerspectiveCamera(34, W / H, 0.1, 100); cam.position.set(0, 0.6, 9.5); cam.lookAt(0, 0, 0);
    var M = function (c, o) { return new T.MeshPhysicalMaterial(Object.assign({ color: c, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08 }, o || {})); };
    var add = function (g, geo, mat, x, y, z, rx, ry, rz) { var m = new T.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx || 0, ry || 0, rz || 0); g.add(m); return m; };
    var S = function (rad) { return new T.SphereGeometry(rad, 64, 64); };
    var TO = function (R, t) { return new T.TorusGeometry(R, t, 40, 160); };
    var build = {
      1: function (g, c) { add(g, S(1.35), M(c, { metalness: 0.35 }), 0, 0, 0); add(g, TO(2.2, 0.16), M("#FFE27A", { metalness: 0.5 }), 0, 0, 0, 1.2, 0.3, 0); [[-2.6, 1.3, 0.8, .5], [2.5, -1.2, 1, .42], [1.6, 1.9, -0.8, .32], [-2.0, -1.5, 1.2, .3]].forEach(function (p) { add(g, S(p[3]), M("#FFD24A"), p[0], p[1], p[2]); }); },
      2: function (g, c) { add(g, new T.TorusKnotGeometry(1.2, 0.38, 220, 40, 2, 3), M(c), 0, 0, 0); add(g, S(0.7), M("#A9CFF5"), -2.6, 1.2, 0.5); add(g, S(0.5), M("#1F4A8A"), 2.5, -1.3, 0.8); add(g, S(0.32), M("#F2C230"), 2.3, 1.6, -0.4); },
      3: function (g, c) { for (var i = 0; i < 5; i++) { var h = 1.6 + i * 0.5; add(g, new T.ConeGeometry(0.62 - i * 0.04, h, 64), M(i % 2 ? "#FF7A59" : c), -2.2 + i * 1.1, h / 2 - 1.4, i % 2 ? 0.4 : -0.2, 0, i, 0.08 * (i - 2)); } add(g, S(0.7), M("#8E1B16"), 0, -1.55, 1.3); add(g, TO(2.9, 0.1), M("#FFC9C2"), 0, -1.5, 0, Math.PI / 2.1, 0, 0); },
      4: function (g, c) { [[-1.7, -0.2, 0.3, 1.25], [0.2, 0.15, 0.9, 1.45], [1.9, -0.45, -0.3, 1.1]].forEach(function (p) { add(g, S(p[3]), M(c, { roughness: 0.45, clearcoat: 0.5 }), p[0], p[1], p[2]); add(g, new T.SphereGeometry(0.5, 32, 16), M("#4E9B5B"), p[0] + 0.1, p[1] + p[3] * 0.92, p[2], 0, 0, 0).scale.set(1.2, 0.22, 0.7); }); add(g, S(0.4), M("#FFD9AE"), 0.2, 2.2, -1); },
      5: function (g, c) { add(g, S(1.4), M(c, { transmission: 0, roughness: 0.15 }), -0.9, -0.2, 0.4); add(g, TO(2.4, 0.12), M("#1F6B2D"), -0.9, -0.2, 0.4, 1.3, 0.2, 0); add(g, S(0.34), new T.MeshStandardMaterial({ color: "#C8FF9A", emissive: "#7CFF5A", emissiveIntensity: 1.2 }), 2.7, 1.1, -1.5); add(g, S(0.6), M("#C8F0CF"), 2, -1.4, 1); },
      6: function (g, c) { add(g, TO(1.6, 0.55), M(c), 0, 0, 0, 0.5, 0.4, 0); add(g, S(0.8), M("#FFD3E3"), -2.4, 1.3, 0.6); add(g, S(0.55), M("#B03A63"), 2.5, -1.2, 0.8); add(g, S(0.35), M("#FFFFFF"), 2.2, 1.7, -0.3); },
      7: function (g, c) { add(g, new T.IcosahedronGeometry(1.5, 2), M(c, { flatShading: false }), 0, 0, 0, 0.3, 0.5, 0); add(g, S(0.75), M("#44297D"), -2.5, -1.0, 0.7); add(g, S(0.5), M("#DCCEF5"), 2.4, 1.2, 0.5); add(g, new T.TorusKnotGeometry(0.6, 0.18, 120, 24), M("#EE7FA2"), 2.3, -1.3, 0.9); },
      8: function (g, c) { add(g, S(1.55), M("#FFFFFF", { roughness: 0.3 }), 0, -0.3, 0); add(g, TO(2.5, 0.07), M("#DDE6EA"), 0, -0.3, 0, 1.45, 0.2, 0); add(g, S(0.55), M("#F4F8F9"), 2.4, -1.2, 0.8); add(g, S(0.3), M("#B9CBD3"), -2.4, 1.3, 0.2); },
      9: function (g, c) { add(g, S(1.15), M("#3F6FB5"), -1.9, 0.5, 0.2); add(g, S(1.15), M("#F2C230"), 0.4, -0.5, 0.8); add(g, S(1.15), M("#FFFFFF"), 2.1, 0.7, -0.2); add(g, new T.TorusKnotGeometry(0.9, 0.22, 160, 30, 2, 5), M("#6CE3C4"), 0, 1.7, -1, 0.4, 0, 0); }
    };
    document.querySelectorAll("canvas[data-ep]").forEach(function (cv) {
      var n = +cv.getAttribute("data-ep"), e = EP[n - 1], sc = new T.Scene(), g = new T.Group(); sc.add(g);
      sc.add(new T.HemisphereLight(0xffffff, 0x203a36, 1.0)); var dl = new T.DirectionalLight(0xffffff, 1.25); dl.position.set(4, 7, 6); sc.add(dl); var pl = new T.PointLight(new T.Color(e.c), 1.4, 40); pl.position.set(-6, -2, 5); sc.add(pl);
      build[n](g, e.c); g.rotation.set(0.15, -0.35, 0);
      r.render(sc, cam); var ctx = cv.getContext("2d"); ctx.clearRect(0, 0, W, H); ctx.drawImage(r.domElement, 0, 0, W, H);
      sc.traverse(function (o) { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
    });
    r.dispose();
  };
  /* 커버 이미지는 제공된 슬라이드 이미지를 사용하므로 3D 렌더(render)는 호출하지 않습니다. */
})();
