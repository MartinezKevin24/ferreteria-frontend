import 'swiper/swiper-bundle.css';
import "swiper/components/effect-fade/effect-fade.min.css"
import { Provider } from 'react-redux';
import store from '../redux/store'

export default function App({ Component, pageProps}){
    return (
        <Provider store={store}>
            <Component {...pageProps}/>
        </Provider>
    )
}