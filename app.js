const starterFigures = [
  {id: 1, name: '悟空', note: 'SMSP', releaseYear: '', price: 10000, sold: false, familyHome: false},
  {id: 2, name: '悟空', note: '一番くじ メモリーズ', releaseYear: '', price: 64800, sold: false, familyHome: false},
  {id: 3, name: '悟空', note: 'SS3', releaseYear: '', price: 7900, sold: false, familyHome: false},
  {id: 4, name: '悟空', note: 'grandista 黒髪', releaseYear: '', price: 11300, sold: false, familyHome: true}
];
const addedFigures = [
  {id: 101, series: 'NARUTO', name: 'ナルト 絆relation', note: '魂nations', releaseYear: '', price: 30000},
  {id: 102, series: 'NARUTO', name: 'ナルト 1巻表紙', note: '魂nations', releaseYear: '2025/04/25', price: 15000},
  {id: 103, series: 'NARUTO', name: 'ナルト 疾風伝', note: '一番くじ 紡がれる火の意志', releaseYear: '2022/06/11', price: 9500},
  {id: 104, series: 'NARUTO', name: 'ナルト 六道モード', note: '一番くじ 忍ノ絆', releaseYear: '2023/08/12', price: 30000},
  {id: 105, series: 'NARUTO', name: 'ナルト仙人モード', note: '一番くじ', releaseYear: '', price: 22500},
  {id: 106, series: 'NARUTO', name: 'ナルト グランディスタ', note: 'プライズ', releaseYear: '2024/07/23', price: 2500, familyHome: true},
  {id: 107, series: 'NARUTO', name: 'ナルト グランディスタ', note: '海外限定', releaseYear: '', price: 11500},
  {id: 108, series: 'NARUTO', name: 'サスケ 絆relation', note: '魂nations', releaseYear: '', price: 30000},
  {id: 109, series: 'NARUTO', name: 'サスケ グランディスタ', note: 'プライズ', releaseYear: '2024/12/04', price: 1300, familyHome: true},
  {id: 110, series: 'NARUTO', name: 'サスケ グランディスタ', note: '海外限定', releaseYear: '', price: 9500},
  {id: 111, series: 'NARUTO', name: '四代目火影', note: '一番くじ 紡がれる火の意志', releaseYear: '2022/06/11', price: 27500},
  {id: 112, series: 'NARUTO', name: 'カカシ', note: '一番くじ 紡がれる火の意志', releaseYear: '2022/06/11', price: 5500},
  {id: 113, series: 'NARUTO', name: '自来也', note: '一番くじ 伝説の三忍', releaseYear: '', price: 0},
  {id: 114, series: 'NARUTO', name: 'うちはマダラ', note: '一番くじ 繋がる思い', releaseYear: '2024/08/10', price: 14000},
  {id: 115, series: 'NARUTO', name: '再不斬', note: '一番くじ 波の国編', releaseYear: '2025/08/18', price: 14000},
  {id: 116, series: 'NARUTO', name: '我愛羅', note: '一番くじ 中忍試験編', releaseYear: '2025/04/25', price: 9400, familyHome: true},
  {id: 117, series: 'NARUTO', name: 'ペイン', note: '一番くじ', releaseYear: '', price: 9000},
  {id: 118, series: 'ワンピース', name: 'ルフィ', note: 'バンプレ', releaseYear: '', price: 20000, familyHome: true},
  {id: 119, series: 'ワンピース', name: 'ゾロ', note: 'ベストエディション', releaseYear: '', price: 17000, familyHome: true},
  {id: 120, series: 'ワンピース', name: 'サンジ', note: 'キングオブアーティスト', releaseYear: '', price: 5500, familyHome: true},
  {id: 121, series: 'ワンピース', name: 'ギガントネーム', note: '', releaseYear: '', price: 28800, familyHome: true}
];
const dragonBallFigures = [
  {id: 201, series: 'ドラゴンボール', name: '悟空', note: 'grandista 黒髪', releaseYear: '', price: 11300},
  {id: 202, series: 'ドラゴンボール', name: '悟空', note: 'grandista SS', releaseYear: '', price: 1100, familyHome: true},
  {id: 203, series: 'ドラゴンボール', name: '悟空', note: 'レジェンズコラボ', releaseYear: '', price: 5900},
  {id: 204, series: 'ドラゴンボール', name: '悟空', note: '闘いの軌跡', releaseYear: '', price: 9500, familyHome: true},
  {id: 205, series: 'ドラゴンボール', name: '悟空', note: 'バイク', releaseYear: '', price: 28000, familyHome: true},
  {id: 206, series: 'ドラゴンボール', name: '悟空', note: '二足歩行ロボ', releaseYear: '', price: 28000, familyHome: true},
  {id: 207, series: 'ドラゴンボール', name: 'バイバイ悟空', note: 'プレミアムバンダイ', releaseYear: '2024/10/30', price: 9000},
  {id: 208, series: 'ドラゴンボール', name: '超象art悟空', note: 'MEDICOS ONLINE SHOP', releaseYear: '2025/01/10', price: 14000},
  {id: 209, series: 'ドラゴンボール', name: '筋斗雲悟空', note: '一番くじ 亀仙流の猛者たち', releaseYear: '2023/06/10', price: 10000},
  {id: 210, series: 'ドラゴンボール', name: '悟空1巻表紙', note: '一番くじ 40th第一弾', releaseYear: '', price: 8000},
  {id: 211, series: 'ドラゴンボール', name: '悟空40巻表紙', note: '一番くじ 40th第一弾', releaseYear: '', price: 8000, familyHome: true},
  {id: 212, series: 'ドラゴンボール', name: 'ベジータ', note: 'SMSP', releaseYear: '', price: 10000}
];
const moreDragonBallFigures = [
  {id: 301, series: 'ドラゴンボール', name: 'ベジータ', note: '一番くじ メモリーズ', releaseYear: '', price: 45000},
  {id: 302, series: 'ドラゴンボール', name: 'ベジータ', note: 'grandista nero', releaseYear: '', price: 29000},
  {id: 303, series: 'ドラゴンボール', name: 'ベジータ', note: '一番くじ VSオムニバスCROSS', releaseYear: '', price: 19000},
  {id: 304, series: 'ドラゴンボール', name: '魔神ベジータ', note: '一番くじ BATTLE OF WORLD with DRAGONBALL LEGENDS', releaseYear: '2018/10/17', price: 18000},
  {id: 305, series: 'ドラゴンボール', name: 'SS2悟飯', note: 'MASTER STARS PIECE', releaseYear: '2016/01/21', price: 11000},
  {id: 306, series: 'ドラゴンボール', name: 'セル第一形態', note: 'ジーマ', releaseYear: '2024/06/26', price: 37000},
  {id: 307, series: 'ドラゴンボール', name: 'セル第二形態', note: 'ジーマ', releaseYear: '2024/07/10', price: 33000, familyHome: true},
  {id: 308, series: 'ドラゴンボール', name: 'セル最終形態', note: '一番くじ 未来への決闘‼', releaseYear: '2024/04/06', price: 6000, familyHome: true},
  {id: 309, series: 'ドラゴンボール', name: 'ベジット', note: 'MASTER STARS PIECE', releaseYear: '2015/02/24', price: 12000},
  {id: 310, series: 'ドラゴンボール', name: 'ミスターサタン', note: '一番くじ 未来への決闘‼', releaseYear: '2024/04/06', price: 5000, sold: true, familyHome: true},
  {id: 311, series: 'ドラゴンボール', name: '魔人ブウ善', note: '一番くじ VSオムニバスULTRA', releaseYear: '2022/10/15', price: 31000, familyHome: true},
  {id: 312, series: 'ドラゴンボール', name: '魔人ブウ悪', note: '一番くじ VSオムニバスビースト', releaseYear: '2023/05/05', price: 15000, familyHome: true},
  {id: 313, series: 'ドラゴンボール', name: '魔人ブウ純粋', note: '一番くじ VSオムニバス', releaseYear: '2020/10/14', price: 23000},
  {id: 314, series: 'ドラゴンボール', name: '神龍', note: '一番くじ 超スーパーヒーロー', releaseYear: '2022/07/02', price: 35000},
  {id: 315, series: 'ドラゴンボール', name: '亀仙人', note: '一番くじ 亀仙流の猛者たち', releaseYear: '2023/06/10', price: 8200, sold: true, familyHome: true},
  {id: 316, series: 'ドラゴンボール', name: '悟空＆クリリン', note: '一番くじ 孫悟空修業編', releaseYear: '2025/02/08', price: 6200, sold: true, familyHome: true},
  {id: 317, series: 'ドラゴンボール', name: 'フリーザ', note: 'MSP', releaseYear: '', price: 13000},
  {id: 318, series: 'ドラゴンボール', name: 'フリーザ', note: '出陣', releaseYear: '', price: 1300, familyHome: true},
  {id: 319, series: 'ドラゴンボール', name: 'ポルンガ', note: '一番くじ VSオムニバスZ', releaseYear: '2021/05/15', price: 59000},
  {id: 320, series: 'ドラゴンボール', name: 'ギガントネーム', note: 'アッセンブルコレクション', releaseYear: '', price: 35000, familyHome: true}
];
const storedFigures = JSON.parse(localStorage.getItem('figure-archive-items') || 'null');
const seedFigures = [...starterFigures, ...addedFigures, ...dragonBallFigures, ...moreDragonBallFigures];
const sameFigure = (a, b) => a.name === b.name && a.note === b.note && Number(a.price || 0) === Number(b.price || 0) && (a.releaseYear || '') === (b.releaseYear || '');
const uniqueFigures = list => list.filter((item, index, all) => all.findIndex(candidate => sameFigure(candidate, item)) === index);
let figures = uniqueFigures(storedFigures ? [...storedFigures, ...addedFigures, ...dragonBallFigures, ...moreDragonBallFigures] : seedFigures);
figures = figures.map(f => ({ ...f, releaseYear: f.releaseYear || '', price: Number(f.price || 0), sellCandidate: f.sellCandidate === true, familyHome: f.familyHome === true }));
let activeView = 'collection';
const sortState = { field: '', direction: '' };
const $ = (s) => document.querySelector(s);
const money = (n) => n ? `¥${Number(n).toLocaleString('ja-JP')}` : '—';

