import React, { useEffect, useState } from 'react';

function TextTransision(props) {
    const [texts, setTexts] = useState('')
    useEffect(() => {
        setTimeout(() => {
          if(texts.length) {
            if(props.text.split("")[texts.length]) {
                setTexts(texts + props.text.split("")[texts.length])
            }
          } else {
            setTexts(texts+props.text.split("")[0])
          }
        },20)
    }, [texts])
    useEffect(() => {
        setTimeout(() => {
          setTexts('')
        },3000)
    },[props.text])

    return (
        <div>
            {
                texts.split('').map((e,i)=> {
                    return <span key={i}>{e}</span>
                })
            }
        </div>
    );
}

export default TextTransision;