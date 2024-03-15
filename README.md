# Daily Newspaper - NYT clone app
## A newspaper website using New York Times API. Powered by React ⚛
Il progetto prevede di realizzare un'applicazione clone del sito del New York Times utilizzando l'API gratuita fornita per gli sviluppatpri. É un progetto per il corso di React del master in Front-End Development di Start2Impact.

![Screenshot (159)](https://github.com/chiarabis/newspaper-clone-app/assets/124071052/45f18d78-63b6-485b-bb40-21aa51b30995)


***
### 🎯 Obiettivo del progetto
Lo scopo principale del progetto è di poter accedere alle notizie e alle informazioni attraverso la costruzione di un sito web clone del NYT. Non ho fatto una replica totale, ma ho cambiare qualche parte per renderlo più personale.

Cosa deve includere il sito:
- Replica della home di NYT
- Prendere i dati dall’API e visualizzarli 
- UI e UX semplice e facile da usare 
- Struttura dell’app organizzata e comprensibile
- Design responsive

***
### 🧱 Struttura
Ho cercato di mantenere il layout e l’accessibilità più puliti e minimal possibile, senza troppi effetti di animazione.
Ho ricreato la struttura generale del sito del NYT, composta da 3 macro aree:
- HEADER
- NAVBAR
- CORPO

##### HEADER
Prevede il titolo che rimanda alla homepage, la data dinamica e i due bottoni per il login e la sottoscrizione alla newsletter.

![Screenshot (1)](https://github.com/chiarabis/newspaper-clone-app/assets/124071052/e6007d8d-ea72-4983-9fb2-743d041a31bb)

##### NAVBAR
È composta dalla barra di ricerca e dal menu responsive con le categorie.

![Screenshot (22) - Copia](https://github.com/chiarabis/newspaper-clone-app/assets/124071052/171968c0-13ef-459d-994a-ac7036006dbc)

##### CORPO
Tutta la parte in cui vengono visualizzati gli articoli e le varie sezioni.

![Screenshot (23)](https://github.com/chiarabis/newspaper-clone-app/assets/124071052/9b42aeb4-772c-4c26-bf1f-f5a629cc979d)
![Screenshot (2)](https://github.com/chiarabis/newspaper-clone-app/assets/124071052/8d7644f3-f864-42c7-8625-b9ca35672193)
![Screenshot (3)](https://github.com/chiarabis/newspaper-clone-app/assets/124071052/94dcea5d-f626-49e5-be40-e2b5942411c7)

***
### 🚩 Funzionalità principali
- Tag ```select``` per filtrare gli articoli per periodo e sezione
- Il bottone ```BUY``` con il link per l’acquisto dei libri nella sezione Best Sellers.
- Searchbar: per cercare articoli specifici attraverso parole chiave e per cercare recensioni attraverso titoli dei libri.
- Bottoni ```login``` e ```subscribe``` con i rispettivi form per accedere all’area personale e per abbonarsi alla newsletter.
- Ogni articolo, opinione, recensione o contenuto, inoltre prevede un ```Link``` che rimanda all'articolo completo sul sito del New York Times.

***
### 🛠️ Tools utilizzati
Tra le funzionalità di React utilizzate vi sono:
- React Hooks: useState, useEffect e useRef
- React Router: Link, useLocation, useNavigate, useParams, Route, Routes e BrowserRouter.
- La libreria Axios per gestire la richiesta API
- Vite come framework di sviluppo

Altre funzionalità e librerie utilizzate:
- Alice Carousel: un componente React che fornisce gallerie e caroselli.
- Framer Motion: una libreria per animazioni e transizioni.
- Vercel: piattaforma per l'hosting dell'app

***
### 🚀 Link al progetto
> https://newspaper-clone-br5yd8s63-chiaras-projects-ea049797.vercel.app
