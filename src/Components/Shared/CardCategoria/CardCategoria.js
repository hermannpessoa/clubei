import React, {useState, useEffect} from 'react'
import './CardCategoria.scss'
import useApi from '../../../Services/Main.service'
import { ArrowRightCircle } from 'react-feather'
import { Link } from 'react-router-dom';

function CardCategoria(prop) {
    
    const card = prop.content;

    const api = useApi();
    const [thumb, setThumb] = useState('')

    useEffect(() => {
        const getThumb = async () => {
            let response = await api.getImageFromWeb(card.keywords);
            console.log('image', response)
            setThumb(response)
        }
        
        getThumb()
    }, [])

    return (
        <>
        {card.name !== 'last' &&
            <div className={'colorCard '+card.color}>
                <div className="colorCard-name">{card.name}</div>
                <div className="colorCard-image"><img src={thumb} alt={card.name} /></div>
            </div>
        }

        {card.name === 'last' &&
            
            <Link to="/categorias" className={'colorCard --bg-cinzaClaro last'}>
                <h2 className="--text-white">Ver mais categorias <ArrowRightCircle /></h2>
            </Link>
            
        }

        </>
    )
}

export default CardCategoria
