document.addEventListener('DOMContentLoaded', function() {
    const counterValue = document.getElementById('counterValue');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    let count = 0;
      let incrementInterval;
      let decrementInterval;

      // Funzione per incrementare il counter
      function increment() {
        count++;
        counterValue.textContent = count;
      }

      // Funzione per decrementare il counter
      function decrement() {
        count--;
        counterValue.textContent = count;
      }

      // Funzione per iniziare l'incremento continuo
      function startIncrement() {
        increment();
        incrementInterval = setInterval(increment, 100);
      }

      // Funzione per fermare l'incremento continuo
      function stopIncrement() {
        clearInterval(incrementInterval);
      }

      // Funzione per iniziare il decremento continuo
      function startDecrement() {
        decrement();
        decrementInterval = setInterval(decrement, 100);
      }

      // Funzione per fermare il decremento continuo
      function stopDecrement() {
        clearInterval(decrementInterval);
      }

      // Mostra il valore iniziale del counter
      counterValue.textContent = count;

      // Incrementa il counter quando viene cliccato il pulsante '+'
      incrementBtn.addEventListener('click', increment);

      // Inizia l'incremento continuo quando il pulsante '+'
      // viene tenuto premuto
      incrementBtn.addEventListener('mousedown', startIncrement);

      // Ferma l'incremento continuo quando il pulsante '+'
      // viene rilasciato
      incrementBtn.addEventListener('mouseup', stopIncrement);
      incrementBtn.addEventListener('mouseleave', stopIncrement);

      // Decrementa il counter quando viene cliccato il pulsante '-'
      decrementBtn.addEventListener('click', decrement);

      // Inizia il decremento continuo quando il pulsante '-'
      // viene tenuto premuto
      decrementBtn.addEventListener('mousedown', startDecrement);

      // Ferma il decremento continuo quando il pulsante '-'
      // viene rilasciato
      decrementBtn.addEventListener('mouseup', stopDecrement);
      decrementBtn.addEventListener('mouseleave', stopDecrement);
    });