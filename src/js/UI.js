import api from "./api.js";

const ui = {
    async renderizarPets(){
        //const listPets = document.getElementById('pets-list');
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


        // div com os icones
        
        const btnEditDele = document.createElement('div');
        btnEditDele.classList.add('botao-edit-dele');

        const iconEdit = document.createElement('img');
        iconEdit.src = "./src/assets/image/EDITA.png";
        iconEdit.alt = "imagem editar"
        iconEdit.classList.add("edit")
        iconEdit.onclick = ()=> ui.formEdit(pets.id)
    

        const iconDelet = document.createElement('img');
        iconDelet.src = "./src/assets/image/DELET.png";
        iconDelet.alt = "imagem DELETAR"
        iconDelet.classList.add("dele")
        iconDelet.onclick = async() =>{
            try {
                await api.deletPets(pets.id);
                ui.renderizarPets();
            } catch (error) {
                alert("Erro ao deletar e renderizar.");
                throw error;
            }
        }

        li.append(img, h2, p, span, btn, btnEditDele);
        btnEditDele.append(iconEdit, iconDelet);
        listPets.appendChild(li)

    },


    // chamar formulário para controle de atualização.
    async formEdit(petsId){
        const pets = await api.buscarPets(petsId)

        document.getElementById("pet-id").value = pets.id;
        document.getElementById("nome").value = pets.nome;
        document.getElementById("raca").value = pets.raca;
        document.getElementById("imagem").value = pets.imagem;
        document.getElementById("descricao").value = pets.descricao;
    }
}

export default ui