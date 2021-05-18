import {useEffect, useState} from "react";
import { COLORS } from "../../utils/colors";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Lazy, Autoplay} from 'swiper';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/middlewares/poductMiddleware";
import HeroProduct from "./HeroProduct";

SwiperCore.use([Pagination, Lazy, Autoplay]);

export default function HeroSection(){

    const dispatch = useDispatch();
    const data = useSelector( state => state.allProducts );
    let productsRecent = [];

    useEffect(()=>{

        dispatch(fetchProducts());

        document.querySelector(".swiper-container").setAttribute("style","width: 100%; height: 170px;");

    },[]);

    data.products.splice(0, 4).map((product, i) => {
        productsRecent.push(
            <SwiperSlide key={i}>
                <div className="slide" style={{width: "100%",
                    height: "170px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden"}}>
                    <HeroProduct image={product.image} name={product.name} description={product.description}/>
                </div>
            </SwiperSlide>
        )
    });

    return(
        <>
            <div className="container">
                <div className="container-inside">
                    <div className="discount">
                        <div className="info-promo">
                            <p>los mejores</p>
                            <p>precios del</p>
                            <p>mercado.</p>
                            <div className="bttn">
                                <p>Obten un descuento</p>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/electric-tools.png" className="hero-image" alt="Hero-Image"/>
                    </div>
                    <div className="carousel">
                        <Swiper
                            id="main"
                            direction="vertical"
                            lazy={true}
                            pagination
                            autoplay={{"delay": 3500, "disableOnInteraction": false}}
                            spaceBetween={0}
                            loop={true}
                            slidesPerView={1}
                        >
                            {productsRecent}
                        </Swiper>
                    </div>
                </div>
            </div>
            <style jsx>{`

              .slide {
                width: 100%;
                height: 300px;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
              }

              .container {
                background: linear-gradient(to right, ${COLORS.secundary} 0%, ${COLORS.secundary} 55%, ${COLORS.third} 55%, ${COLORS.third} 100%);
                height: 100vh;
                width: 100%;
              }

              .container-inside {
                display: grid;
                grid-template: 
                "column1 column2 column3"
                /350px 1fr 380px;
                padding-top: 9rem;
                column-gap: 20px;
              }

              .discount {
                grid-area: column1;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: flex-end;
                height: calc(100vh - 9rem);
              }

              .info-promo {
                font-family: Roboto, sans-serif, monospace;
                color: ${COLORS.textprimary};
                font-size: 50px;
                font-weight: bold;
              }

              .info-promo > p {
                line-height: 75px;
              }

              .bttn {
                margin: 10px 0;
                cursor: pointer;
                background: ${COLORS.primary};
                padding: 20px 0;
              }

              .bttn > p {
                font-size: 20px;
                text-align: center;
                font-weight: normal;
              }

              .image {
                grid-area: column2;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                overflow: hidden;
              }

              .hero-image {
                width: 100%;
                clip-path: inset(0 0 10px 0);
                position: relative;
                bottom: -5px;
              }

              .carousel {
                grid-area: column3;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              @media screen and (max-width: 1262px) {
                .container-inside {
                  height: calc(100vh - 8.9rem);
                  align-items: flex-end;
                  grid-template:
                  "column1 column2"
                  "column3 column3"
                  /1fr 1fr;
                  row-gap: 20px;
                }

                .discount {
                  grid-area: column1;
                  align-items: center;
                  height: auto;
                }

                .image {
                  grid-area: column2;
                  align-items: center;
                  overflow: hidden;
                }

                .carousel {
                  grid-area: column3;
                  width: 100%;
                }

              }

              @media screen and (max-width: 659px) {

                .container {
                  background: ${COLORS.secundary};
                  height: 110vh;
                }

                .container-inside {
                  height: calc(110vh - 9rem);
                  align-items: flex-end;
                  grid-template:
                  "column1" 420px
                  "column2" 1fr
                  "column3"
                  /100%;
                  row-gap: 0;
                }

                .discount {
                  grid-area: column1;
                  align-items: center;
                  height: auto;
                  z-index: 3;
                }

                .image {
                  grid-area: column2;
                  align-items: center;
                  overflow: hidden;
                  opacity: 0.5;
                }

                .carousel {
                  grid-area: column3;
                  width: 100%;
                }

                .info-promo {
                  color: aliceblue;
                }

              }

            `}</style>
        </>
    );
}