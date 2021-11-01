import Vue from 'vue';
import Vuex from 'vuex';
import userManagement from "./modules/userManagement";
import titleCategory from './modules/titleCategory';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        userManagement,
        titleCategory,
    }
})