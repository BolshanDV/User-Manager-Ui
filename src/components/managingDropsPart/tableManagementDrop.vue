<template>
  <div>
    <header>
      Управление дропами
    </header>
    <div class="table_section_drop">
      <div class="main_section">
        <div class="item main_section">1</div>
        <div class="item main_section">2</div>
        <div class="item main_section">3</div>
      </div>
      <div class="main_section margin_table">
        <div class="license_recently">
          <div v-if="preloader"  >
            <Preloader />
          </div>
          <transition name="slide-fade">
            <div
                v-show="!preloader"
            >
              <div class="text_header">Недавно созданные</div>
              <div class="table_container">
                <div
                    class="color user_management_table_section "
                    v-for="(latestLicence, index) in latestLicences"
                    :key="index"
                >
                  <div class="table_block">
                    <div
                        class="user_management_table_element waves-effect waves-light"
                    >
                      <div class="user_management_table_element_content item4">
                        <div class="text_element">
                          {{ latestLicence.licenceDTO.licenceKey }}
                        </div>
                      </div>
                      <div class="user_management_table_element_content item6">
                        <div class="text_element"
                             :class="latestLicence.keyBindStyle"
                        >
                          {{ latestLicence.licenceDTO.keyBind}}
                        </div>
                      </div>
                      <div class="user_management_table_element_content item5">
                        <div class="text_element">
                          Create
                        </div>
                      </div>
                      <div class="user_management_table_element_content item10" >
                        <div class="text_element"
                             @click="INPUT_CHANGE_RENEWAL_DATE(latestLicence.userDTO.id)"
                        >
                          {{ latestLicence.licenceDTO.renewalDate}}
                          <img src="../../assets/photo/icons/pencil.png" alt="" class="delete">
                          <div
                              @click="KICK_USER(latestLicence.userDTO.id)"
                          >
                            <img
                                src="../../assets/photo/icons/delete.png"
                                class="delete"
                            >
                          </div>

                        </div>
                      </div>
                    </div >
                    <inputField
                        class="inputRenewal"
                        :id="latestLicence.userDTO.id"
                        :inputFlagRenewal="latestLicence.inputFlagRenewal"
                        v-if="latestLicence.inputFlagRenewal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "tableManagementDrop"
}
</script>

<style scoped>
header{
  font-size: 18px;
  line-height: 21px;
}
.table_section_drop{
  padding: 5px;
  margin-top: 15px;
}
.main_section{
  background: #101722;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
}
.item{
  margin-right: 20px;
  height: 30px;
}
.margin_table{
  margin-top: 10px;
}
</style>
