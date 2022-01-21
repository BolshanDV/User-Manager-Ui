import dateIntervalFilter from "../sideBarStore/dateIntervalFilter";

export default {
    CREATURE_DATE_INTERVAL_FOR_API: async (start, end) => {
        const obj= {
            startDate: await dateIntervalFilter.CREATURE_DATE(start),
            endDate: await dateIntervalFilter.CREATURE_DATE(end)
        }
        return obj
    }
}
