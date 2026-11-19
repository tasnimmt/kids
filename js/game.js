// One-player game: pick the right name for a picture.
(function () {
  const picHolder = document.getElementById('pic-holder');
  const choicesEl = document.getElementById('choices');
  const feedbackEl = document.getElementById('feedback');
  const scoreEl = document.getElementById('score');
  let score = 0;
  let current = null;

  document.getElementById('back').onclick = () => (location.href = 'index.html');
  document.getElementById('skip').onclick = () => nextRound();

  // Build the pool from all word categories + dinosaurs (photos only).
  const pool = [];
  WORD_CATEGORIES.forEach((cat) =>
    cat.items.forEach((it) => pool.push({ ...it, kind: 'word' }))
  );
  DINOSAURS.items.forEach((it) =>
    pool.push({ ...it, kind: 'dino' })
  );

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function renderPic(item) {
    picHolder.innerHTML = '';
    if (item.kind === 'dino') {
      // Real photo; cartoon also shown so it matches the dinosaur cards.
      const wrap = document.createElement('div');
      wrap.className = 'dino-media';
      wrap.style.justifyContent = 'center';
      const img1 = document.createElement('img');
      img1.src = item.img; img1.alt = '';
      const img2 = document.createElement('img');
      img2.src = item.cartoon; img2.alt = '';
      img1.onerror = img2.onerror = function () { this.style.display = 'none'; };
      wrap.append(img1, img2);
      picHolder.appendChild(wrap);
    } else {
      const img = document.createElement('img');
      img.src = item.img;
      img.alt = '';
      img.onerror = function () { this.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="220"><rect width="300" height="220" fill="#eef"/><text x="150" y="120" font-size="70" text-anchor="middle">🧩</text></svg>'); };
      picHolder.appendChild(img);
    }
  }

  function nextRound() {
    feedbackEl.textContent = '';
    choicesEl.innerHTML = '';
    current = pool[Math.floor(Math.random() * pool.length)];
    renderPic(current);

    const active = LangState.get();
    const langCode = active[0]; // primary language for quiz labels

    // 3 distractors, different from the answer
    const distract = shuffle(pool.filter((p) => p.id !== current.id)).slice(0, 3);
    const options = shuffle([current, ...distract]);

    options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn' + (langCode === 'ar' ? ' ar' : '');
      btn.textContent = opt[langCode] || opt.en;
      btn.onclick = () => {
        if (btn.textContent === (current[langCode] || current.en)) {
          btn.classList.add('correct');
          feedbackEl.textContent = ['🎉 Great job!', '⭐ Yes!', '👏 Well done!'][Math.floor(Math.random() * 3)];
          score++;
          scoreEl.textContent = '⭐ ' + score;
          setTimeout(nextRound, 1200);
        } else {
          btn.classList.add('wrong');
          feedbackEl.textContent = '🙂 Try again!';
        }
      };
      choicesEl.appendChild(btn);
    });
  }

  nextRound();
})();
