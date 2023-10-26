let title_wrapper = document.querySelector('#title_wrapper');
let firtsnumber = document.querySelector('#firtsnumber');
let confirm = true;

// Funzione per generare un numero casuale tra 1 e 100 (puoi impostare il range desiderato)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Aggiorna il contenuto di #firtsnumber con un numero casuale
function updateRandomNumber() {
  const randomNumber = getRandomNumber(1, 100); // Imposta il range desiderato
  firtsnumber.innerHTML = randomNumber;
}

// Funzione per incrementare il contatore
function createInterval(n, element, time) {
  let counter = 0;
  let interval = setInterval(() => {
    if (counter < n) {
      counter++;
      updateRandomNumber(); // Chiamare la funzione per aggiornare il numero
    } else {
      clearInterval(interval);
      confirm = true;
    }
  }, time);
}

// Chiamare la funzione createInterval quando necessario, ad esempio:
createInterval(100, firtsnumber, 500);

// Includere l'observer (l'uso di title_wrapper è lo stesso come hai mostrato)
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && confirm) {
      createInterval(100, firtsnumber, 500);
      confirm = false;
    }
  });
});

observer.observe(title_wrapper);

