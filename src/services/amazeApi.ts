import axios from "axios";

const amazeApi = axios.create({
    baseURL: process.env.VUE_APP_AMAZE_API,
    headers: {
        "Content-Type": "application/json",
    },
});

export default amazeApi;

