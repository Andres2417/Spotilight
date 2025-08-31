import axios from "axios";

const API_BASE_URL = '/api';


const recomendedTracks = async (state) => {
    const response = await axios.get(`${API_BASE_URL}/chart/0/tracks`);
    state(response.data.data)
}
const info = async (id, state) => {
    const response = await axios.get(`${API_BASE_URL}/track/${id}`);
    state(response.data)
}

export {
    recomendedTracks,
    info
}