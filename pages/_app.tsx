import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { setupStore } from '../redux/store';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../i18n';

import "swiper/css/bundle";


const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
