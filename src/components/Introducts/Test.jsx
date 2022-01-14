import React, { useEffect, useState } from 'react';
import axios from '../../axios/config';

function TestAxios(props) {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const products = await axios.post('/menu')
            setProducts(products.data.menu[1].products);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getProducts()
    },[])

    function RenderProduct(data) {
        return (
            <div className='product'>
                <img src={data.data.thumbnail} alt={data.data.name} width={100} />
                <h3>{data.data.name}</h3>
            </div>
        )
    }

    return (
        <div className='products'>
            {
                products.map((data, index) => {
                    return (
                        <RenderProduct data={data} key={index} />
                    )
                })
            }
        </div>
    );
}

export default TestAxios;