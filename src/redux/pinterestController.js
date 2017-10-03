import axios from 'axios';

export const pinToBoard = function() {
    return axios.post("https://api.pinterest.com/v1/pins/")
    .then(response => response.data);
}