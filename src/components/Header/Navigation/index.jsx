import React from 'react';
import './style.scss'

const navList = [
    {
        'title':'ホーム',
        'link':'/',
        'id': '1'
    },
    {
        'title':'会社情報',
        'link':'/about',
        'id': '2'
    },
    {
        'title':'サービス',
        'link':'/services',
        'id': '3'
    },
    {
        'title':'テクニカルスタック',
        'link':'/technical',
        'id': '4',
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
        'link':'/team',
        'id': '5'
    },
    {
        'title':'プロジェクト',
        'link':'/projects',
        'id': '6'
    },
    {
        'title':'お問い合わせ',
        'link':'/contact',
        'id': '7'
    },
]

function Navigation(props) {
    console.log(props.active)
    return (
        <nav className='navigation'>
            <ul>
                {
                    navList.map((data, i) => {
                        return(
                            <li key={i} className={props.active === data.id ? 'navItem active' : 'navItem'}>
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