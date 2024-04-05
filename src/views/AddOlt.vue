<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <div id="basic-info" class="card mt-4">
        <div class="card-body pt-0">

          <div class="row mb-3 p-3">
            <div class="col-6 mb-3">
              <label class="form-label">Mikrotik IP</label>
              <input
                v-model="formData.Mikrotik_ip"
                type="text"
                placeholder="Mikrotik IP"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">Mikrotik Username</label>
              <input
                v-model="formData.m_username"
                type="text"
                placeholder="Mikrotik Username"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">Mikrotik Password</label>
              <input
                v-model="formData.m_password"
                type="text"
                placeholder="Mikrotik Password"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">Mikrotik Port</label>
              <input
                v-model="formData.m_port"
                type="text"
                placeholder="Mikrotik Password"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">OLT Name</label>
              <input
                v-model="formData.olt_name"
                type="text"
                placeholder="OLT Name"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">OLT IP</label>
              <input
                v-model="formData.olt_ip"
                type="text"
                placeholder="OLT IP"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">OLT Username</label>
              <input
                v-model="formData.olt_username"
                type="text"
                placeholder="OLT Username"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">OLT Password</label>
              <input
                v-model="formData.olt_password"
                type="text"
                placeholder="OLT Password"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">OLT Port</label>
              <input
                v-model="formData.olt_port"
                type="text"
                placeholder="OLT Password"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">Description</label>
              <input
                v-model="formData.description"
                type="text"
                placeholder="Description"
                class="form-control"
              />
            </div>
            
            <div class="col-6 mb-3">
              <label class="form-label">Next Update Time </label>
              <input
                v-model="formData.next_update_time"
                type="datetime-local" id="myDateTime"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">Login User</label>
              <input
                v-model="formData.login_user"
                type="text"
                placeholder="OLT Name"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">Olt Modes</label>
              <input
                v-model="formData.olt_modes"
                type="text"
                placeholder="OLT Name"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">Olt Brands</label>
              <input
                v-model="formData.olt_brands"
                type="text"
                placeholder="OLT Name"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">Status</label>
              <select v-model="formData.show" class="form-control" name="" id="">
                  <option value="true">Show</option>
                  <option value="false">Hide</option>
              </select>
            </div>
          </div>

          <button
            class="float-end mt-6 mb-0 btn btn-success"
            color="dark"
            variant="gradient"
            size="sm"
            @click="submitForm"
          >
            Add Olt
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addOlt from "../services/add-olt.service";
export default {
  data() {
    return {
      formData: {
        Mikrotik_ip: "",
        m_username: "",
        m_password: "",
        m_port: "",
        olt_ip: "",
        olt_username: "",
        olt_password: "",
        olt_port: "",
        description: "",
        show: true,
        olt_name: "",
        next_update_time: "",
        login_user: "",
        olt_modes: "",
        olt_brands: ""
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log("Form submitted with data:", this.formData);
      const response =  addOlt.addData(this.formData);
    }
  }
};
</script>
