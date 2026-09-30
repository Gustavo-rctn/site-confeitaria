


const fade = document.getElementById('fade');
const modal = document.getElementById('modal');
const modalTitle = document.querySelector('#modal h2');
const modalText = document.querySelector('#modal p');
const modalImage = document.getElementById('pix-image');

function abrir(botao) {
    if (!fade || !modal || !modalTitle || !modalText || !modalImage) return;

    const produto = botao?.dataset.product || 'Pedido';
    const imagem = botao?.dataset.pixImage || '../IMG/qrcode-pix.png';
    const alt = botao?.dataset.pixAlt || `QR code do ${produto}`;

    modalTitle.textContent = `Pagar ${produto}`;
    modalText.textContent = `Escaneie o QR code para confirmar o pagamento do ${produto}.`;
    modalImage.src = imagem;
    modalImage.alt = alt;

    fade.classList.add('fade');
    modal.classList.add('modal');
    fade.classList.remove('hide');
    modal.classList.remove('hide');
}

function fechar() {
    if (!fade || !modal) return;

    fade.classList.add('hide');
    modal.classList.add('hide');
    fade.classList.remove('fade');
    modal.classList.remove('modal');
}


