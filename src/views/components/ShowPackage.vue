<template>
  <div class="row mt-4">
          <div class="col-xl-12">
            <div class="row">
              <div v-for="(item,index) in data" :key="index" class="col-md-4 py-3">
                <default-info-card @click="addToCart" class="cursor-pointer"
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

export default {
  name: "ShowPAckage",
  components: {
    DefaultInfoCard,
  },

  mounted() {
    this.getData();
  },

  data() {
      return {
          sortKey: '',
          sortOrder: 'asc',
          data: [],
          filteredData: [],
          searchQuery: "",
          currentPage: 1,
          itemsPerPage: 20
      };
  },

  methods: {
      addToCart(){
        alert('Added in Cart')
      },
      async getData() {
          const response = await packageList.getPackageListData();
          this.data = response;
          this.filteredData = response;
      },
  }
};
</script>



