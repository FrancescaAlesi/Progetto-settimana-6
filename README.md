# Progetto-settimana-6

# Atelier — Studio di Architettura
Landing page responsive per **Atelier**, studio di architettura con sede a Milano. Il progetto combina HTML5 semantico, **Bootstrap 5.3**, fogli di stile modulari in **Sass (SCSS)** e interattività in **JavaScript**.

## Tecnologie utilizzate
- **HTML5** — Struttura semantica delle sezioni e attributi di accessibilità.
- **Bootstrap 5.3.9** — Grid system responsive, navbar collassabile, modali e accordion.
- **Sass (SCSS)** — Architettura modulare con variabili, mappe breakpoint, mixin e componenti.
- **JavaScript (ES6+)** — Rendering dinamico dei progetti, filtro per categorie, gestione delle modali e tema chiaro/scuro.
- **Google Fonts** — Font principale *Roboto*.

## Funzionalità extra implementate
- Card dei lavori generate con JavaScript: I progetti nella sezione I nostri lavori vengono renderizzati dinamicamente da un array di oggetti in JavaScript invece di essere scritti staticamente nell'HTML.

- Filtri interattivi per categoria: I pulsanti nella sezione Lavori (Tutti, Progettazione residenziale, Interior design, Ristrutturazioni) filtrano in tempo reale i progetti mostrati in pagina.

- Modale con descrizione dei progetti: Cliccando su una card nella sezione Lavori si apre una modale che mostra immagine, categoria, anno e descrizione dettagliata del progetto selezionato.

- Apertura della modale di contatto da più punti: Sia il pulsante "Inizia un progetto" nella hero section sia il pulsante "Scrivici" nella sezione Contatti aprono la modale con il form di contatto.

- Messaggio di ringraziamento all'invio del form: Dopo aver compilato e inviato il modulo nella modale compare un messaggio di conferma, dopodiché i campi vengono resettati e la modale si chiude automaticamente.

- Tema chiaro / Tema scuro (Dark Mode): Tramite il pulsante Tema nella navbar è possibile alternare tra modalità chiara e scura adattando sfondi, testi, card, modali, form e accordion.

- Sezione con domande frequenti (FAQ): Aggiunta una sezione dedicata alle domande più frequenti realizzata con un componente Accordion di Bootstrap.

- Effetti hover su link, pulsanti e card: Tutti i link della navbar e del footer, i pulsanti principali e le card delle sezioni Servizi e Lavori presentano transizioni ed effetti hover al passaggio del mouse.

## Struttura del progetto
```text
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── scss/
        ├── style.scss
        ├── _variables.scss
        ├── _mixins.scss
        └── _components.scss