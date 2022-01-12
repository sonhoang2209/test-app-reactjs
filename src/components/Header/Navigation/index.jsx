import React from 'react';
import './style.scss'

const navList = [
    {
        'title':'ホーム',
        'link':''
    },
    {
        'title':'会社情報',
        'link':''
    },
    {
        'title':'サービス',
        'link':''
    },
    {
        'title':'テクニカルスタック',
        'link':'',
        'dropList':[
            {
                'title':'Reactのテクニカルスタック',
                'link':''
            },
            {
                'title':'React Nativeのテクニカルスタック',
                'link':''
            },
            {
                'title':'コーディングサンプル(WEB)',
                'link':''
            },
            {
                'title':'コーディングサンプル(RN)',
                'link':''
            },
        ]
    },
    {
        'title':'当社のチーム',
        'link':''
    },
    {
        'title':'プロジェクト',
        'link':''
    },
    {
        'title':'お問い合わせ',
        'link':''
    },
]

function Navigation(props) {
    return (
        <nav className='navigation'>
            <ul>
                {
                    navList.map((data, i) => {
                        return(
                            <li key={i} className='navItem'>
                                <a href={data.link} className=''>{data.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default Navigation;