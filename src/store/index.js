import Vue from 'vue';
import Vuex from 'vuex';
import userManagement from "./modules/userManagement";
import titleCategory from './modules/titleCategory';
import sideBar from "./modules/sideBar";
import licenseManagement from "./modules/licenseManagement";
import navBar from './modules/navBar'
import customersChart from "./modules/chart/customerChart";
import calendar from "./modules/Calendar/calendar";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        userManagement,
        titleCategory,
        sideBar,
        licenseManagement,
        navBar,
        customersChart,
        calendar
    }
})