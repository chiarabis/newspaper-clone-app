import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*Mentre fai il fetch dei dati usando le API devi mettere un loader così l'utente sa che deve aspettare,
in caso contrario c'è un effetto scattoso molto strano ✅

nel tuo git c'è solo il branch main, dovresti aggiungere il branch development dove fai le modifiche all'app. 
Quando poi l'app sarà pronta puoi fare il merge di development su main.In questo modo main è la copia della produzione

Per ogni componente react crea una cartella con dentro due files: 
uno che conterrà il componente ed uno che conterrà lo stile associato così sarà più facile ritrovare gli stili e modificarli ✅

Per gestire meglio i titoli delle pagine usa helmet✅ */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
