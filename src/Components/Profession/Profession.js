import React from 'react';
import './Profession.scss'

const Profession = () => {
    return (
        <div className={'profession'}>
            <div className="card-group">
                <div className="card">
                    <ul>
                        <li><h4>Для новичков</h4></li>
                    </ul>
                    <p>всё получится без знаний</p>
                    <p>математики и опыта в IT</p>
                </div>
                <div className="card">
                    <ul>
                        <li><h4>4 профессии в IT</h4></li>
                    </ul>
                    <p>выбирайте и не переживайте —</p>
                    <p>если что, сможете поменять</p>
                    <p>курс</p>
                </div>
                <div className="card">
                    <ul>
                        <li><h4>Работа или стажировка</h4></li>
                    </ul>
                    <p>через 6 месяцев</p>
                </div>
                <div className="card">
                    <ul>
                        <li><h4>Помощь</h4></li>
                    </ul>
                    <p>в трудоустройстве</p>
                </div>
            </div>

                <div className="cookie">
                    <p>
                        Пользуясь нашим сайтом, вы соглашаетесь
                        с тем, что <a href="#">мы используем cookies 🍪</a>
                    </p>
                    <button>Окей</button>
                </div>

                <div className="start">
                    <h1>
                        Неважно, какой у вас
                        уровень. Главное — начать
                    </h1>
                    <p>
                        Цель этого курса — помочь вам сдвинуться с «мёртвой» точки
                        и сделать первый шаг к востребованной IT-профессии.
                        Вы получите готовый план развития в IT, а мы поможем вам
                        пройти этот путь до конца. Попробуете себя в 4 направлениях,
                        определите, в чём сильны, и выберете профессию на основе
                        своих способностей. А если почувствуете, что ошиблись, —
                        сможете поменять курс.
                    </p>
                </div>

                <div className="Profession">
                    <h1>О профессии</h1>
                    <p>Лучшее время для карьеры в IT</p>
                    <h5>17 708 000 сум</h5>
                    <span>зарплата начинающего специалиста</span>
                </div>
        </div>
    );
};

export default Profession;