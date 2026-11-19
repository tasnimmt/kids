// Flashcard viewer: words (with categories), countries, dinosaurs.
(function () {
  const set = new URLSearchParams(location.search).get('set') || 'words';
  const titleEl = document.getElementById('set-title');
  const catPicker = document.getElementById('cat-picker');
  const cardArea = document.getElementById('card-area');
  const cardEl = document.getElementById('card');
  const mediaEl = document.getElementById('card-media');
  const namesEl = document.getElementById('card-names');
  const progressEl = document.getElementById('progress');
  let items = [];
  let idx = 0;

  document.getElementById('back').onclick = () => (location.href = 'index.html');
  document.getElementById('prev').onclick = () => move(-1);
  document.getElementById('next').onclick = () => move(1);
  cardEl.addEventListener('pointerdown', () => {
    cardEl.classList.remove('bounce');
    void cardEl.offsetWidth; // restart animation
    cardEl.classList.add('bounce');
  });

  function lang(item) {
    const active = LangState.get();
    return active.map((c) => ({ code: c, name: item[c] })).filter((x) => x.name);
  }

  function makeMapSvg(path) {
    const holder = document.createElement('div');
    holder.innerHTML = `<svg class="map-shape" viewBox="0 0 100 85"><path d="${path}" fill="#b7e8ff" stroke="#2b6cb0" stroke-width="1.5"/></svg>`;
    return holder;
  }

  function makeFlag(item) {
    const img = document.createElement('img');
    img.className = 'flag';
    img.src = item.flag;
    img.alt = item.en + ' flag';
    img.onerror = () => { // fallback: simple colored block with country name
      const div = document.createElement('div');
      div.className = 'flag';
      div.style.cssText = 'height:120px;display:flex;align-items:center;justify-content:center;font-size:1.6rem;font-weight:bold;background:#dfe9f5;';
      div.textContent = item.en;
      img.replaceWith(div);
    };
    return img;
  }

  function makeImg(src, alt) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    img.onerror = () => {
      const div = document.createElement('div');
      div.style.cssText = 'height:220px;display:flex;align-items:center;justify-content:center;font-size:4rem;background:#f4f4f4;border-radius:16px;';
      div.textContent = '🧩';
      img.replaceWith(div);
    };
    return img;
  }

  function render() {
    const item = items[idx];
    mediaEl.innerHTML = '';
    namesEl.innerHTML = '';

    if (set === 'countries') {
      mediaEl.appendChild(makeMapSvg(item.map));
      mediaEl.appendChild(makeFlag(item));
    } else if (set === 'dinosaurs') {
      const wrap = document.createElement('div');
      wrap.className = 'dino-media';
      wrap.appendChild(makeImg(item.img, item.en));
      wrap.appendChild(makeImg(item.cartoon, item.en + ' cartoon'));
      mediaEl.appendChild(wrap);
    } else {
      mediaEl.appendChild(makeImg(item.img, item.en));
    }

    lang(item).forEach(({ code, name }) => {
      const line = document.createElement('div');
      line.className = 'name-line ' + code;
      line.textContent = name;
      namesEl.appendChild(line);
    });

    progressEl.textContent = `${idx + 1} / ${items.length}`;
    cardEl.style.animation = 'none';
    void cardEl.offsetWidth;
    cardEl.style.animation = '';
  }

  function move(d) {
    idx = (idx + d + items.length) % items.length;
    render();
  }

  // Build category picker or load items
  if (set === 'countries') {
    titleEl.textContent = '🌍 Countries';
    items = COUNTRIES.items;
    startDeck();
  } else if (set === 'dinosaurs') {
    titleEl.textContent = '🦖 Dinosaurs';
    items = DINOSAURS.items;
    startDeck();
  } else {
    titleEl.textContent = '🖼️ Flashcards';
    WORD_CATEGORIES.forEach((cat) => {
      const btn = document.createElement('button');
      btn.className = 'cat-btn';
      btn.innerHTML = `<span class="cat-icon">${cat.icon}</span>${cat.title.en}`;
      btn.onclick = () => {
        items = cat.items;
        idx = 0;
        startDeck();
      };
      catPicker.appendChild(btn);
    });
  }

  function startDeck() {
    catPicker.hidden = true;
    cardArea.hidden = false;
    render();
  }
})();
