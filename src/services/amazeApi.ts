/* eslint-disable */

import axios from "axios";

const amazeApi = axios.create({
    baseURL: `https://api.tvmaze.com/`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default amazeApi;

