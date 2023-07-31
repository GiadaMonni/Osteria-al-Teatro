// let counter=0;
// let interval= setInterval(()=>{
//     counter++ 
//     console.log(counter)
// },)


  // Contatore di visualizzazioni
  let views = 0;

  // Funzione per incrementare il contatore
  function incrementCounter() {
    views++;
    document.getElementById('counter').innerText = views + ' Views';
  }

  // Chiamata alla funzione all'avvio della pagina
  incrementCounter();

