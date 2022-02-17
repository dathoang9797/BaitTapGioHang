import Footer from 'components/Buoi1/Components/Footer'
import Header from 'components/Buoi1/Components/Header'
import ProductList from 'components/Buoi1/Components/ProductList'
import Slider from 'components/Buoi1/Components/Slider'
import React from 'react'
import './style.css'

const Buoi1 = () => {
    return (
        <>
            <Header />
            <Slider />
            <ProductList />
            <Footer />
        </>
    )
}

export default Buoi1