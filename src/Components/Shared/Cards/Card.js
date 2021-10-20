import React from 'react'
import { Button } from 'react-bootstrap'
import classNames from 'classnames'
import './Card.scss'
import clubinho from '../../../Assets/imgs/Amarelo.png'

function Card(item) {

    const card = item.content;

    return (
        <>
            <div className={classNames({
                card: true,
                emphasis: card.emphasis
            })}>
                {card.emphasis && 
                    <div className="shadowContainer">{/*shadow*/}</div>
                }
                {card.emphasis && 
                    <div className="clubinho">
                        <img src={clubinho} alt="Clubinho" />
                    </div>
                }
                <div className="card-title">{card.name}</div>
                <div className="card-benefits">
                    <ul>
                        {card.benefits.map((benefit, index) => 
                            <li key={index}>{benefit.label}</li>
                        )}
                    </ul>
                </div>
                <div className="card-prices">
                    <small>{card.price.oldPrice}</small>
                    <p>{card.price.currentPrice}</p>
                </div>
                <div className="card-cta">
                    <Button variant={card.emphasis ? 'superlight --text-danger': 'danger'} className={card.empasis ? 'text-danger':''}>Assinar</Button>
                </div>
            </div>  
        </>
    )
}

export default Card
