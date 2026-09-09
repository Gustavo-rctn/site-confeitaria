



const fade = document.getElementById('fade');
const modal = document.getElementById('modal');

function abrir() {
    fade.classList.remove('hide');
    modal.classList.remove('hide');
}

function fechar() {
    fade.classList.add('hide');
    modal.classList.add('hide');
}



