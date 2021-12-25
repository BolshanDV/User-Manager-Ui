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


              <div class="table_container">
                <div
                    class="color user_management_table_section "
                >
                  <div class="table_block">
                    <div
                        class="user_management_table_element waves-effect waves-light"
                    >
                      <div class="user_management_table_element_content item4">
                        <div class="text_element">
                        </div>
                      </div>
                      <div class="user_management_table_element_content item6">
                        <div class="text_element"

                        >
                        </div>
                      </div>
                      <div class="user_management_table_element_content item5">
                        <div class="text_element">
                          Create
                        </div>
                      </div>
                      <div class="user_management_table_element_content item10" >

                      </div>
                    </div >
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

      </div>
      <div></div>

    </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "tableManagementDrop",
  computed: {
    ...mapGetters(
        'userManagement',['preloader'],
    )
  }
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
.title_table{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
</style>
