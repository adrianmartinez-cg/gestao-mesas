function handleBoxClick(ev){
    let clickedBox = ev.target;
    if(clickedBox.classList.contains('light-box')){
        clickedBox.classList.remove('light-box');
        clickedBox.classList.add('dark-box');
        mesasOcupadas++;
    } 
    else if (clickedBox.classList.contains('dark-box')){
        clickedBox.classList.remove('dark-box');
        clickedBox.classList.add('light-box');
        mesasOcupadas--;
    }
    let mesasOcupadasSpan = document.getElementById('num-mesas-ocupadas');
    let mesasLivresSpan = document.getElementById('num-mesas-livres');
    mesasOcupadasSpan.innerText=mesasOcupadas;
    mesasLivresSpan.innerText=numTotalMesas - mesasOcupadas;
}

var mesasOcupadas = 0;
var numTotalMesas = 16;
let boxes = document.querySelectorAll(".box");
boxes.forEach(box => box.addEventListener('click',(ev) => handleBoxClick(ev)));
