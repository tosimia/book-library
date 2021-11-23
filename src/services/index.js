import axios from 'axios'

const getBook =  (value) =>{
    const API_URI = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
    pe=books&projection=lite`
    return axios.get(API_URI);
}

export{
    getBook
}