const button_td = document.getElementById('button_td');
const button_tn = document.getElementById('button_tn');

button_td.addEventListener('click', function() {
    let valortd = document.getElementById('valortd');
    let basetd = document.getElementById('basetd');

    if(valortd.value == '' || basetd.value == '') {
        return '';
    }

    let valor = convertir_a_decimal(valortd.value, parseInt(basetd.value));
    let tdspan = document.getElementById('tdspan');
    tdspan.innerHTML = valor;
    tdspan.classList.remove('d-none');
});

button_tn.addEventListener('click', function() {
    let valortn = document.getElementById('valortn');
    let basetn = document.getElementById('basetn');

    if(valortn.value == '' || basetn.value == '') {
        return false;
    }

    let valor = convertir_basen(parseInt(valortn.value), parseInt(basetn.value));
    let tnspan = document.getElementById('tnspan');
    tnspan.innerHTML = valor;
    tnspan.classList.remove('d-none');

});
