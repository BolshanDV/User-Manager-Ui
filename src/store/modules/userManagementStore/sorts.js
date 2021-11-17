export default {
    SORT_BY_RENEWAL_DATE: async (users) => {
        return users.slice().sort((a, b) => {
            a = new Date(a.licenceDTO.renewalDate);
            b = new Date(b.licenceDTO.renewalDate);
            return b - a;
        })
    },

    SORT_BY_RENEWAL_PRICE: async (users) => {
        return users.slice().sort((a, b) => {
            a = a.licenceTypeDTO.renewalPrice;
            b = b.licenceTypeDTO.renewalPrice;
            return b - a;
        })
    },

    SORT_BY_ROLE: async (users) => {
        return users.slice().sort((a, b) => {
            a = a.licenceTypeDTO.role.toLowerCase();
            b = b.licenceTypeDTO.role.toLowerCase();
            if (a < b)
                return 1
            if (a > b)
                return -1
            return 0
        })
    },
    SORT_BY_KEY_BINDED: async (users) => {
        return users.slice().sort((a, b) => {
            a = a.licenceDTO.keyBind.toLowerCase();
            b = b.licenceDTO.keyBind.toLowerCase();
            if (a < b)
                return 1
            if (a > b)
                return -1
            return 0
        })
    },
    SORT_BY_PAYMENT_STATE: async (users) => {
        return users.slice().sort((a, b) => {
            a = a.paymentDTO.paymentState.toLowerCase();
            b = b.paymentDTO.paymentState.toLowerCase();
            if (a < b)
                return -1
            if (a > b)
                return 1
            return 0
        })
    },
    SORT_BY_CART_BIND: async (users) => {
        return users.slice().sort((a, b) => {
            a = a.billingDTO.cartBind.toLowerCase();
            b = b.billingDTO.cartBind.toLowerCase();
            if (a < b)
                return -1
            if (a > b)
                return 1
            return 0
        })
    },
}