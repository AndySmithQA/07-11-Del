const para = document.querySelector('p')
para.onclick = () => {
    alert("Hi")
}

document.querySelector('p').addEventListener('mouseover', makeRed);
document.querySelector('p').addEventListener('mouseout', makeBlack);


function makeRed() {
    para.style.color = 'red';
}

function makeBlack() {
    para.style.color = '';
}

//Prevent Default 

document.getElementById('mya').addEventListener("click", function(event){
    event.preventDefault();
})

document.getElementById('b').addEventListener('mousedown', mouseEvent, true);
function mouseEvent(e) {
    document.getElementById('out').innerHTML = `${e.pageX} ${e.pageY}`;
}

const anon = document.getElementById('anon')
const arrow = document.getElementById('arrow')

anon.addEventListener('click', function(){
    let out = (this)
    document.getElementById('anonOut').innerHTML = out
})

arrow.addEventListener('click', () =>{
    let out = (this)
    document.getElementById('arrowOut').innerHTML = out
})

document.getElementById('mya').removeEventListener()
