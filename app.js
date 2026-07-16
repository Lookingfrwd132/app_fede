// Il tuo "Database" di frasi
const messages = [
  { date: "2026-07-16", text: "Giorno 1: Inizia il conto alla rovescia! Mi manchi già." },
  { date: "2026-07-17", text: "Giorno 2: Ricordati di sorridere oggi, sei bellissima." },
  { date: "2026-07-18", text: "Giorno 3: Tieni duro, un giorno in meno al nostro abbraccio." }
  // Aggiungi qui gli altri 57 giorni, rispettando il formato "YYYY-MM-DD"
];

// Otteniamo la data di oggi a mezzanotte locale per il confronto
const getTodayDate = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const initApp = () => {
  const container = document.getElementById('grid-container');
  const today = getTodayDate();

  messages.forEach((msg, index) => {
    // Creiamo la data dell'oggetto a mezzanotte
    const msgDate = new Date(msg.date);
    msgDate.setHours(0, 0, 0, 0);
    
    const isUnlocked = today >= msgDate;
    
    // Creazione elemento HTML
    const card = document.createElement('div');
    card.className = `card ${isUnlocked ? 'unlocked' : 'locked'}`;
    
    // Mostriamo il numero del giorno e un'icona
    card.innerHTML = `
      <span style="font-size: 1.2rem; font-weight: bold;">${index + 1}</span>
      <span style="font-size: 1.5rem; margin-top: 5px;">${isUnlocked ? '💌' : '🔒'}</span>
    `;

    // Evento Click
    card.addEventListener('click', () => {
      if (isUnlocked) {
        openModal(msg.date, msg.text);
      } else {
        alert("Ops! Non sbirciare. Questa lettera si aprirà il " + msgDate.toLocaleDateString('it-IT'));
      }
    });

    container.appendChild(card);
  });
};

// Gestione della Modale
const modal = document.getElementById('message-modal');
const closeModalBtn = document.getElementById('close-modal');

const openModal = (dateStr, text) => {
  const dateObj = new Date(dateStr);
  document.getElementById('modal-date').innerText = dateObj.toLocaleDateString('it-IT');
  document.getElementById('modal-text').innerText = text;
  modal.classList.remove('hidden');
};

closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));

// Inizializza al caricamento
document.addEventListener('DOMContentLoaded', initApp);

// Registrazione del Service Worker per il supporto Offline
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((registration) => {
        console.log('Service Worker registrato con successo:', registration.scope);
      })
      .catch((error) => {
        console.log('Registrazione Service Worker fallita:', error);
      });
  });
}
