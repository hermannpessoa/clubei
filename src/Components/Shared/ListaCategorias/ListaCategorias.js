import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { ArrowLeft, ArrowRight } from 'react-feather'
import CardCategoria from '../CardCategoria/CardCategoria'
import useApi from '../../../Services/Main.service'
import { Link } from 'react-router-dom';
import  useWindowDimensions from '../../../Assets/Helpers/WindowDimmensios';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import './ListaCategorias.scss';

function ListaCategorias() {

    SwiperCore.use([Navigation]);
    
    const api = useApi();
    const [categorias, setCategorias] = useState([])
    const {width} = useWindowDimensions();

    useEffect(() => {
        const getCategorias = async () => {
            let json = await api.getCategorias();
            setCategorias(json)
        }
        
        getCategorias()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const [activeIndex, setActiveIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);

    const prevRef = React.useRef(null)
    const nextRef = React.useRef(null)

    return (
        <div>
            <Container className="containerPlanos">
                <div className="mx-3">
                    <Link to="/categorias"><h2 className="title --text-danger mb-4">Uma amostra do que você encontra aqui...</h2></Link>
                </div>
                <div className="ListaCategorias">
                    <Swiper
                        slidesPerView={slidesPerView()}
                        navigation={{
                            prevEl: prevRef.current, // Assert non-null
                            nextEl: nextRef.current, // Assert non-null
                        }}
                        pagination={{ clickable: true }}
                        onSlideChange={(swiper) => {
                            setIsEnd(swiper.isEnd)
                            setActiveIndex(swiper.activeIndex)
                        }}
                        >
                        {categorias.map((item,i) => 
                            <SwiperSlide key={i}>
                                <CardCategoria content={item}></CardCategoria>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <div className={activeIndex > 0 ? 'btn-swiper btn-prev-slider' : 'disabled d-none'} ref={prevRef}> <ArrowLeft /> </div>
                    <div className={!isEnd ? 'btn-swiper btn-next-slider' : 'disabled d-none'} ref={nextRef}> <ArrowRight /> </div>
                </div>
            </Container>
        </div>
    )
}

export default ListaCategorias