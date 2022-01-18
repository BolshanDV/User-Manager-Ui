<template>
  <div>
    <div class="second_section">
      <header>Управление дропами</header>
      <div class="table_section_drop">
        <div class="menu_drop">
          <div
              v-for="dropListItem in dropList"
              :key="dropListItem.password"
              class="menu_drop_section"
              @click="GET_DATA_DROP_INFO(dropListItem)"
          >
            {{dropListItem.creationDate}}
          </div>
        </div>
        <div class="margin_table">
          <div class="license_recently">
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
              <transition-group name="slide-fade" class="scroll" tag="div">
                <div
                    v-show="!preloader"
                    v-for="dropAnalytic in dropAnalytics.licences"
                    :key="dropAnalytic.id"
                    class="color user_management_table_section scroll_item"
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
                          <div v-if="dropAnalytic.keyBind === false">Not binded</div>
                          <div v-if="dropAnalytic.keyBind === true">Binded</div>
                        </div>
                      </div>
                      <div class="user_management_table_element_content item2" >
                        <div class="text_element unbinded"
                             @click="DELETE_LICENCE(dropAnalytic.id)"
                        >
                          <img
                              src="../../assets/photo/icons/delete.png"
                              class="delete"
                          >
                        </div>
                      </div>
                    </div >
                  </div>
                </div>
              </transition-group>
              <div class="drop_info">
                <div class="status_drop">
                  <div class="status_drop_description" >Cтатус дропа</div>
                  <div
                      v-if="status_drop.isActive"
                      class="binded"
                  >
                    {{status_drop.isActive}}
                  </div>
                  <div
                      v-else
                      class="unbinded"
                  >
                    {{status_drop.isActive}}
                  </div>
                </div>

                <div class="link">
                  Ссылка на дроп
                  <div class="url">
                    https://cmd-root.com/?password={{status_drop.password}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "tableManagementDrop",
  computed: {
    ...mapGetters('userManagement',['preloader']),
    ...mapGetters('managingDropsStore', ['dropAnalytics', 'titleBlockDrop', 'dropList', 'status_drop'])
  },
  methods: {
    ...mapActions('managingDropsStore', ['DELETE_LICENCE', 'GET_DATA_DROP_INFO'])
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
  /*justify-content: center;*/
  align-items: center;
  /*width: 100%;*/
  background: #101722;
  border-radius: 5px;
  padding: 10px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none
}
.menu_drop_section{
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  padding: 2px;
  min-width: 100px;
  scroll-snap-align: start;
}
.second_section{
  background: #0D121A;
  border-radius: 10px;
  padding: 12px;
}
.delete{
  width: 14px;
  height: 15px;
  margin: 0 10px 0 10px;
}
.drop_info{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0 0 8px;
}
.status_drop{
  margin-right: 50px;
  display: flex;
  flex-direction: row;
}
.link{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.url{
  margin-left: 15px ;
  color: #8E8E8E;
}
.scroll{
  overflow-y: auto;
  scroll-snap-type: y;
  max-height: 55vh;
}
.status_drop_description{
  margin-right: 15px;
}
.scroll::-webkit-scrollbar {
  width: 0;
}
/*.scroll_item{*/
/*  scroll-snap-align: start;*/
/*}*/
</style>
