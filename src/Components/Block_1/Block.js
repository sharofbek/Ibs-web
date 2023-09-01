import React from 'react';
import './Block.scss'
import Percent from './Img/july_percent_sign2.png.png'
import Enter from './Img/728ba935-2609-40e4-acad-e8f84592ae51.webp.png'



const Block = () => {
    return (
        <div className='block'>
            <div className="text">
                <p>ПЕРВЫЙ ПЛАТЕЖ НА 2-ОЙ МЕСЯЦ</p>
                <h1>Профессия Разработчик</h1>
                <span>
                    Курс для тех, кто мечтает о работе в IT, но не знает, с чего начать,
                    или переживает, что ничего не получится. Мы поможем вам
                    преодолеть все страхи и пройти весь путь к новой профессии:
                    от выбора IT-направления до трудоустройства.
                </span>
                <button>
                    Записаться на курс
                </button>
            </div>

            <div className="photo">
                <div className="percent">
                    <img src={Percent} alt=""/>
                    <div>
                        <p>Летняя распродажа</p>
                        <span>Скидки до 60% действуют </span>
                    </div>
                </div>

                <img className='start' src={Enter} alt=""/>
            </div>
        </div>
    );
};

export default Block;