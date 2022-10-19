import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID v68jfZBvIX-hyrIJ-VjE3nWyL8mmv2IrlRWbmRSVbf4",
      }
});

