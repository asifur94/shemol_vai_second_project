import axios from "axios";
let user= JSON.parse(localStorage.getItem("user_data"));

const API_URL = 'https://ncare.io';
export default {
    async getOltDataPort() {
        const response = await axios.get(API_URL+"/api/v1/sg-5/get-Olt_data_port/", {
            headers: {'Authorization': user.id},
          });
        return response.data;
    },

    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
};
