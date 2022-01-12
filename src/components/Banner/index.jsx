import React, { useEffect, useState } from 'react';
import Item from './Item';
import './style.scss'

const banners = [
    {
        'title':'REACTPLUS.COM',
        'big-title':'当社はReactとReact Nativeのスペシャリストです。',
        'text': '何百もの日本企業のお客様に信頼されているReactエキスパートを提供します。',
        'image':'https://react-plus.com/images/slideShow/slide1.jpg'
    },
    {
        'title':'ラボ開発 - 請負開発',
        'text': 'ReactとReact Nativeを利用したプロジェクト開発サービスを提供しています。',
        'text-2': 'Reactエキスパート人材が豊富な当社が、お客様のご要望に的確にお応えいたします。',
        'image':'https://react-plus.com/images/slideShow/slide2.jpg'
    },
    {
        'title':'ラボ開発 - 請負開発',
        'text': 'ReactとReact Native',
        'text-2': 'Reactエキスパート人材が豊富な当社が、お客様のご要望に的確にお応えいたします。',
        'image':'https://react-plus.com/images/slideShow/slide3.jpg'
    }
]

function Banner() {
    const [dataBanner, setDataBanner] = useState(banners[0])
    const [index, setIndex] = useState(0)
    useEffect(() => {
        setTimeout(()=>{
            if(index === banners.length - 1 ) {
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
            
        }, 3000)
        setDataBanner(banners[index])
    })



    return (
        <div className='banner'>
            <Item data={dataBanner} />
        </div>
    );
}

export default Banner;