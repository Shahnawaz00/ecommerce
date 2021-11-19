import productCategories from "../ProductCategories"
import {Link} from 'react-router-dom'


const Categories = ({categoryHandler}) => {

    

    return (
        <div className='categories'>
        <Link onClick={() => categoryHandler('')} to='/products' className='category links'>All Products</Link>
            {productCategories.map((category, index) => {
                return <Link to='/products' className='category links' onClick={() => categoryHandler(category)} > {category} </Link>
            })}
        </div>
    )
}

export default Categories
