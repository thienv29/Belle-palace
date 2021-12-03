import "bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.css';
import '../public/styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
