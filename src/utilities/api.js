import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3"
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

//Below is one more method 
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzZlNzRhNDlmOGViMmFkZWJhMTBkYmI0ZWMxYTJjYiIsInN1YiI6IjY1ODA3OTM2ZDUxOTFmMDNkOWFkN2MzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VVgm6GB9VfpCHEcTd5uHuIOqG2W9MjlivysvI1xwj1U"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,  //there should be space after "bearer "
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,             //header:headers
            params               //param:params
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}