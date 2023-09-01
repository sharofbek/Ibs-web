import React from 'react';
import './Platform.scss'
import Alex from './desktop.png.png'
import Video from './icon-play-3.png'

const Platform = () => {
    return (
        <div className={'platform'}>
            <div className="video">
                <h1>Как проходит обучение на
                    платформе</h1>
                <div className="view">
                    <img src={Video} alt=""/>
                    <p>Смотреть видео</p>
                </div>
            </div>

            <div className="registration">
                <img src={Alex} alt=""/>
                <div className="platform-text">
                    <button>Регистрация</button>
                    <h4>Знакомитесь с платформой</h4>
                    <p>
                        Платформа Skillbox — собственная разработка
                        компании Skillbox, платформа постоянно
                        улучшается. Вас ждут видео, практические
                        задания и общение с кураторами Доступ
                        к материалам откроется сразу после покупки
                        курса
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Platform;