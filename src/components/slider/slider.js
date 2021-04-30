import React, {useState} from 'react';
import './slider.css'
import SliderArray from "./slidesData";

const Slider = () => {
    const [x, setX] = useState(0)
    const [initPos, setInit] = useState(0)
    const [tr, setTr] = useState(0)
    let transformed

    const tStart = (e) => {
        setInit(e.touches[0].clientX)
        const transform = window.getComputedStyle(e.target).getPropertyValue('transform')
        transformed = parseInt(transform.split(',')[4].trim())
        if (transformed !== 0) {
            setTr(transformed)
        }
    }
    const tMove = (e) => {
        let currentPos = e.touches[0].clientX
        let dif = currentPos - initPos;
        setX(dif + tr)
        console.log(x)
    }
    const tEnd = () => {

    }

    return (
        <div className="outer">
            <div className="inner"
            >
                {SliderArray.map((slide, i) => {
                    return <img
                        onTouchMove={tMove}
                        onTouchStart={tStart}
                        onTouchEnd={tEnd}
                        key={i}
                        src={slide.path}
                        alt={'=('}
                        className='colors'
                        style={{transform: `translateX(${x}px)`}}
                    />
                })}
                <button className="button prev"/>
                <button className="button next"/>
            </div>
        </div>
    )
}
export default Slider
