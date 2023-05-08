/* eslint-disable */

import './img_card_slide.css';
import React, {useState} from 'react';
import $ from 'jquery';
// ← →
export function CardSlideV1() {
    
    const [images, nextImages] = useState([
        "assets/images/sample1.png", 
        "assets/images/sample2.png", 
        "assets/images/sample3.png"
    ]);
    const [index, nextImage] = useState(0);

    return (
        <>
            <div className='csv1-frame'>
                <input id='btn-slide' className="csv1-btn" type="button" value="<" onClick={() => onClickSlide("l")}></input>
                <div className='csv1-img-box'>
                    <img id='img' className='csv1-img' src={images[index]} alt="img"></img>
                </div>
                <input id='btn-slide' className="csv1-btn" type="button" value=">" onClick={() => onClickSlide("r")}></input>
            </div>
        </>
    )

    function onClickSlide(f) {
        if ($('#img').hasClass("slide-animation")) {
            $('#img').removeClass("slide-animation");
        } else {
            $('#img').addClass('slide-animation');
        }
        
        
        var new_index
        switch(f) {
            case "r":
                if (index === images.length - 1) {
                    new_index = 0
                } else {
                    new_index = index + 1
                }
                break
            case "l":
                if (index - 1 < 0) {
                    new_index = images.length - 1
                } else {
                    new_index = index - 1
                }
                break
            default:
                break
        }
        nextImage(new_index);
    }


}