// Il tuo "Database" di frasi con le rispettive GIF
const messages = [
  { 
    date: "2026-07-16", 
    text: "Giorno 1: Inizia il conto alla rovescia! Mi manchi già.", 
    gif: "giorno1.gif" 
  },
  { 
    date: "2026-07-17", 
    text: "Giorno 2: Ricordati di sorridere oggi, sei bellissima.", 
    gif: "giorno2.gif" 
  },
  { 
    date: "2026-07-18", 
    text: "Giorno 3: Tieni duro, un giorno in meno al nostro abbraccio.", 
    gif: "giorno3.gif" 
  },
  { 
    date: "2026-07-25", 
    text: "Giorno 4: Il viaggio continua! Sei sempre nei miei pensieri.", 
    gif: "giorno4.gif" 
  },
  { 
    date: "2026-07-26", 
    text: "Giorno 5: Ti mando un bacio virtuale gigante. Spero ti faccia sorridere!", 
    gif: "giorno5.gif" 
  },
  { 
    date: "2026-07-27", 
    text: "Giorno 6: Qualsiasi cosa tu stia affrontando oggi, ricorda che faccio il tifo per te.", 
    gif: "giorno6.gif" 
  },
  { 
    date: "2026-07-28", 
    text: "Giorno 7: Prima settimana andata! La distanza ci separa fisicamente, ma nei miei pensieri siamo vicinissimi.", 
    gif: "giorno7.gif" 
  },
  { 
    date: "2026-07-29", 
    text: "Giorno 8: Un giorno in meno al nostro prossimo abbraccio. Tieni duro!", 
    gif: "giorno8.gif" 
  },
  { 
    date: "2026-07-30", 
    text: "Giorno 9: Promemoria del giorno: sei la cosa più bella che mi sia mai capitata.", 
    gif: "giorno9.gif" 
  },
  { 
    date: "2026-07-31", 
    text: "Giorno 10: Doppia cifra! Chiudiamo luglio alla grande. Guarda il cielo stasera, stiamo guardando la stessa luna.", 
    gif: "giorno10.gif" 
  },
  { 
    date: "2026-08-01", 
    text: "Giorno 11: Benvenuto agosto! Non vedo l'ora di poterti raccontare la mia giornata guardandoti negli occhi.", 
    gif: "giorno11.gif" 
  },
  { 
    date: "2026-08-02", 
    text: "Giorno 12: Bevi un po' d'acqua, sorridi e ricordati che ti amo da impazzire!", 
    gif: "giorno12.gif" 
  },
  { 
    date: "2026-08-03", 
    text: "Giorno 13: Un'altra piccola tacca sul nostro calendario. Ce la stiamo cavando alla grande.", 
    gif: "giorno13.gif" 
  },
  { 
    date: "2026-08-04", 
    text: "Giorno 14: Due settimane esatte! Il tempo passa e tu mi manchi sempre di più.", 
    gif: "giorno14.gif" 
  },
  { 
    date: "2026-08-05", 
    text: "Giorno 15: Sei il mio posto felice, anche da lontano.", 
    gif: "giorno15.gif" 
  },
  { 
    date: "2026-08-06", 
    text: "Giorno 16: Oggi ho visto una cosa che mi ha fatto pensare a te... anche se in realtà ci penso sempre.", 
    gif: "giorno16.gif" 
  },
  { 
    date: "2026-08-07", 
    text: "Giorno 17: Quando torni, ti preparo la tua cena preferita. Promesso!", 
    gif: "giorno17.gif" 
  },
  { 
    date: "2026-08-08", 
    text: "Giorno 18: Stamattina mi sono svegliato con il sorriso solo perché ti ho sognata.", 
    gif: "giorno18.gif" 
  },
  { 
    date: "2026-08-09", 
    text: "Giorno 19: Tieni botta amore, manca sempre meno alla fine di questo conto alla rovescia.", 
    gif: "giorno19.gif" 
  },
  { 
    date: "2026-08-10", 
    text: "Giorno 20: Venti giorni! E stanotte è San Lorenzo: cerca una stella cadente, io il mio desiderio l'ho già realizzato con te.", 
    gif: "giorno20.gif" 
  },
  { 
    date: "2026-08-11", 
    text: "Giorno 21: Ti mando una dose extra di energia positiva per affrontare questa giornata!", 
    gif: "giorno21.gif" 
  },
  { 
    date: "2026-08-12", 
    text: "Giorno 22: Più passa il tempo, più ho voglia di riabbracciarti.", 
    gif: "giorno22.gif" 
  },
  { 
    date: "2026-08-13", 
    text: "Giorno 23: Sei fortissima e so che stai affrontando tutto alla grande. Sono super fiero di te.", 
    gif: "giorno23.gif" 
  },
  { 
    date: "2026-08-14", 
    text: "Giorno 24: Un pensierino veloce per dirti che sei la cosa più preziosa che ho.", 
    gif: "giorno24.gif" 
  },
  { 
    date: "2026-08-15", 
    text: "Giorno 25: Buon Ferragosto amore! Il prossimo lo passeremo incollati, te lo giuro.", 
    gif: "giorno25.gif" 
  },
  { 
    date: "2026-08-16", 
    text: "Giorno 26: Spero che tu abbia riso di gusto oggi. Il tuo sorriso mi manca tantissimo.", 
    gif: "giorno26.gif" 
  },
  { 
    date: "2026-08-17", 
    text: "Giorno 27: Ti penso e ti invio un abbraccio così forte da togliere il fiato (virtualmente!).", 
    gif: "giorno27.gif" 
  },
  { 
    date: "2026-08-18", 
    text: "Giorno 28: Mettiamo una bella X sul calendario di oggi. Meno uno!", 
    gif: "giorno28.gif" 
  },
  { 
    date: "2026-08-19", 
    text: "Giorno 29: Sai già cosa voglio fare appena ci rivediamo? Darti un bacio lunghissimo.", 
    gif: "giorno29.gif" 
  },
  { 
    date: "2026-08-20", 
    text: "Giorno 30: Wow, Giorno 30. Un mese esatto! Siamo letteralmente a metà dell'opera!", 
    gif: "giorno30.gif" 
  },
  { 
    date: "2026-08-21", 
    text: "Giorno 31: Da oggi inizia ufficialmente la discesa. Il traguardo si avvicina sempre di più!", 
    gif: "giorno31.gif" 
  },
  { 
    date: "2026-08-22", 
    text: "Giorno 32: Stai mangiando bene? Prenditi cura di te per me, mi raccomando.", 
    gif: "giorno32.gif" 
  },
  { 
    date: "2026-08-23", 
    text: "Giorno 33: Sto già preparando mentalmente la lista di tutte le cose belle che faremo al tuo ritorno.", 
    gif: "giorno33.gif" 
  },
  { 
    date: "2026-08-24", 
    text: "Giorno 34: Anche oggi sei stata il mio primissimo pensiero appena ho aperto gli occhi.", 
    gif: "giorno34.gif" 
  },
  { 
    date: "2026-08-25", 
    text: "Giorno 35: Riguardare le nostre foto mi fa venire una voglia matta di averti qui.", 
    gif: "giorno35.gif" 
  },
  { 
    date: "2026-08-26", 
    text: "Giorno 36: Ti amo oggi un po' di più di ieri. Come sempre, d'altronde.", 
    gif: "giorno36.gif" 
  },
  { 
    date: "2026-08-27", 
    text: "Giorno 37: Non dimenticare mai quanto sei speciale e fondamentale per me.", 
    gif: "giorno37.gif" 
  },
  { 
    date: "2026-08-28", 
    text: "Giorno 38: Solo un piccolo messaggio per ricordarti che ti supporto in tutto, ogni giorno.", 
    gif: "giorno38.gif" 
  },
  { 
    date: "2026-08-29", 
    text: "Giorno 39: Immagino il momento in cui ci rivedremo e mi viene letteralmente la pelle d'oca.", 
    gif: "giorno39.gif" 
  },
  { 
    date: "2026-08-30", 
    text: "Giorno 40: Entriamo negli '-anta'! Dai che manca davvero pochissimo ormai.", 
    gif: "giorno40.gif" 
  },
  { 
    date: "2026-08-31", 
    text: "Giorno 41: Salutiamo agosto con un sorriso. Ultimi sforzi amore mio, tieni duro!", 
    gif: "giorno41.gif" 
  },
  { 
    date: "2026-09-01", 
    text: "Giorno 42: Benvenuto Settembre! Il mese in cui FINALMENTE ti potrò stringere di nuovo.", 
    gif: "giorno42.gif" 
  },
  { 
    date: "2026-09-02", 
    text: "Giorno 43: Che fatica stare senza di te, ma ne vale la pena sapendo che poi ci sei tu ad aspettarmi.", 
    gif: "giorno43.gif" 
  },
  { 
    date: "2026-09-03", 
    text: "Giorno 44: Ormai i giorni che mancano si contano quasi sulle dita delle mani!", 
    gif: "giorno44.gif" 
  },
  { 
    date: "2026-09-04", 
    text: "Giorno 45: Tre quarti del percorso andati! Possiamo quasi intravedere la fine.", 
    gif: "giorno45.gif" 
  },
  { 
    date: "2026-09-05", 
    text: "Giorno 46: La mia voglia di vederti è arrivata ufficialmente a livelli critici.", 
    gif: "giorno46.gif" 
  },
  { 
    date: "2026-09-06", 
    text: "Giorno 47: Fai il conto alla rovescia con me? Manca pochissimooooo!", 
    gif: "giorno47.gif" 
  },
  { 
    date: "2026-09-07", 
    text: "Giorno 48: Spero che la tua valigia mentale sia già piena di cose da raccontarmi. Voglio sapere tutto.", 
    gif: "giorno48.gif" 
  },
  { 
    date: "2026-09-08", 
    text: "Giorno 49: Ti ho già detto che sei bellissima oggi? Anche se non ti vedo, so che è così.", 
    gif: "giorno49.gif" 
  },
  { 
    date: "2026-09-09", 
    text: "Giorno 50: Cinquanta! È un numero bellissimo, la vetta è vicinissima.", 
    gif: "giorno50.gif" 
  },
  { 
    date: "2026-09-10", 
    text: "Giorno 51: Meno di dieci giorni... Sto letteralmente impazzendo di gioia all'idea.", 
    gif: "giorno51.gif" 
  },
  { 
    date: "2026-09-11", 
    text: "Giorno 52: Quasi non mi sembra vero che stia finendo questa lunga attesa.", 
    gif: "giorno52.gif" 
  },
  { 
    date: "2026-09-12", 
    text: "Giorno 53: Cerca di non prendere impegni, perché quando torni sarò la tua ombra.", 
    gif: "giorno53.gif" 
  },
  { 
    date: "2026-09-13", 
    text: "Giorno 54: Sto già iniziando a preparare mentalmente i fuochi d'artificio per il tuo ritorno.", 
    gif: "giorno54.gif" 
  },
  { 
    date: "2026-09-14", 
    text: "Giorno 55: Hai già iniziato a preparare le valigie per il ritorno? Sbrigatiii!", 
    gif: "giorno55.gif" 
  },
  { 
    date: "2026-09-15", 
    text: "Giorno 56: Il letto è decisamente troppo grande senza di te. Torna presto a occupare il tuo lato.", 
    gif: "giorno56.gif" 
  },
  { 
    date: "2026-09-16", 
    text: "Giorno 57: Ancora pochissime notti separate e poi ci addormenteremo di nuovo insieme.", 
    gif: "giorno57.gif" 
  },
  { 
    date: "2026-09-17", 
    text: "Giorno 58: Non vedo l'ora di stringerti così forte da farti mancare il respiro.", 
    gif: "giorno58.gif" 
  },
  { 
    date: "2026-09-18", 
    text: "Giorno 59: Ci siamo quasi. Domani è il giorno che aspettiamo da due mesi. Preparati.", 
    gif: "giorno59.gif" 
  },
  { 
    date: "2026-09-19", 
    text: "Giorno 60: È IL GRANDE GIORNO! Corri da me, ti sto aspettando a braccia aperte! ❤️", 
    gif: "giorno60.gif" 
  }
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
        // Passiamo anche l'URL della gif alla modale
        openModal(msg.date, msg.text, msg.gif);
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
const modalGif = document.getElementById('modal-gif');

const openModal = (dateStr, text, gifUrl) => {
  const dateObj = new Date(dateStr);
  document.getElementById('modal-date').innerText = dateObj.toLocaleDateString('it-IT');
  document.getElementById('modal-text').innerText = text;
  
  // Gestione dinamica della GIF
  if (gifUrl) {
    modalGif.src = gifUrl;
    modalGif.style.display = 'block';
  } else {
    modalGif.src = "";
    modalGif.style.display = 'none';
  }

  modal.classList.remove('hidden');
};

closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));

// Inizializza al caricamento
document.addEventListener('DOMContentLoaded', initApp);