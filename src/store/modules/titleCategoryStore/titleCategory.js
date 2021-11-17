export default {
    namespaced: true,
    state: {
        titles: [
            {
                category: 'Discord tag',
                class: 'item1'
            },
            {
                category: 'Role',
                class: 'item2',
                sortType: 'byRole',
                img: 'UserMRevers.png'
            },
            {
                category: 'Licence type',
                class: 'item3',
                sortType: 'byLicence',
                img: 'UserMRevers.png'
            },
            {
                category: 'License key',
                class: 'item4'
            },
            {
                category: 'Renewal date',
                class: 'item5',
                sortType: 'byRenewDate',
                img: 'UserMRevers.png'
            },
            {
                category: 'Key bind',
                class: 'item6',
                sortType: 'byKeyBind',
                img: 'UserMRevers.png'
            },
            {
                category: 'Payment status',
                class: 'item7',
                sortType: 'byPaymentState',
                img: 'UserMRevers.png'
            },
            {
                category: 'Card bind',
                class:'item8',
                sortType: 'byCartBind',
                img: 'UserMRevers.png'
            },
            {
                category: '',
                class:'item9'
            },
        ],
    },

    getters: {
        titles(state) {
            return state.titles
        }
    }
}