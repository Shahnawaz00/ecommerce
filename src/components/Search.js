import { useState } from 'react';
import productsData from '../ProductsData';
import {Link} from 'react-router-dom';

const Search = ({productHandler}) => {

    const [searchData, setSearchData] = useState([])
    const [searchInput, setsearchInput] = useState('')

    const handleSearch = (e) => {
        const searchWord = e.target.value;
        setsearchInput(searchWord)
        const newSearch = productsData.filter((product) => {
            return product.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        searchWord === '' ? setSearchData([]) : setSearchData(newSearch)
    }
    const clearSearch = () => {
        setsearchInput('')
        setSearchData([])
    }

    return (
        <div>
      <div className='search' >
            <div className='s-i' >
                <input value={searchInput} type='text' placeholder='Search Any Products' onChange={handleSearch}  />
                <button>Search</button>
            </div>
     </div>
            {searchData.length !== 0 && (
                 <div className='s-r'> {searchData.map((product) => (
                    <Link className='links' onClick={() => productHandler(product.id)} to='/products/product'>
                         <div onClick={clearSearch} className='s-r-2' > {product.title}  in {product.category} </div>
                         </Link>
                         ))}
                </div>
                )}     
        
        </div>
    )
}

export default Search
