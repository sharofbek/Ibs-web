import React from 'react';
import './Carousel.scss'
import WorkAnimate from './img/div.work-v4__animation.png'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CarouselWork = () => {
    return (
        <div className='work-carousel'>
            <div className="work">
                <div className="work-text">
                    <h1>
                        Поможем найти работу или вернем деньги
                    </h1>
                    <p>
                        Вас ждёт индивидуальная поддержка HR-
                        специалиста. Вместе вы составите резюме,
                        подготовите портфолио и разработаете карьерный
                        план, который поможет найти работу быстрее.
                        Сможете выбрать привлекательные вакансии
                        и получите приоритет перед другими соискателями.
                    </p>
                    <button> Получить консультацию </button>
                </div>
                <div className="work-photo">
                    <img src={WorkAnimate} alt=""/>
                </div>

            </div>

            <div className="partner-carousel">
                <h1>Чем вам поможет Наш партнер Центр развития карьеры:</h1>
                <Carousel className='carousel' responsive={responsive}>
                    <div className="partner-card">
                        <div className="user"></div>
                        <h4>Резюме</h4>
                        <p>
                            Презентуем вас работодателям с
                            выгодной стороны
                        </p>
                    </div>
                    <div className="partner-card">
                        <div className="user"></div>
                        <h4>Индивидуальный
                            карьерный план</h4>
                        <p>
                            Расскажем, как начать и развивать
                            карьеру
                        </p>
                    </div>
                    <div className="partner-card">
                        <div className="user"></div>
                        <h4>
                            Партнерские
                            вакансии
                        </h4>
                        <p>
                            Порекомендуем вашу кандидатуру
                            партнёрам
                        </p>
                    </div>
                    <div className="partner-card">
                        <div className="user"></div>
                        <h4>Оформление
                            портфолио</h4>
                        <p>
                            Поможем эффектно представить
                            ваши проекты
                        </p>
                    </div>

                </Carousel>
            </div>

            <div className="employment">
                <div className="box">
                    <h1>9000+</h1>
                    <span>
                        пользователей Skillbox достигли
                        карьерных изменений
                    </span>

                    <div className="card-box">
                        <h2>500+</h2>
                        <p>пользователей меняют карьеру
                            ежеквартально</p>
                    </div>
                    <div className="card-box">
                        <h2>600+</h2>
                        <p>
                            новых вакансий ежеквартально размещают
                            работодатели на нашей площадке
                        </p>

                    </div>
                </div>

                <div className="employment-text">
                    <h1>
                        Почему мы уверены в
                        вашем трудоустройстве?
                    </h1>
                    <h4>Определяем потребности рынка</h4>
                    <p>
                        Мы тщательно анализируем профессии, в которых помогаем
                        с трудоустройством: опрашиваем специалистов, оцениваем вакансии,
                        потребность в кандидатах и доступность профессии для новичков.
                    </p>

                    <h4>Даём качественные знания</h4>
                    <p>
                        Помогаем получить навыки, которые необходимы здесь и сейчас. Все
                        спикеры — практикующие специалисты, а их знания востребованы на рынке.
                    </p>

                    <h4>Поддерживаем на старте карьеры</h4>
                    <p>
                        Наши консультанты контролируют каждый шаг на пути к вашей карьере. Они
                        помогают избежать ошибок и спланировать профессиональный путь.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default CarouselWork;