import axios from "axios";
let user= JSON.parse(localStorage.getItem("user_data"));


export default {
    async getOltDataPort() {
        const response = await axios.get("api/v1/sg-5/get-Olt_data_port/", {
            headers: {'User-ID': user.id},
          });
        return response.data;
    },

    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
};
