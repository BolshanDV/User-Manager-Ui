export default {
    CREATURE_DATE: async (date) => {

        let newDate = new Date(date)
        let dd = newDate.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = newDate.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = newDate.getFullYear();
        newDate = yy + '-' + mm + '-' + dd

        return newDate
    },
}
