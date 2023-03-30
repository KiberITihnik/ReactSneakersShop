import React from 'react';
import './scss/slider.scss';
import { leftArrow, rightArrow } from '../../utils/importIcon';

export default function BtnSlider({ direction, moveSlide }) {
    return (
        <button
            onClick={moveSlide}
            className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
            <img src={direction === 'next' ? rightArrow : leftArrow} />
        </button>
    );
}
