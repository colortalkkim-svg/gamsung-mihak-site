/* 문의 창: [data-inq] 요소를 누르면 열리고, 입력 내용은 회사 메일로 전송됩니다. */
(function () {
  var TO = "hrkim@gamsung-mihak.com";
  var d = document.getElementById("inq");
  if (!d) {
    d = document.createElement("dialog");
    d.id = "inq";
    d.className = "inq";
    d.setAttribute("aria-labelledby", "inqT");
    d.innerHTML =
      '<form method="dialog" class="inq-x"><button aria-label="닫기">✕</button></form>' +
      '<h3 id="inqT">문의하기</h3>' +
      '<p class="inq-s">남겨주신 내용은 담당자에게 전달되며, 확인 후 연락드립니다.</p>' +
      '<form id="inqForm" autocomplete="on">' +
      '<label>성명<input name="name" required maxlength="40" autocomplete="name"></label>' +
      '<label>연락처<input name="tel" type="tel" required maxlength="20" inputmode="tel" autocomplete="tel" placeholder="숫자와 하이픈만 입력"></label>' +
      '<label>메일주소<input name="email" type="email" required maxlength="80" autocomplete="email"></label>' +
      '<label>문의사항<textarea name="msg" required rows="5" maxlength="1500" placeholder="문의하실 내용을 적어주세요."></textarea></label>' +
      '<label class="inq-agree"><input type="checkbox" required> 문의 답변을 위해 성명·연락처·메일주소를 사용하는 데 동의합니다.</label>' +
      '<input type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0">' +
      '<button class="btn mint" type="submit">문의 보내기</button>' +
      '<p class="inq-n"></p></form>';
    document.body.appendChild(d);
  }
  var f = d.querySelector("#inqForm");
  var title = "문의";

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("[data-inq]");
    if (!a) return;
    e.preventDefault();
    e.stopPropagation();
    title = a.getAttribute("data-inq-title") || "문의";
    var h = d.querySelector("#inqT");
    if (h) h.textContent = title;
    if (d.showModal) { if (!d.open) d.showModal(); }
    else { d.setAttribute("open", ""); d.style.display = "block"; }
  }, true);

  d.addEventListener("click", function (e) { if (e.target === d) d.close(); });

  f.addEventListener("submit", function (e) {
    e.preventDefault();
    var v = function (n) { return f.elements[n].value.trim(); };
    var btn = f.querySelector("button[type=submit]");
    var note = f.querySelector(".inq-n");
    if (f.elements._honey.value) return;
    var mailto = function () {
      var body = "성명: " + v("name") + "\n연락처: " + v("tel") + "\n메일주소: " + v("email") + "\n\n문의사항:\n" + v("msg");
      location.href = "mailto:" + TO + "?subject=" + encodeURIComponent("[" + title + "] " + v("name")) + "&body=" + encodeURIComponent(body);
    };
    btn.disabled = true;
    btn.textContent = "보내는 중...";
    fetch("https://formsubmit.co/ajax/" + TO, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        "성명": v("name"), "연락처": v("tel"), "메일주소": v("email"), "문의사항": v("msg"),
        _subject: "[감성미학발전소] " + title + " - " + v("name"),
        _replyto: v("email"), _template: "table", _captcha: "false"
      })
    }).then(function (r) { return r.json(); }).then(function (j) {
      if (String(j.success) !== "true") throw new Error("fail");
      f.reset();
      note.textContent = "문의가 접수되었습니다. 확인 후 연락드리겠습니다. 감사합니다.";
      note.style.color = "#6CE3C4";
      btn.textContent = "접수 완료";
      setTimeout(function () { d.close(); btn.disabled = false; btn.textContent = "문의 보내기"; note.textContent = ""; }, 2200);
    }).catch(function () {
      btn.disabled = false;
      btn.textContent = "문의 보내기";
      note.textContent = "전송에 실패해 메일 작성 창을 엽니다. 내용을 확인하고 전송해 주세요.";
      mailto();
    });
  });
})();
