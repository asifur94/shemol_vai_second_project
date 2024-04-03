<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <!-- Card header -->
          <div class="pb-0 card-header">
            <div class="d-lg-flex justify-content-between mx-3">
              <div>
                <h5 class="mb-0">Olt Data Port List</h5>
              </div>
              <div >
                <input type="text" v-model="searchQuery" class="form-control" placeholder="Search...">
            </div>
            </div>
          </div>
            
          <div class="px-0 pb-0 card-body">
            <div class="table-responsive">
              <table id="users-list" class="table table-striped table-bordered">
                <thead class="thead-light">
                  <tr>
                     <th @click="sort('id')">Id</th>
                    <th @click="sort('vlan_id')">Vlan ID</th>
                    <th @click="sort('description')">Description</th>
                    <th @click="sort('mac_address')">Mac Address</th>
                    <th @click="sort('port_number')">Port Number</th>
                    <th @click="sort('PPPOE_ID')">PPPOE ID</th>                    
                    <th @click="sort('show')">Show</th>
                    <th @click="sort('distance')">Distance</th>
                    <th @click="sort('last_dereg_reason')">Last Dereg Reason</th>
                    <th @click="sort('alive_time')">Alive Time</th>
                    <th @click="sort('olt_connect')">Olt Connect</th>
                    <th @click="sort('status')">Status</th>
                    <th @click="sort('last_update')">Last Update</th>
                    <th @click="sort('next_update_time')">Next Update Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody class="text-sm">
                  <!-- Use paginatedData instead of filteredData -->
                  <tr v-for="(item,index) in paginatedData" :key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.vlan_id }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.mac_address }}</td>
                    <td>{{ item.port_number }}</td>
                    <td>{{ item.PPPOE_ID }}</td>
                    <td>{{ item.show }}</td>
                    <td>{{ item.distance }}</td>
                    <td>{{ item.last_dereg_reason }}</td>
                    <td>{{ item.alive_time }}</td>
                    <td>{{ item.olt_connect }}</td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.last_update }}</td>
                    <td>{{ item.next_update_time }}</td>
                    <td>
                      <a @click="editUser(item)" class="actionButton cursor-pointer me-3" data-bs-toggle="tooltip" title="Edit User">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a @click="deleteUser(item)" class="actionButton deleteButton cursor-pointer" data-bs-toggle="tooltip" title="Delete User">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pagination-container">
                  <button class="btn btn-sm btn-success ml-3 mt-3" @click="previousPage" :disabled="currentPage === 1">Previous</button>
                  <span class="mx-2">Page {{ currentPage }} of {{ totalPages }}</span>
                  <button class="btn btn-sm btn-success mt-3" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import oltDataPortList from "../services/oltDataPortList.service";

export default {
  name: "Users",
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
  async mounted() {
    await this.getData();
  },
  methods: {
    async getData() {
      this.data = await oltDataPortList.getOltDataPort();
      this.filteredData = this.data;
    },
    sort(key) {
      if (this.sortKey === key) {
        // If already sorted by the same key, reverse the sort order
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        // If sorting by a new key, set the sort key and reset the sort order to ascending
        this.sortKey = key;
        this.sortOrder = 'asc';
      }

      this.filteredData.sort((a, b) => {
        const valueA = a[key] ? a[key].toString().toLowerCase() : '';
        const valueB = b[key] ? b[key].toString().toLowerCase() : '';
        const comparison = valueA.localeCompare(valueB);

        // Apply sort order based on the current state
        return this.sortOrder === 'asc' ? comparison : -comparison;
      });
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredData.slice(startIndex, startIndex + this.itemsPerPage);
    }
  },
  watch: {
    searchQuery(newValue) {
      this.filteredData = this.data.filter(item => {
        for (let key in item) {
          if (String(item[key]).toLowerCase().includes(newValue.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
      // Reset currentPage when searchQuery changes
      this.currentPage = 1;
    }
  }
};
</script>

<style>
td {
  padding: 12px 24px !important;
}
</style>
