import axios from "axios";
import authHeader from "./auth-header";
// import Jsona from "jsona";
// const dataFormatter = new Jsona();

//const API_URL = process.env.VUE_APP_API_BASE_URL + '/';

const API_URL = 'https://ncare.io';
export default {
  async getProfile() {
    const response = await axios.get(API_URL+"/api/v1/sg-5/get_auth_user_info/", {
      headers: authHeader(),
    });

    return response.data;
  },

  /* async uploadPic(object) {
    let formData = new FormData();
    formData.append("attachment", object.pic);
    const response = await axios.post(
       "uploads/users/" + object.id + "/profile-image",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data.url;
  }, */

  /* async updateProfile(profile) {
    profile.type = "profile";
    delete profile.links;
    const response = await axios.patch(
      API_URL + "me",
      dataFormatter.serialize({ stuff: profile }),
      {
        headers: authHeader(),
      }
    );
    return dataFormatter.deserialize(response.data);
  }, */
};
