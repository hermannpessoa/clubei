import React from 'react'
import { Button } from 'react-bootstrap'
import classNames from 'classnames'
import './Card.scss'
import clubinho from '../../../Assets/imgs/Amarelo.png'
import * as CurrencyFormat from 'react-currency-format'

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
                    {card.price.oldPrice && <small>
                        <CurrencyFormat value={card.price.oldPrice} decimalScale={2} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'R$ '} />
                        </small>
                    }
                    <p>
                        <CurrencyFormat value={card.price.currentPrice} decimalScale={2} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'R$ '} />
                    </p>
                </div>
                <div className="card-cta">
                    <Button variant={card.emphasis ? 'superlight --text-danger' : 'danger'} className={card.empasis ? 'text-danger' : ''}>Assinar</Button>
                </div>
            </div>
        </>
    )
}

export default Card
