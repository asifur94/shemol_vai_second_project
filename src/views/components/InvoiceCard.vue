<template>
  <div class="card h-100 mt-4">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0">Invoices</h6>
        </div>
        <div class="col-6 text-end">
          <!-- <soft-button color="success" size="sm" variant="outline"
            >View All</soft-button
          > -->
        </div>
      </div>
    </div>
    <div class="card-body p-3 pb-0 mb-0">
      <ul class="list-group">
        <li v-for="(item,index) in data" :key="index"
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex flex-column">
            <h6 class="mb-1 text-dark font-weight-bold text-sm">
              {{item.olt_pack}} 
              <sup>
              <soft-badge v-if="item.is_paid == true" color="success" variant="gradient" size="xl">
                Paid
              </soft-badge>
              <soft-badge v-else-if="item.is_paid == false" color="danger" variant="gradient" size="xl">
                Due
              </soft-badge>
            </sup>

            </h6>
            <span class="text-xs">#{{item.invoice_number}}</span>
          </div>
          <div class="d-flex align-items-center text-sm">
           <span> Tk {{item.total_amount}}</span>
              <soft-badge class="ms-3 cursor-pointer" v-if="item.is_paid == false" color="dark" variant="gradient">
              Pay
            </soft-badge>
            <button v-else class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
              <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
              PDF
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import SoftButton from "@/components/SoftButton.vue";
import SoftBadge from "@/components/SoftBadge.vue";
//Service 
import invoiceList from "../../services/get-user-invoice-list.service";

export default {
  name: "InvoiceCard",
  components: {
    // SoftButton,
    SoftBadge
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
      async getData() {
          const response = await invoiceList.getUserInvoiceDataList();
          this.data = response;
          this.filteredData = response;
      },
  }
  
};
</script>
