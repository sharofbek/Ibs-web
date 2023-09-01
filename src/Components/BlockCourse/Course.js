import React from 'react';
import './Course.scss'
import CourseI from './img/Picture ⏵ 2fe4ce6c7d2ee230858dc1de2e66ea4959ce31a6.webp.png'

const Course = () => {
    return (
        <div className={'course'}>
            <img src={CourseI} alt=""/>
            <div className="Course-text">
                <h2>Этот курс для вас, если:</h2>
                <p>
                    Вы хотите с нуля освоить востребованную IT-профессию, но не готовы
                    тратить годы на обучение.
                </p>
                <p>
                    Вы не знаете, какое направление выбрать, и волнуетесь, что ошибётесь
                    с курсом.
                </p>
                <p>
                    Вы не до конца уверены в своих силах и сомневаетесь, что сможете
                    попасть в IT без опыта.
                </p>
                <p>
                    Вам не хватает мотивации, чтобы начать.
                </p>

                <button>
                    Записаться на курс
                </button>
            </div>
        </div>
    );
};

export default Course;