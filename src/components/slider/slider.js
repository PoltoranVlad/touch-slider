import React, {useState} from 'react';
import './slider.css'
import SliderArray from "./slides/slides";

const Slider = () => {

    const [x, setX] = useState(0)
    const arrLength = SliderArray.length;
    const step = 22.5;
    let isInitial = false;

    const prev = () => {
        setX(x + step)
        if (x < step * (-arrLength / 2)) {
            setX(0)
        } else if (x >= 0) {
            setX(step * (-arrLength / 2))
        }
    }
    const next = () => {
        setX(x - step)
        if (x <= step * (-arrLength / 2)) {
            setX(0)
        } else if (x > 0) {
            setX(step * (-arrLength / 2))
        }
    }
    let moving = false,
        initialPos = 0;
    const tMove = (e) => {
        if (moving) {
            let currentPos = e.touches[0].clientX;
            let dif = currentPos - initialPos;
            setX(dif)
        }
    }
    const tStart = (e) => {
        moving = true;
        initialPos = e.touches[0].clientX;
    }
    const tEnd = (e) => {
        moving = false;
    }


    return (
        <div className="outer track">
            <div className="inner track"
                 onTouchStart={tStart}
                 onTouchMoveCapture={tMove}
                 onTouchEnd={tEnd}
            >
                {SliderArray.map((slide, i) => {
                    return <img
                        key={i}
                        src={slide.path}
                        alt={'=('}
                        className='colors track'
                        style={{transform: `translateX(${x}px)`}}
                    />
                })}
                <button className="button prev" onClick={prev}/>
                <button className="button next" onClick={next}/>
            </div>
        </div>
    )

}
export default Slider

