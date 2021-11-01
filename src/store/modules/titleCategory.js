export default {
    namespaced: true,
    state: {
        titles: [
            {
                category: 'Discord tag',
                class: 'user_management_table_element_content item1'
            },
            {
                category: 'Role',
                class: 'user_management_table_element_content item5',
                sortType: 'byRole',
                img: 'UserMRevers.png'
            },
            {
                category: 'Licence type',
                class: 'user_management_table_element_content item2',
                sortType: 'byLicence',
                img: 'UserMRevers.png'
            },
            {
                category: 'License key',
                class: 'user_management_table_element_content item3'
            },
            {
                category: 'Renewal date',
                class: 'user_management_table_element_content item2',
                sortType: 'byRenewDate',
                img: 'UserMRevers.png'
            },
            {
                category: 'Key bind',
                class: 'user_management_table_element_content item4'
            },
            {
                category: 'Card bind',
                class:'user_management_table_element_content item6'
            },
        ],
    },

    getters: {
        titles(state) {
            return state.titles
        }
    }
}