import api from "./api.js";
import ui from "./UI.js"

document.addEventListener('DOMContentLoaded', ()=>{
    ui.renderizarPets();
 
    const form = document.getElementById('pet-form');
    form.addEventListener("submit", manipulaForm);
})

async function manipulaForm(event){
    event.preventDefault();

    const id = document.getElementById('pet-id').value;
    const nome = document.getElementById('nome').value;
    const raca = document.getElementById('raca').value;
    const imagem = document.getElementById('imagem').value;
    const descricao = document.getElementById('descricao').value;


    try {
        await api.adicionarPets({nome, raca, descricao, imagem});
        ui.renderizarPets();
    } catch (error) {
        alert("Erro ao adicionar novo pet!")
       throw error
    }
}