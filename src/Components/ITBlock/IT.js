import React from 'react';
import './It.scss'
import Img from './Img/Picture ⏵ desktop_2_c02b8f56729ac4d9cf6f8e9303162213969b4378.webp.png'

const It = () => {
    return (
        <div className='it-block'>
            <h1>А что мешает вам войти в IT?</h1>
            <div className="ui-it">
                <img src={Img} alt=""/>
                <div className="it-text">
                    <h4>«Я ничего не понимаю в IT, это не про меня»</h4>
                    <p>
                        Курс начинается с самых основ. Спикер чётко, просто
                        и понятно расскажет, какие направления есть в IT и кто чем
                        занимается в сфере. Вы на примерах разберётесь, как
                        устроены и работают программы.
                    </p>
                    <p>
                        После вводного блока вы уже не будете смотреть на код
                        как на набор символов и поймёте, какой карьерный путь
                        в IT вас больше привлекает.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default It;