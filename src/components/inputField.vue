<template>
  <div>
    <div class="input-field"
         v-if="inputFlagRenewal"
    >
      <div>
        <input
            v-model='newRenewalDate'
            placeholder="Renewal date"
            type="date"
            class="validate datepicker-here"
        />
      </div>
      <div class="btn_color waves-effect waves-light z-depth-5"
        @click="UPDATE_RENEWAL_DATE({newRenewalDate, id, name})"
      >
        save
      </div>
    </div>

    <div class="input-field"
         v-if="inputFlagLicence"
    >
      <div>
        <input v-model='newRole' placeholder="Role" type="text" class="validate">
        <input v-model='renewalPrice' placeholder="Licence type" type="number" class="validate">
      </div>
      <div class="btn_color waves-effect waves-light z-depth-5"
           @click="UPDATE_RENEWAL_PRICE({renewalPrice, newRole, id})"

      >
        save
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
name: "inputField",
  data: () =>({
    newRenewalDate: '',
    newRole:'',
    renewalPrice:'',

  }),
  props:['inputFlagRenewal', 'inputFlagLicence', 'id', 'name'],
  methods:{
    ...mapActions('userManagement', ['UPDATE_RENEWAL_DATE', 'UPDATE_RENEWAL_PRICE'])
  }

}
</script>

<style scoped>
.input-field{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.btn_color{
  color: #C4C4C4;
  background: rgba(1,72,60,0.78);
  padding: 5px;
  width: 125px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 15px;
}
input{
  color: #C4C4C4;
}
</style>
