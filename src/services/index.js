import axios from 'axios'

const getBook =  (value) =>{
    const API_URI = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
    pe=books&projection=lite`
    return axios.get(API_URI);
}
const getSearchValue =  (search, term)=>{
    const API_URI = `https://www.googleapis.com/books/v1/volumes?q=${search}+${term}&filter=paid-ebooks&print-type=books&projection=lite`
    
    console.log(API_URI)
    return axios.get(API_URI);
}

export{
    getBook,
    getSearchValue
}