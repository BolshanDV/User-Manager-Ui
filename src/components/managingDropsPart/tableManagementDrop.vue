<template>
  <div>
    <div class="second_section">
      <header>
        Управление дропами
      </header>
      <div class="table_section_drop">
        <div class="menu_drop">
          <div class="menu_drop_section">1</div>
          <div class="menu_drop_section">2</div>
          <div class="menu_drop_section">3</div>
        </div>
        <div class=" margin_table">
          <div class="license_recently">
            <div v-if="preloader">
              <Preloader />
            </div>
            <div class="user_management_table">
              <div class="user_management_table_element">
                <div
                    v-for="titleBlockDropItem in titleBlockDrop"
                    :key="titleBlockDropItem.category"
                    class="user_management_table_element_content"
                    :class="[titleBlockDropItem.class]"
                >
                  {{titleBlockDropItem.category}}
                </div>
              </div>

              <transition-group name="slide-fade">
                <div
                    v-show="!preloader"
                    v-for="dropAnalytic in dropAnalytics"
                    :key="dropAnalytic.id"
                    class="color user_management_table_section"
                >
                  <div class="table_block">
                    <div
                        class="user_management_table_element waves-effect waves-light"
                    >
                      <div class="user_management_table_element_content item4">
                        <div class="text_element">
                          {{dropAnalytic.licenceKey}}
                        </div>
                      </div>
                      <div class="user_management_table_element_content item3">
                        <div class="text_element binded"
                        >
                          Paid
                        </div>
                      </div>
                      <div class="user_management_table_element_content item6">
                        <div class="text_element">
                          Not binded
                        </div>
                      </div>
                      <div class="user_management_table_element_content item2" >
                        <div class="text_element unbinded">
                          Delete
                        </div>
                      </div>
                    </div >
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "tableManagementDrop",
  computed: {
    ...mapGetters('userManagement',['preloader']),
    ...mapGetters('managingDropsStore', ['dropAnalytics', 'titleBlockDrop'])
  }
}
</script>

<style scoped>
.color{
  background-color: #161E29;
  border-radius: 3px;
}
header{
  font-size: 18px;
  line-height: 21px;
}
.table_section_drop{
  padding: 5px;
  margin-top: 15px;
}

main_section_title{
  padding: 5px;
}
.margin_table{
  margin-top: 10px;
}

.table_block{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.menu_drop{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #101722;
  border-radius: 5px;
  padding: 8px;
}
.menu_drop_section{
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  padding: 2px;
  width: 60px;
}
.second_section{
  background: #0D121A;
  border-radius: 10px;
  padding: 12px;
}
</style>
