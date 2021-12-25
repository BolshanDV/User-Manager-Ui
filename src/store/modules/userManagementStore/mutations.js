export default {
    UPDATE_USERS(state, users) {
        state.users = users
        state.firstUsers = users
        state.preloader = false
        state.usersSearch = users
    },

    HANDLE_CLICK(state, id) {
        state.users[id].flag = !state.users[id].flag;
    },

    SORTED_USERS: (state, sortedUsers) => {
        state.users = sortedUsers
    },

    NO_SORTING: state => {
        state.sorts.sortIsActive = false;
        state.sorts.byLicence = false;
        state.sorts.byRenewDate = false;
        state.sorts.byRole = false
        state.users = state.firstUsers
    },

    CHANGE_NAME: (state, id) => {
        state.users[id].kickUserText = 'Are you sure?'
    },

    CHANGE_NAME_RETURN: (state, id) => {
        state.users[id].kickUserText = 'KICK USER'
    },

    INPUT_CHANGE_RENEWAL_DATE: (state, userId) => {
        const index = state.users.findIndex(item => item.userDTO.id === userId);
        state.users[index].inputFlagRenewal = !state.users[index].inputFlagRenewal;

    },

    INPUT_CHANGE_LICENCE: (state, userId) => {
        const index = state.users.findIndex(item => item.userDTO.id === userId);
        state.users[index].inputFlagLicence = !state.users[index].inputFlagLicence;
    },

    FILTERED_NAME: (state, search) => {
        if (search === '') {
            state.usersSearch = state.users
        } else {
            state.usersSearch = state.users.filter(item => item.userDTO.discordUsername.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        }

    }
}
