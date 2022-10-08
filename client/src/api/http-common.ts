/*=============================================== Http common ===============================================*/

/*
    Create API link
*/

import axios from "axios"

export default axios.create({
    baseURL: "/api",
    headers: {
        "Content-type": "application/json",
    },
})
