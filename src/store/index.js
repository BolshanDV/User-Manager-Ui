import Vue from 'vue';
import Vuex from 'vuex';
import userManagementStore from "./modules/userManagementStore";
import titleCategory from './modules/titleCategoryStore/titleCategory';
import sideBar from "./modules/sideBarStore/sideBar";
import navBar from './modules/navBarStore/navBar'
import customersChart from "./modules/chart/customerChart";
import calendarRevenue from "./modules/calendar/calendar";
import calendarDeductions from "./modules/calendar/calendar";
import calendarSuccessfulPayments from "./modules/calendar/calendar";
import calendarCancelled from "./modules/calendar/calendar";
import dateSelectionUnsuccessful from "./modules/calendar/calendar";
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
