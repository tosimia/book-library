import axios from 'axios'

const getCategory =  (term, category) =>{
    const API_URI = `https://www.googleapis.com/books/v1/volumes?q=${term}:${category}&filter=paid-ebooks&print-ty
    pe=books&projection=lite`
    console.log(API_URI)
    return axios.get(API_URI);
}
const getSearch =  (search, term)=>{
    const API_URI = `https://www.googleapis.com/books/v1/volumes?q=${search}+${term}:${search}&filter=paid-ebooks&print-type=books&projection=lite`
    return axios.get(API_URI);
}

export{
    getCategory,
    getSearch
}