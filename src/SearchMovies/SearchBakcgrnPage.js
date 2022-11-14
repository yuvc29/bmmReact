import React from 'react';
import './SearchBakcgrnPage.css';

import MovieArray from '../AllArray/MovieArray';

function SearchBakcgrnPage() {

    return (
        <div className="SearchBackgroundItems">
            <div className="searchbackgrounfNAv">
                <div className="searchbackgrounfNAvLeft">
                    <div className="searchbackgrounfNAvLeft1">MOVIES</div>
                    <div className="searchbackgrounfNAvLeft1">CINEMAS</div>
                </div>
                <div className="searchbackgrounfNAvRight">
                    <div className="searchbackgrounfNAvRight1">PUNJABI</div>
                    <div className="searchbackgrounfNAvRight1">TAMIL</div>
                    <div className="searchbackgrounfNAvRight1">TELUGU</div>
                    <div className="searchbackgrounfNAvRight1">KANNADA</div>
                    <div className="searchbackgrounfNAvRight1">ENGLISH</div>
                    <div className="searchbackgrounfNAvRight1">HINDI</div>
                    <div className="searchbackgrounfNAvRight1">BENGALI</div>
                </div>
            </div>
            <div className='searchbottom'>
                <div className='searchbottomb1'>
                    <ul className='searchbottomb1ul'>
                        <li className='searchbottomb1li1'>
                            Hindi
                        </li>
                        {MovieArray.map((movie, index) => {
                            return (
                                <li className='searchbottomb1li'>
                                    {movie.title}
                                    <span className='searchbottomb1lispan'>NEW</span>
                                </li>)
                        })}

                    </ul>
                </div>
                <div className='searchbottomb1'>
                    <ul className='searchbottomb1ul'>
                        <li className='searchbottomb1li1'>
                            English
                        </li>
                        {MovieArray.map((movie, index) => {
                            if (index < 10) {
                                return (
                                    <li className='searchbottomb1li'>
                                        {movie.title}
                                    </li>)
                            }
                        })}
                    </ul>


                    <ul className='searchbottomb1ul'>
                        <li className='searchbottomb1li1'>
                            PUNJABI
                        </li>
                        {MovieArray.map((movie, index) => {
                            if (index > 10 && index < 17) {
                                return (
                                    <li className='searchbottomb1li'>
                                        {movie.title}
                                        <span className='searchbottomb1lispan'>&nbsp;&nbsp;&nbsp;</span>
                                    </li>)
                            }
                        })}
                    </ul>
                </div>
                <div className='searchbottomb1'>
                    <ul className='searchbottomb1ul'>
                        <li className='searchbottomb1li1'>
                            TAMIL
                        </li>
                        {MovieArray.map((movie, index) => {
                            if (index > 7 && index < 10) {
                                return (
                                    <li className='searchbottomb1li'>
                                        {movie.title}
                                    </li>)
                            }
                        })}
                    </ul>

                    <ul className='searchbottomb1ul'>
                        <li className='searchbottomb1li1'>
                            TELUGU
                        </li>
                        {MovieArray.map((movie, index) => {
                            if (index > 10 && index < 17) {
                                return (
                                    <li className='searchbottomb1li'>
                                        {movie.title}
                                        <span className='searchbottomb1lispan'>NEW</span>

                                    </li>)
                            }
                        })}
                    </ul>
                    <ul className='searchbottomb1ul'>
                        <li className='searchbottomb1li1'>
                            KANNADA
                        </li>
                        {MovieArray.map((movie, index) => {
                            if (index > 7 && index < 10) {
                                return (
                                    <li className='searchbottomb1li'>
                                        {movie.title}
                                        <span className='searchbottomb1lispan'>&nbsp;</span>

                                    </li>)
                            }
                        })}
                    </ul>
                    <ul className='searchbottomb1ul'>
                        <li className='searchbottomb1li1'>
                            BENGALI
                        </li>
                        {MovieArray.map((movie, index) => {
                            if (index > 7 && index < 10) {
                                return (
                                    <li className='searchbottomb1li'>
                                        {movie.title}
                                        <span className='searchbottomb1lispan'>&nbsp;</span>

                                    </li>)
                            }
                        })}
                    </ul>
                </div>
                <div className='searchbottomb1'>
                    <ul className='searchbottomb1ul'>
                        <li className='searchbottomb1li1'>
                            ODIA
                        </li>
                        <li className='searchbottomb1li'>
                            Anth The End(UA)
                        </li>
                    </ul>
                    <ul className='searchbottomb1ul'>
                        <li className='searchbottomb1li1'>
                            KOREAN
                        </li>
                        {MovieArray.map((movie, index) => {
                            if (index > 7 && index < 16) {
                                return (
                                    <li className='searchbottomb1li'>
                                        {movie.title}
                                        <span className='searchbottomb1lispan'>NEW</span>

                                    </li>)
                            }
                        })}
                    </ul>
                    <ul className='searchbottomb1ul'>
                        <li className='searchbottomb1li1'>
                            HARYANAVI
                        </li>
                        <li className='searchbottomb1li'>
                            Anth The End(UA)
                        </li>
                    </ul>
                    <ul className='searchbottomb1ul'>
                        <li className='searchbottomb1li1'>
                            ENGLISH 7D
                        </li>
                        <li className='searchbottomb1li'>
                            Anth The End(UA)
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default SearchBakcgrnPage;

