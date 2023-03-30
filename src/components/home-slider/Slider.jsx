import React, { useState } from 'react';
import './scss/slider.scss';
import BtnSlider from './BtnSlider';
import { ImgSlider1, ImgSlider2, ImgSlider3 } from '../../utils/importIcon';

const images = [ImgSlider1, ImgSlider2, ImgSlider3];

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== images.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === images.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(images.length);
        }
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    return (
        <div className="container-slider">
            {images.map((image, index) => {
                return (
                    <div
                        key={index}
                        className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
                        <img src={image} alt={image} />
                    </div>
                );
            })}
            <BtnSlider moveSlide={nextSlide} direction={'next'} />
            <BtnSlider moveSlide={prevSlide} direction={'prev'} />

            <div className="container-dots">
                {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? 'dot active' : 'dot'}></div>
                ))}
            </div>
        </div>
    );
}
