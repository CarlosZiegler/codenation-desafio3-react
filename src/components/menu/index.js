import React from 'react'

import './style.css'

export default function Menu() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <a href="/"><i className="fa fa-instagram"></i></a>
                </div>
                <img className="header__name" src="img/instagram-logo.svg" alt="Instagram" />
                <div className="header__functions icon">
                    <a href="/"><img className="icon__img" src="img/igtv.png" alt="IGTV" /></a>
                    <a href="/"><img className="icon__img" src="img/send.svg" alt="send" /></a>
                </div>
            </div>
        </header>
    )
}
