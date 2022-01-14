import React from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Introducts from '../components/Introducts'


export default function Home() {
    return (
        <div>
            <Header type active='1' />
            <Banner />
            <Introducts />
            <Footer />
        </div>
    )
}


