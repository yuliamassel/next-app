import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : nulll
  },[])

  return <Component {...pageProps} />
}

export default MyApp
