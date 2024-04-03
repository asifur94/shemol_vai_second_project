import axios from "axios";
const API_URL = process.env.VUE_APP_API_BASE_URL;
let token = JSON.parse(localStorage.getItem("userF"));
export default {
  async getProfile() {
    const response = await axios.get(API_URL+"/api/v1/sg-5/get_auth_user_info/", {
      headers: {
        'Authorization': 'Bearer ' + token}
    });

    return response.data;
  },
};
