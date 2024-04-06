<template>
  <div class="row mt-4">
    <!--Month List Popup -->
      <div v-if="showPopup" id="myModal" class="modal">
      <div class="modal-content">
        <span @click="popup_close" class="close">&times;</span>
        <h3 class="form-label">Select Month</h3>
        <div class="my-3">
          <select v-model="selected_month" name="" id="" class="form-control">
            <option value="" disabled selected hidden>Select</option>
            <option  v-for="(item,index) in month_data" :key="index" :value="index">{{item}}</option>
          </select>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <button class="btn btn-secondary mx-3" @click="popup_close">Cancel</button>
          <button class="btn btn-success" @click="addToCart">Confirm</button>
        </div>
      </div>
    </div>



          <div class="col-xl-12">
            <div class="row">
              <div v-for="(item,index) in data" :key="index" class="col-md-4 py-3">
                <default-info-card @click="popup_open(item.id)" class="cursor-pointer"
                  icon="text-white fas fa-shopping-cart"
                  :title="item.name"
                  :port_count="item.port_count"
                  :olt_modes="item.olt_modes"
                  :value="'Tk '+item.price"
                />
              </div>
            </div>
          </div>
         <!-- <PaymentMethodsCard/> -->
        </div>
</template>
<script>

import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
//Service 
import packageList from "../../services/get-package-list.service";
import MonthList from "../../services/get-month-list.service";
import Invoice from "../../services/post-generate-invoice.service";
import showSwal from "../../mixins/showSwal.js";

export default {
  name: "ShowPAckage",
  components: {
    DefaultInfoCard,
  },

  mounted() {
    this.getData();
    this.getMonthData();
  },

  data() {
      return {
          sortKey: '',
          sortOrder: 'asc',
          data: [],
          month_data: [],
          filteredData: [],
          searchQuery: "",
          currentPage: 1,
          itemsPerPage: 20,
          showPopup:false,
          selected_month:'',
          formData:{
            olt_pack:null,
            cycle_type:'',
            customer:'',
          }
      };
  },

  methods: {
      popup_open(id){
        this.formData.olt_pack =id
        let user= JSON.parse(localStorage.getItem("user_data"));
        this.formData.customer =user.id
        this.showPopup = true
      },
      popup_close(){
        this.showPopup = false
         this.formData.olt_pack =null
         this.formData.cycle_type =''
      },
      async addToCart(){
        this.formData.cycle_type = this.selected_month
        await Invoice.generateInvoiceData(this.formData)
         showSwal.methods.showSwal({
              type: "success",
                message: "Invoice Generated Successfully!",
            });
            this.popup_close()
      },
      async getData() {
          const response = await packageList.getPackageListData();
          this.data = response;
          this.filteredData = response;
      },
      async getMonthData() {
          const response = await MonthList.getMonthListData();
          this.month_data = response;
      },
  }
};
</script>

<style scoped>
/* The Modal (background) */
.modal { 
  display: block;/* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1000000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background: #aaaaaa;
   /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #ffffff; /* White background */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Shadow */
  max-width: 50%; /* Set max width */
  padding: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

/* Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

</style>