function filteredFigures() {
  const q = $('#searchInput').value.trim().toLowerCase();
  const series = $('#seriesFilter').value;
  const sorted = figures
    .filter(f => activeView !== 'family-home' || f.familyHome)
    .filter(f => activeView !== 'sell-candidates' || f.sellCandidate)
    .filter(f => !series || f.series === series)
    .filter(f => !q || [f.series, f.name, f.note, f.releaseYear].join(' ').toLowerCase().includes(q));
  return sorted.sort((a, b) => {
    if (sortState.field === 'releaseYear') {
      const releaseCompare = String(a.releaseYear || '').localeCompare(String(b.releaseYear || ''));
      if (releaseCompare) return sortState.direction === 'desc' ? -releaseCompare : releaseCompare;
    }
    if (sortState.field === 'price') return sortState.direction === 'desc' ? b.price - a.price : a.price - b.price;
    return b.id - a.id;
  });
}

function updateSortHeaders() {
  document.querySelectorAll('.column-sort').forEach(button => {
    const active = button.dataset.sortField === sortState.field;
    button.querySelector('span').textContent = active ? (sortState.direction === 'desc' ? ' ↓' : ' ↑') : '';
    button.setAttribute('aria-sort', active ? (sortState.direction === 'desc' ? 'descending' : 'ascending') : 'none');
  });
}
function renderFigures() {
  const grid = $('#figureGrid'); grid.textContent = '';
  const items = filteredFigures(); $('#resultCount').textContent = `${items.length} ITEMS`;
  if (!items.length) { grid.innerHTML = '<tr><td class="empty" colspan="7">該当するフィギュアはありません。検索条件を変更するか、新しいアイテムを登録してください。</td></tr>'; return; }
  const template = $('#cardTemplate');
  items.forEach(f => {
    const row = template.content.cloneNode(true);
    row.querySelector('.series').textContent = f.series || '—';
    row.querySelector('.figure-name').textContent = f.name;
    row.querySelector('.note').textContent = f.note || '—';
    row.querySelector('.price').textContent = money(f.price);
    const sellCandidateToggle = row.querySelector('.sell-candidate-toggle');
    sellCandidateToggle.checked = f.sellCandidate;
    sellCandidateToggle.onchange = () => { f.sellCandidate = sellCandidateToggle.checked; save(); render(); };
    const familyHomeToggle = row.querySelector('.family-home-toggle');
    familyHomeToggle.checked = f.familyHome;
    familyHomeToggle.onchange = () => { f.familyHome = familyHomeToggle.checked; save(); render(); };
    [['.series', 'series'], ['.figure-name', 'name'], ['.note', 'note'], ['.price', 'price']].forEach(([selector, field]) => {
      const cell = row.querySelector(selector);
      cell.contentEditable = 'true';
      cell.spellcheck = false;
      cell.onblur = () => {
        const text = cell.textContent.trim();
        f[field] = field === 'price' ? Number(text.replace(/[^0-9]/g, '') || 0) : text;
        save();
        render();
      };
    });
    row.querySelector('.delete-btn').onclick = () => { if(confirm(`「${f.name}」を削除しますか？`)){ figures = figures.filter(x => x.id !== f.id); save(); render(); } };
    grid.append(row);
  });
}
function renderMeta() {
  $('#sideCount').innerHTML = `${figures.length} <small>ITEMS</small>`;
  $('#allCount').textContent = figures.length;
  $('#sellCandidateCount').textContent = figures.filter(f => f.sellCandidate).length;
  $('#familyHomeCount').textContent = figures.filter(f => f.familyHome).length;
  const totalAcquisition = figures.reduce((sum, f) => sum + Number(f.price || 0), 0);
  $('#acquisitionTotal').textContent = `¥${totalAcquisition.toLocaleString('ja-JP')}`;
  const seriesFilter = $('#seriesFilter');
  const selectedSeries = seriesFilter.value;
  const series = [...new Set(figures.map(f => f.series).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'ja'));
  seriesFilter.textContent = '';
  const allSeriesOption = document.createElement('option');
  allSeriesOption.value = '';
  allSeriesOption.textContent = 'すべての作品';
  seriesFilter.append(allSeriesOption);
  series.forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    seriesFilter.append(option);
  });
  seriesFilter.value = series.includes(selectedSeries) ? selectedSeries : '';
}
function save(){try{localStorage.setItem('figure-archive-items', JSON.stringify(figures));return true;}catch{alert('保存容量が不足しています。写真を減らすか、より小さい画像を選んでください。');return false;}}
function render(){renderFigures();renderMeta();}
function setView(view) {
  const familyHome = view === 'family-home';
  const sellCandidates = view === 'sell-candidates';
  activeView = familyHome ? 'family-home' : (sellCandidates ? 'sell-candidates' : 'collection');
  renderFigures();
  $('#pageTitle').textContent = familyHome ? '実家保管' : (sellCandidates ? '売却候補' : 'コレクション');
  $('#headerEyebrow').textContent = familyHome ? 'FAMILY HOME' : (sellCandidates ? 'SELL CANDIDATES' : 'MY COLLECTION');
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
}
$('#searchInput').addEventListener('input', renderFigures);
$('#seriesFilter').addEventListener('change', renderFigures);
document.querySelectorAll('.column-sort').forEach(button => button.onclick = () => {
  if (sortState.field !== button.dataset.sortField) { sortState.field = button.dataset.sortField; sortState.direction = 'desc'; }
  else if (sortState.direction === 'desc') sortState.direction = 'asc';
  else { sortState.field = ''; sortState.direction = ''; }
  updateSortHeaders();
  renderFigures();
});
document.querySelectorAll('.nav-item').forEach(b=>b.onclick=()=>setView(b.dataset.view));
$('#openModalBtn').onclick=()=>$('#figureModal').showModal(); $('#closeModalBtn').onclick=()=>$('#figureModal').close();
$('#clearFilters').onclick=()=>{$('#searchInput').value='';$('#seriesFilter').value='';sortState.field='';sortState.direction='';updateSortHeaders();renderFigures()};
$('#themeBtn').onclick=()=>document.body.classList.toggle('dark');
$('#figureForm').onsubmit=e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target)); data.id=Date.now(); data.price=Number(data.price||0); data.sellCandidate=false; data.familyHome=false; figures.push(data);if(!save()){figures.pop();return;}render();e.target.reset();$('#figureModal').close();};
render();
