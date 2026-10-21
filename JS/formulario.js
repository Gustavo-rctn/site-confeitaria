function cadastrar(event) {
    event.preventDefault();
}

const campoCep = document.getElementById("cep");
const retornoCep = document.getElementById("cep-feedback");
let temporizadorCep;
let requisicaoCep;

campoCep.addEventListener("input", () => {
    window.clearTimeout(temporizadorCep);

    if (requisicaoCep) {
        requisicaoCep.abort();
        requisicaoCep = null;
    }

    const cep = campoCep.value.replace(/\D/g, "");
    retornoCep.textContent = "";

    if (cep.length !== 8) {
        if (cep.length > 8) {
            retornoCep.textContent = "Digite um CEP válido com 8 números.";
        }
        return;
    }

    retornoCep.textContent = "Buscando endereço...";
    temporizadorCep = window.setTimeout(() => buscarEndereco(cep), 300);
});

async function buscarEndereco(cep) {
    if (requisicaoCep) {
        requisicaoCep.abort();
    }

    requisicaoCep = new AbortController();

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
            signal: requisicaoCep.signal
        });

        if (!resposta.ok) {
            throw new Error("Não foi possível consultar o CEP.");
        }

        const endereco = await resposta.json();

        if (endereco.erro) {
            retornoCep.textContent = "CEP não encontrado. Confira os números e tente novamente.";
            return;
        }

        document.getElementById("logradouro").value = endereco.logradouro || "";
        document.getElementById("bairro").value = endereco.bairro || "";
        document.getElementById("cidade").value = endereco.localidade || "";
        document.getElementById("estado").value = endereco.estado || "";
        document.getElementById("uf").value = endereco.uf || "";
        retornoCep.textContent = "Endereço preenchido.";
    } catch (erro) {
        if (erro.name === "AbortError") {
            return;
        }

        retornoCep.textContent = "Não foi possível buscar o CEP. Verifique sua conexão e tente novamente.";
    }
}

