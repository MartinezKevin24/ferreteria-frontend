import {MdLocationOn, MdShoppingCart} from 'react-icons/md';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgClose} from 'react-icons/cg';
import {BsClockFill} from 'react-icons/bs';
import {AiFillPhone} from 'react-icons/ai';
import {COLORS} from '../utils/colors';
import Image from 'next/image';
import {useEffect, useState} from "react";

export default function Navbar() {

    const [active, setActive] = useState(false);
    const [scroll, setScroll] = useState(false);

    const activar = () => {
        (active) ? setActive(false): setActive(true);
    }

    useEffect(()=>{
        let screen = window.innerWidth;
        let menus = document.querySelector(".menus");
        if(screen > 840){
            window.addEventListener('scroll', ()=>{
                let position = window.scrollY;
                if(position !== 0){
                    setScroll(true);
                    menus.style.justifyContent = "space-around";
                }else{
                    setScroll(false);
                    menus.style.justifyContent = "space-between";
                }
            });
        }
    });

    return(
        <>
          <div className={(scroll) ? "container scroll-all" : "container"}>
              <div className="back-info">
                  <span className={(scroll) ? "divider scroll-div" : "divider"}/>
                  <div className={(scroll) ? "container-info scroll-info" : "container-info"}>
                      <div className="info">
                          <BsClockFill style={{verticalAlign: 'middle', marginBottom: '3px'}}/> <span>Abrimos de 9:00 a 20:00</span>
                      </div>
                      <div className="info">
                          <MdLocationOn style={{verticalAlign: 'middle', marginBottom: '3px'}}/> <span>Ronda Meléndez, 553, 60º E</span>
                      </div>
                  </div>
              </div>
              <div className={(scroll) ? "nav scroll-nav" : "nav"}>
                  <div className="container-nav">
                      <div className="options">
                          <div className={(scroll) ? "image scroll-image" : "image"}>
                              <Image src="/logo.png" width={75} height={83} layout="intrinsic"/>
                          </div>
                          <div className="toggle" onClick={activar}>
                              {(active) ? <CgClose/> : <GiHamburgerMenu/>}
                          </div>
                          <ul className={(active) ? "menus active" : "menus"}>
                              <ul className="menu">
                                  <li>About Us</li>
                                  <li>Products</li>
                                  <li>Contacts</li>
                              </ul>
                              <ul className="e-commerce">
                                  <li><span className="phone"><AiFillPhone style={{verticalAlign: 'middle', marginBottom: '3px'}}/></span><span>+57 3245678392</span></li>
                                  <li><span className="shop"><MdShoppingCart style={{verticalAlign: 'middle', marginBottom: '3px'}}/></span><span>Carrito</span></li>
                              </ul>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

            <style jsx>{`

              .container {
                position: fixed;
                width: 100%;
                z-index: 999;
              }
              
              .scroll-all{
                background: rgba(46, 46, 46, 0.9);
                transition: all 0.8s ease;
              }

              .back-info {
                background: #191919;
                padding: 11px 0;
                display: flex;
                flex-direction: row;
                position: relative;
                width: 100%;
              }

              .info {
                margin: 0 12px;
                color: ${COLORS.textsecundary};
              }

              .divider {
                display: inline-block;
                width: 20%;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                transition: all 0.2s ease;
              }
              
              .scroll-div{
                background: ${COLORS.third};
                transition: all 0.2s ease;
                width: calc(5.3% + 300px);
              }

              .container-info {
                font-family: Roboto, sans-serif, monospace;
                font-size: 15px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                position: relative;
                left: 20%;
                transition: all 0.2s ease;
              }
              
              .scroll-info{
                left: calc(5.3% + 300px);
                transition: all 0.2s ease;
              }

              .nav {
                width: 100%;
                display: flex;
                justify-content: center;
                transition: all 0.2s ease;
              }
              
              .scroll-nav{
                 background: linear-gradient(to right, ${COLORS.primary} 0%, ${COLORS.primary} 25%,  transparent 25%, transparent 100%);
                 transition: all 0.2s ease;
              }

              .container-nav {
                display: flex;
                flex-direction: row;
                width: 85%;
                justify-content: space-between;
                color: ${COLORS.textprimary};
              }
              
              .image{
                padding: 12px 20px;
              }
              
              .scroll-image{
                background: ${COLORS.primary};
                position: relative;
                display: flex;
                justify-content: flex-end;
                width: 300px;
                left: 0;
                transition: all 0.2s ease;
              }

              .options {
                width: 100%;
                display: flex;
                flex-direction: row;
              }

              .toggle {
                justify-content: center;
                align-items: center;
                padding: 0 8px;
                display: none;
              }

              .menus {
                display: flex;
                width: 100%;
                justify-content: space-between;
              }

              .menu {
                list-style: none;
                display: flex;
                margin: 0 16px;
                align-items: center;
              }

              .menu li {
                margin: 0 16px;
                font-family: Roboto, sans-serif, monospace;
                font-size: 16px;
              }

              .e-commerce {
                list-style: none;
                display: flex;
                align-items: center;
              }

              .e-commerce li {
                margin: 0 10px;
                font-family: Roboto, sans-serif, monospace;
                font-size: 16px;
              }

              .shop, .phone {
                margin: 0 7px;
                display: inline-block;
                padding: 9px;
              }

              .phone {
                background: ${COLORS.secundary};
              }

              .shop {
                background: ${COLORS.primary};
              }

              @media screen and (max-width: 840px) {

                .nav {
                  background: rgba(46, 46, 46, 0.9);
                  padding: 10px 0;
                }

                .options {
                  justify-content: space-between;
                }

                .toggle {
                  display: flex;
                  font-size: 50px;
                }

                .menus {
                  width: 100%;
                  left: -700px;
                  top: 170px;
                  justify-content: center;
                  flex-direction: column;
                  position: absolute;
                  background: #3a3a3a;
                  padding: 32px 0;
                  opacity: 0;
                  transition: all 0.7s  ease-out;
                }
                
                .active {
                  opacity: 1;
                  transition: all 0.7s  ease-out;
                  left: 0;
                }

                .menu, .e-commerce {
                  flex-direction: column;
                  margin: 0;
                }

                .shop, .phone {
                  margin: 0 16px;
                  padding: 6px;
                }

                .e-commerce li, .menu li {
                  padding: 20px 0;
                  font-size: 20px;
                }

              }

              @media screen and (max-width: 560px) {
                .back-info {
                  justify-content: center;
                }

                .divider {
                  display: none;
                }

                .container-info {
                  left: 0;
                }
              }

              @media screen and (max-width: 430px) {
                .back-info {
                  justify-content: center;
                }

                .container-info {
                  position: static;
                  justify-content: center;
                }

                .menus {
                  top: 190px;
                }

              }

            `}</style>

            <style jsx global>{`

                *{
                  padding: 0;
                  margin: 0;
                }

            `}</style>

        </>
    );
}