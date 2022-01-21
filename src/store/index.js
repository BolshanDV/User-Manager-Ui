import Vue from 'vue';
import Vuex from 'vuex';
import userManagementStore from "./modules/userManagementStore";
import titleCategory from './modules/titleCategoryStore/titleCategory';
import sideBar from "./modules/sideBarStore/sideBar";
import navBar from './modules/navBarStore/navBar'
import customersChart from "./modules/chart/customerChart";
import calendarRevenue from "./modules/calendarStore";
import calendarDeductions from "./modules/calendarStore";
import calendarSuccessfulPayments from "./modules/calendarStore";
import calendarCancelled from "./modules/calendarStore";
import dateSelectionUnsuccessful from "./modules/calendarStore";
import licenseManagement from "./modules/licenseManagementStore"
import managingDropsStore from './modules/managingDropsStore'

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
        licenseManagement: licenseManagement
    },
})
