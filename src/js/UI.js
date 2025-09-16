import api from "./api.js";

const ui = {
    async renderizarPets(){
        const listPets = document.getElementById('pets-list');
        try {
            const pets = await api.obterPets();
            pets.forEach(item => {
                listPets.innerHTML = `
                <li data-id = "${item.id}">
                    <img src="${item.imagem}" alt="${item.nome}">
                    <h2>${item.nome}</h2>
                    <p>${item.raca}</p>
                    <span>${item.descricao}</span>
                    <button>Quero Adotar</button>
                </li>
                `
            });
        } catch (error) {
            alert("Falha na renderização da API!")
            throw error
        }
    }
}

export default ui