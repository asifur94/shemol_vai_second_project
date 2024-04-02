<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <!-- Card header -->
          <div class="pb-0 card-header">
            <div class="d-lg-flex">
              <div>
                <h5 class="mb-0">Olt Data Port List</h5>
              </div>
              <!-- <div class="my-auto mt-4 ms-auto mt-lg-0">
                <div class="my-auto ms-auto">
                  <a @click="alert" class="mb-0 btn bg-gradient-success btn-sm"
                    >+&nbsp; New User</a
                  >
                </div>
              </div> -->
            </div>
          </div>
          <div class="px-0 pb-0 card-body">
            <div class="table-responsive p-12" v-if="loader">Loading Data......</div>
            <div v-else class="table-responsive">
              <table id="users-list" ref="usersList" class="table table-flush">
                <thead class="thead-light">
                  <tr>
                    <th>Id</th>
                    <th>Vlan ID</th>
                    <th>Description</th>
                    <th>Mac Address</th>
                    <th>Port Number</th>
                    <th>PPPOE ID</th>                    
                    <th>Show</th>
                    <th>Distance</th>
                    <th>Last Dereg Reason</th>
                    <th>Alive Time</th>
                    <th>Olt Connect</th>
                    <th>Status</th>
                    <th>Last Update</th>
                    <th>Next Update Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody class="text-sm">
                  <tr v-for="(item,index) in data" :key="index">
                    <td>{{item.id?? '...'}}</td>
                    <td>{{item.vlan_id ?? '...'}}</td>
                    <td>{{item.description ?? '...'}}</td>
                    <td>{{item.mac_address ?? '...'}}</td>
                    <td>{{item.port_number ?? '...'}}</td>
                    <td>{{item.PPPOE_ID ?? '...'}}</td>
                    <td>{{item.show ?? '...'}}</td>
                    <td>{{item.distance ?? '...'}}</td>
                    <td>{{item.last_dereg_reason ?? '...'}}</td>
                    <td>{{item.alive_time ?? '...'}}</td>
                    <td>{{item.olt_connect ?? '...'}}</td>
                    <td>{{item.status ?? '...'}}</td>
                    <td>{{item.last_update ?? '...'}}</td>
                    <td>{{item.next_update_time ?? '...'}}</td>
                    <td>
                      <a
                        @click="alert"
                        id="1"
                        class="actionButton cursor-pointer me-3"
                        data-bs-toggle="tooltip"
                        title="Edit User"
                      >
                        <i class="fas fa-user-edit text-secondary"></i> </a
                      ><a
                        @click="alert"
                        id="2"
                        class="actionButton deleteButton cursor-pointer"
                        data-bs-toggle="tooltip"
                        title="Delete User"
                      >
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- <div
            class="d-flex justify-content-center justify-content-sm-between flex-wrap"
            style="padding: 24px 24px 0px"
          >
            <div>
              <p>Showing 1 to 1 of 1 entries</p>
            </div>
            <ul class="pagination pagination-success pagination-md">
              <li class="page-item prev-page disabled">
                <a class="page-link" aria-label="Previous">
                  <span aria-hidden="true"
                    ><i class="fa fa-angle-left" aria-hidden="true"></i
                  ></span>
                </a>
              </li>
              <li class="page-item disabled active">
                <a class="page-link" style="color: white">1</a>
              </li>
              <li class="page-item next-page disabled">
                <a class="page-link" aria-label="Next">
                  <span aria-hidden="true"
                    ><i class="fa fa-angle-right" aria-hidden="true"></i
                  ></span>
                </a>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import showSwal from "/src/mixins/showSwal.js";
import oltDataPortList from "../services/oltDataPortList.service";

export default {
  name: "Users",
  components: {
    //BasePagination,
  },
  data() {
    return {
        data:{},
        loader:false
    };
  },

  async mounted() {
      this.getData()
  },

  methods: {
    alert() {
      showSwal.methods.showSwal({
        type: "error",
        message: "This is a PRO feature.",
        width: 400,
      });
    },
    async getData() {
        this.loader=true
      this.data= await oltDataPortList.getOltDataPort();
      this.loader=false
    },
  },
};
</script>
<style>
td {
  padding: 12px 24px !important;
}
</style>
