import Vue from 'vue';
import Vuex from 'vuex';
import userManagementStore from "./modules/userManagementStore";
import titleCategory from './modules/titleCategoryStore/titleCategory';
import sideBar from "./modules/sideBarStore/sideBar";
import navBar from './modules/navBarStore/navBar'
import customersChart from "./modules/chart/customerChart";
import calendarRevenue from "./modules/calendarStore/index";
import calendarDeductions from "./modules/calendarStore/index";
import calendarSuccessfulPayments from "./modules/calendarStore/index";
import calendarCancelled from "./modules/calendarStore/index";
import dateSelectionUnsuccessful from "./modules/calendarStore/index";
import licenseManagement from "./modules/licenseManagementStore"
import managingDropsStore from './modules/managingDropsStore'
import toastedStore from './modules/toastedStore/tosted'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        userManagement: userManagementStore,
        titleCategory,
        sideBar ,
        navBar,
        customersChart,
        calendarRevenue,
        calendarDeductions,
        managingDropsStore,
        calendarSuccessfulPayments,
        calendarCancelled,
        dateSelectionUnsuccessful,
        toastedStore,
        licenseManagement: licenseManagement
    },
})
