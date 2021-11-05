import axios from "axios";

export default {
    namespaced: true,
    state:{

    },
    actions: {
        AUTHORIZATION: async () => {
            console.log('Мы тут')
            return await axios
                .get(`http://localhost:8082/api/v1/oauth2/authorization/discord`)
                .then(response =>
                    response.status
                )
                .catch(error => {
                    console.log("There was an error!", error);
                });
        }
    }
}