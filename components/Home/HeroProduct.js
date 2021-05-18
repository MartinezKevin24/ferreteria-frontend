import { COLORS } from '../../utils/colors';

export default function HeroProduct({name, image, description}){
    return(
        <>
            <div className="container">
                <div className="container-inside">
                    <div className="image">
                        <img src={image} alt="Martillo Con Mango De Madera Stanley"/>
                    </div>
                    <div className="text">
                        <h5>{name}</h5>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <style jsx>{`

              .container {
                background: #363636;
                width: 100%;
                padding: 20px 0;
              }

              .container-inside {
                display: flex;
                width: 90%;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                flex-wrap: wrap;
              }

              .image {
                background: ${COLORS.primary};
                height: 170px;
                margin-right: 8px;
                width: 40%;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              img {
                width: 100%;
              }

              .text {
                width: calc(60% - 8px);
                color: aliceblue;
                font-size: 14px;
                font-family: Roboto, sans-serif, monospace;
                line-height: 22px;
              }

              h5 {
                font-size: 18px;
                margin-bottom: 15px;
              }

              p {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                line-clamp: 3;
                overflow: hidden;
              }
              
              @media screen and (max-width: 1260px){
              
                img{
                  height: 100%;
                  width: auto;
                }
                
                .text{
                  font-size: 18px;
                }
                
                h5{
                  font-size: 20px;
                }
                
              }

            `}</style>
        </>
    );
}