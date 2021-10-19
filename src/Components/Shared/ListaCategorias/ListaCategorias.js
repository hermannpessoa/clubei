import React, {useState, useEffect} from 'react'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { Container } from 'react-bootstrap'
import './ListaCategorias.scss';
import CardCategoria from '../CardCategoria/CardCategoria'
import useApi from '../../../Services/Main.service'
import { Link } from 'react-router-dom';

import  useWindowDimensions from '../../../Assets/Helpers/WindowDimmensios';
function ListaCategorias() {

    const api = useApi();
    const [categorias, setCategorias] = useState([])
    const {width} = useWindowDimensions();

    useEffect(() => {
        const getCategorias = async () => {
            let json = await api.getCategorias();
            console.log('categorias', json)
            setCategorias(json)
        }
        
        getCategorias()
    }, [])

    let slidesPerView = () => {
        let slds = 4;
        if(width < 300){
            slds = 1;
        } else if (width < 600){
            slds = 2;
        } else if (width < 1024){
            slds = 3;
        }

        return slds
    }

    return (
        <div>
            <Container>
                <div>
                    <Link to="/categorias"><h2 className="title --text-danger mb-4">Uma amostra do que você encontra aqui...</h2></Link>
                </div>
                <div className="ListaCategorias">
                    <Swiper
                    modules={[Pagination]}
                        slidesPerView={slidesPerView()}
                        spaceBetween={25}
                        pagination
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        {categorias.map((item,i) => 
                            <SwiperSlide key={i}>
                                <CardCategoria content={item}></CardCategoria>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default ListaCategorias