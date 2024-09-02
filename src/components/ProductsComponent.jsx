import { useEffect, useState } from 'react';
import PostService from '../services/postService'
import SingleCardComponent from './SingleCardComponent';

function ProductsComponent() {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        PostService.getAllProducts()
            .then((res) => setAllProducts(res.data.products))
            .catch((err) => console.log(err));

        // PostService.getSingleProduct()
        //     .then(res => console.log(res.data))
        //     .catch((err) => console.log(err)
        //     );
    }, [])

    return (
        <div className='bg-slate-400 dark:bg-orange-700'>
            <div className='container mx-auto'>
                <h2>All My Products</h2>
                <div className="flex flex-wrap gap-[20px] justify-center">

                    {allProducts.map((el, index) => {
                        return <SingleCardComponent el={el} key={index} />
                    })
                    }

                </div>
            </div>
        </div>
    )
}

export default ProductsComponent