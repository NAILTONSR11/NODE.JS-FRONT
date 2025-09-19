const api = {

    //Bucando e mostrando os dados do banco
    async obterPets(){
        // Métodos que vai Lidar com o tratamento de erros
        try {
            const response = await fetch('http://localhost:3000/pets')
            return await response.json()
        } catch (error) {
            alert("Erro ao fazer requisição!")
            throw error
        }
    },
    //Postando novos elementos no banco de dados
    async adicionarPets(pets){
        try {
            const response = await fetch('http://localhost:3000/pets', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pets)
            });
            return await response.json()
        } catch (error) {
            alert("Erro ao cadastrar novo pet!");
            throw error;
        }

    },

    // 1° passo - pegar o id
    async buscarPets(id){
        try {
            const response = await fetch(`http://localhost:3000/pets/${id}`);
            return await response.json();
        } catch (error) {
            alert("Falha ao buscar pelo ID");
            throw error;
        }
    },

    // 2° passo - atualização dos dados
    async atualizarPets(pets){
        try {
            const response = await fetch(`http://localhost:3000/pets/${pets.id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pets)
            })
            return await response.json();
        } catch (error) {
            alert("Falha ao atualizar o pet");
            throw error;
        }
    },

    // Deletando Dados
     async deletPets(id){
        try {
            const response = await fetch(`http://localhost:3000/pets/${id}`, {
            method: "DELETE"
            });
            return await response.json()
        } catch (error) {
            alert ("Erro ao deletar o pet");
            throw error;
        }
     }
}

export default api