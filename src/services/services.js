import URL from './config';

class TeamsService {
    
    getPlayers = async (id) => {
        try {
            const result = await fetch(`${URL}/atletas/mercado/${id}`)
            const data = await result.json();
            return {positions: data.posicoes, players: data.atletas};
        } catch (error) {
            throw error;
        }
    }
}

export default TeamsService