const lavori = [
  {
    id: 1,
    titolo: "Residenza Monolite",
    anno: 2026,
    categoria: "Progettazione residenziale",
    img: "https://placehold.co/300x180",
    descrizione:
      "Nuova costruzione in cemento architettonico pigmentato e legno di larice sulle colline torinesi, progettata per massimizzare l'apporto solare passivo.",
  },

  {
    id: 2,
    titolo: "Bistrot Botanico",
    anno: 2026,
    categoria: "Interior design",
    img: "https://placehold.co/300x180",
    descrizione:
      "Progetto d'interni per un locale contemporaneo nel centro di Bologna, con bancone in ottone brunito, intonaci in calce naturale e verde pensile.",
  },

  {
    id: 3,
    titolo: "Ex Filanda",
    anno: 2025,
    categoria: "Ristrutturazioni",
    img: "https://placehold.co/300x180",
    descrizione:
      "Recupero conservativo e cambio di destinazione d'uso di un edificio industriale ottocentesco trasformato in studio creativo e spazi di co-working.",
  },

  {
    id: 4,
    titolo: "Padiglione sul Mare",
    anno: 2025,
    categoria: "Progettazione residenziale",
    img: "https://placehold.co/300x180",
    descrizione:
      "Villa estiva a un solo piano sulla costa siciliana, realizzata in pietra arenaria locale con patio interno ombreggiato e vista aperta sull'orizzonte.",
  },

  {
    id: 5,
    titolo: "Sede Studio Legale",
    anno: 2024,
    categoria: "Interior design",
    img: "https://placehold.co/300x180",
    descrizione:
      "Ridisegno completo di uffici direzionali di 420 mq con pareti divisorie fonoassorbenti in vetro fumé, boiserie in noce canaletto e illuminazione su misura.",
  },

  {
    id: 6,
    titolo: "Palazzina Liberty",
    anno: 2024,
    categoria: "Ristrutturazioni",
    img: "https://placehold.co/300x180",
    descrizione:
      "Restauro delle facciate storiche e frazionamento interno di un immobile dei primi del Novecento, con adeguamento sismico e impianti geotermici.",
  },
];

const contenitoreLavori = document.getElementById("contenitore-lavori");
const filtriLavori = document.getElementById("filtri-lavori");
const themeToggleBtn = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");
const modalElement = document.getElementById("lavoroModal");
const lavoroModal = new bootstrap.Modal(modalElement);

function renderLavori(lista) {
  contenitoreLavori.innerHTML = lista
    .map(
      (lavoro) => `<div class="col-12 col-md-6 col-lg-4">
        <div class="card card-elevata lavoro-card h-100 p-3" data-id="${lavoro.id}">
          <img src="${lavoro.img}" class="img-fluid rounded mb-3" alt="${lavoro.titolo}">
          <div class="card-body p-0">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-primary">${lavoro.categoria}</span>
              <small class="opacity-75 fw-medium">${lavoro.anno}</small>
            </div>
            <h5 class="card-title mb-0">${lavoro.titolo}</h5>
          </div>
        </div>
      </div>`)
    .join("");
}

renderLavori(lavori);

filtriLavori.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-categoria]");
  if (!btn) return;

  filtriLavori.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  const categoria = btn.dataset.categoria;
  const filtrati = categoria === "Tutti"
    ? lavori
    : lavori.filter((item) => item.categoria === categoria);

  renderLavori(filtrati);
});

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggleBtn.innerHTML = isDark
    ? '<i class="bi bi-sun-fill"></i> Tema'
    : '<i class="bi bi-moon-stars-fill"></i> Tema';
});

contenitoreLavori.addEventListener("click", (e) => {
  const card = e.target.closest(".lavoro-card");
  if (!card) return;

  const id = Number(card.dataset.id);
  const lavoro = lavori.find((item) => item.id === id);
  if (!lavoro) return;

  document.getElementById("lavoroModalLabel").textContent = lavoro.titolo;
  const modalImg = document.getElementById("modal-img");
  modalImg.src = lavoro.img;
  modalImg.alt = lavoro.titolo;
  document.getElementById("modal-categoria").textContent = lavoro.categoria;
  document.getElementById("modal-anno").textContent = lavoro.anno;
  document.getElementById("modal-descrizione").textContent = lavoro.descrizione;

  lavoroModal.show();
});