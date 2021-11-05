import Vue from 'vue';
import Vuex from 'vuex';
import userManagement from "./modules/userManagement";
import titleCategory from './modules/titleCategory';
import sideBar from "./modules/sideBar";
import navbar from './modules/navbar'
import licenseManagement from "./modules/licenseManagement";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        userManagement,
        titleCategory,
        sideBar,
        navbar,
        licenseManagement
    }
})