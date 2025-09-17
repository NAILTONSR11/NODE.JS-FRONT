const api = {
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

    }
}

export default api