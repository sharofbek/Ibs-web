import React from 'react';
import './Check.scss'
import Check from './img/icon-tick-v2.png'

const CheckJs = () => {
    return (
        <div className='CheckCourse'>
            <h1>На курсе вы</h1>

            <div className="check-cards">
                <div className="check-card">
                    <img src={Check} alt=""/>
                    <p>
                        Поймёте, что вам по силам научиться
                        программировать
                    </p>
                </div>
                <div className="check-card">
                    <img src={Check} alt=""/>
                    <p>
                        Получите пошаговый план развития в новой
                        сфере
                    </p>
                </div>
                <div className="check-card">
                    <img src={Check} alt=""/>
                    <p>
                        Разберётесь в разнообразии IT-направлений
                        на практике и кейсах
                    </p>
                </div>
                <div className="check-card">
                    <img src={Check} alt=""/>
                    <p>
                        На практике освоите одну из 4 IT-профессий
                    </p>
                </div>
                <div className="check-card">
                    <img src={Check} alt=""/>
                    <p>
                        Поймёте, какая IT-профессия вам
                        действительно подходит
                    </p>
                </div>
                <div className="check-card">
                    <img src={Check} alt=""/>
                    <p>
                        Гарантированно найдёте работу после курса
                        или прямо во время его прохождения
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CheckJs;