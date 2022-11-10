
const formSubmit = event =>{
    let x = document.forms["form"]["name"].value;
        if (x == null || x === ""){
            event.preventDefault();
        }
    }

document.querySelector('form').addEventListener('submit', formSubmit)


const check = obj => obj.value.length < 1 ? obj.classList.add('error') : obj.classList.remove('error');