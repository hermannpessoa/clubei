import React, {useState, useEffect}from 'react'
import { Container, Row } from 'react-bootstrap'
import './ListaPlanos.scss';
import Card from '../Cards/Card'
import useApi from '../../../Services/Main.service'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import  useWindowDimensions from '../../../Assets/Helpers/WindowDimmensios';
import { Link } from 'react-router-dom';

const ListaPlanos = () => {

    const api = useApi()

    const [planos, setPlanos] = useState([])

    const {width} = useWindowDimensions();

    const breakpoints = {
        // when window width is >= 320px
        400: {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: false,
        loop: true,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }

    let slidesPerView = () => {
        let slds = 3;
        if(width < 600){
            slds = 1;
        }else if(width < 1024){
            slds = 2;
        }

        return slds
    }
    useEffect(() => {
      const getPlanos = async () => {
        const json = await api.getPlanos();
        setPlanos(json);
      }
      return getPlanos();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
            <Container className="containerPlanos">
                <Row>
                    <div className="col-12 mx-3">
                        <Link to="/planos"><h2 className="title">Nossos Planos</h2></Link>
                    </div>
                </Row>
                <Row>
                <div className={width > 500 ? 'plans col-12' : 'mob plans col-12'}>
                    <Swiper
                        slidesPerView={slidesPerView()}
                        breackpoints={breakpoints}
                        // centeredSlides={width < 600}
                        // loop={width < 600}
                        initialSlide={width < 600 ? 1 : 0}
                        >
                            {planos.map((item,i) => 
                                <SwiperSlide key={i}>
                                    <Card content={item} />    
                                </SwiperSlide>
                            )}
                    </Swiper>
                    {/* <Row>
                    {planos.map((item,i) => 
                        <Col key={i}>
                            <Card content={item} />
                        </Col>
                    )}
                    </Row> */}
                </div>
                </Row>
            </Container>
        </>
    )
}

export default ListaPlanos;
