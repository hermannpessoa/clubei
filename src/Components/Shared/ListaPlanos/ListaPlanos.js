import React, {useState, useEffect}from 'react'
import { Container } from 'react-bootstrap'
import './ListaPlanos.scss';
import Card from '../Cards/Card'
import useApi from '../../../Services/Main.service'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import  useWindowDimensions from '../../../Assets/Helpers/WindowDimmensios';

const ListaPlanos = () => {

    const api = useApi()

    const [planos, setPlanos] = useState([])

    const {width} = useWindowDimensions();

    const breakpoints = {
        // when window width is >= 320px
        400: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10
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
    }, [])
    
    return (
        <>
            <Container>
                <div className="plans">
                    <Swiper
                        slidesPerView={slidesPerView()}
                        breackpoints={breakpoints}
                        initialSlide={width < 600 ? 1 : 0}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
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
            </Container>
        </>
    )
}

export default ListaPlanos;
