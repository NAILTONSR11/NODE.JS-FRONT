import api from "./api.js";

const ui = {
    async renderizarPets(){
        const listPets = document.getElementById('pets-list');
        try {
            const pets = await api.obterPets();
            pets.forEach(ui.adicionarElements)
            
            /* (item => {
                listPets.innerHTML += `
                <li data-id = "${item.id}">
                    <img src="${item.imagem}" alt="${item.nome}">
                    <h2>${item.nome}</h2>
                    <p>${item.raca}</p>
                    <span>${item.descricao}</span>
                    <button>Quero Adotar</button>
                </li>
                `
            }); */

        } catch (error) {
            alert("Falha na renderização da API!")
            throw error
        }
    },

    adicionarElements(pets){
        const listPets = document.getElementById('pets-list');

        const li = document.createElement('li');
        li.setAttribute('data-id', pets.id);

        const img = document.createElement('img');
        img.src = pets.imagem;
        img.alt = `Imagem do dog: ${pets.nome}`

        const h2 = document.createElement('h2');
        h2.innerText = pets.nome;

        const p = document.createElement('p');
        p.innerText = pets.raca;

        const span = document.createElement('span');
        span.innerText = pets.descricao;

        const btn = document.createElement('button');
        btn.innerText = "Quero Adotar";

        const btnEdit = document.createElement('div');
        btnEdit.classList.add('botao-editar');

        const iconEdit = document.createElement('img');
        iconEdit.src = "./src/assets/image/EDITA.png";
        iconEdit.alt = "imagem editar"
        btnEdit.appendChild(iconEdit);



        li.append(img, h2, p, span, btn, btnEdit);

        listPets.appendChild(li)

    }
}

export default ui