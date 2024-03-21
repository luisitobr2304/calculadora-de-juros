document.getElementById('calculate').addEventListener('click', function() {
    const valor = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const time = document.getElementById('time').value;

    const total = valor * (1 + fee)** time;
    
    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));
});