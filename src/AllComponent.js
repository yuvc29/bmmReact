import React from 'react';
import './index.css';
import { Breadcrumb } from 'antd';
import Navbar from './Components/Navbar';
import MoviesSlider from './Components/MoviesSlider';
import AdsSlider from './Components/AdsSlider';

function AllComponent() {

    return (
        <div>
            <Navbar ></Navbar>
            <AdsSlider></AdsSlider>
            <MoviesSlider></MoviesSlider>
        </div>
    );
}

export default AllComponent;