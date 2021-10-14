<template>
  <div class="sidebar">
    <div class="sidebar_mainData ">
      <div class="logo">
        <img src="@/Assets/Photo/root.png" alt="img" class="logo_image">
      </div>

      <div class="sidebar_mainData_members">
        <p>1</p>
      </div>

      <div class="sidebar_mainData_revenue">
        <p>2</p>
      </div>

    </div>
    <div class="sidebar_menu " >
      <router-link
          v-for="link in links"
          :key="link.url"
          tag="div"
          class="page waves-effect waves-light"
          :to="link.url"
          active-class="page_active page"
          :exact="link.exact"
      >
        <img :src=" require('../../Assets/Photo/icons' + '/'+link.image)" alt="img" class="icons" >
        {{link.title}}
      </router-link>

    </div>

  </div>

</template>

<script>
export default {
  name: "Sidebar",
  data: () =>({
    links:[
      {title:'Аналитика', url:'/', image: 'free-icon-google-analytics-732035.png', exact: true},
      {title:'Управление дропами', url:'/managing', image: 'free-icon-money-493417.png'},
      {title:'Управление пользователями', url:'/user', image: 'free-icon-user-634011.png'},
      {title:'Управление лицензиями', url:'/license', image: 'door-key.png'},
    ]
  }),

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

.sidebar_mainData{
  display: flex;
  flex-direction: column;
  color: white;
  font-family: 'Roboto', sans-serif;
  justify-content: space-between;
  margin: 0 0 4vh 0 ;
  min-width: 120px;

}
.sidebar_mainData_members{
  background-color: #161E29;
  border-radius: 10px;
  padding: 1.5vh;
  margin: 6vh 3vh 2vh 3vh;
}
.sidebar_mainData_revenue{
  background-color: #161E29;
  border-radius: 10px;
  padding: 1.5vh;
  margin: 2vh 3vh 2vh 3vh;
}
.page_active{
  /*margin: 0.3vh;*/
  /*background-color: #161E29;*/
  /*padding: 3vh 1.5vh 3vh 3vh;*/
  /*display: flex;*/
  /*justify-content: flex-start;*/
  /*flex-direction: row;*/
  /*align-items: center;*/
  border-right-style: solid;
  border-color: #6E7F99 ;
  /*color: #EBEBEB;*/
}
.page{
  margin: 0.3vh;
  background-color: #161E29;
  padding: 3vh 1.5vh 3vh 3vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  color: #EBEBEB;
}
.logo{
  margin: 2vh 2vh 1.5vh 0;
  text-align: center;
}
.icons{
  height: 26px;
  width: 26px;
  margin-right: 1.75vh;
}
.logo_image {
  height: 50px;
  width: 128px;
  margin-left: 1.75vh;
}
/*.sidebar{*/
/*  background: #080D16;*/
/*  height: 100%;*/
/*  position: fixed;*/
/*  z-index: 100;*/
/*  width: 20%;*/
/*}*/
</style>