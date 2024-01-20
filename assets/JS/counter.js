document.addEventListener('DOMContentLoaded', function() {
    const counterValue = document.getElementById('counterValue');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    let count = 0;
  
    // Mostra il valore iniziale del counter
    counterValue.textContent = count;
  
    // Incrementa il counter quando viene cliccato il pulsante '+'
    incrementBtn.addEventListener('click', function() {
      count++;
      counterValue.textContent = count;
    });
  
    // Decrementa il counter quando viene cliccato il pulsante '-'
    decrementBtn.addEventListener('click', function() {
      count--;
      counterValue.textContent = count;
    });
  });
