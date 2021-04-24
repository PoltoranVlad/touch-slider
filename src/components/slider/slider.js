import React, {Component} from 'react';
import './slider.css'
import SliderArray from "./slides/slides";

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            // currentPos: 0,
            initialPos: 0,
        }

        this.bNext = this.bNext.bind(this);
        this.tMove = this.tMove.bind(this);
        this.tStart = this.tStart.bind(this);

    }

    bNext(){
        let _step = 222;
        this.setState(({x}) => ({
            x: x - _step
        }))
    }

    tStart(e){
        this.setState(({initialPos}) => ({
            initialPos: Math.round(e.touches[0].clientX)
        }))
        console.log('START POS - '+this.state.initialPos)
    }


    tMove(e) {
        let currentPos = Math.round(e.touches[0].clientX)
        let dif = currentPos - this.state.initialPos
        this.setState(({x}) => ({
            x: dif
        }))
        console.log((currentPos))
    }

    render() {
        return (
            <div className="outer track">
                <div className="inner track"
                    onTouchStart={this.tStart}
                    onTouchMove={this.tMove}
                    // onTouchEnd={}
                >
                    {SliderArray.map((slide, i) => {
                        return <img
                            key={i}
                            src={slide.path}
                            alt={'=('}
                            className='colors track'
                            style={{transform: `translateX(${this.state.x}px)`}}
                        />
                    })}
                    <button className="button prev" onClick={this.bNext}/>
                    <button className="button next" onClick={this.bNext}/>
                </div>
            </div>
        )
    }
}

