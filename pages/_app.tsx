import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
          <div className="bg-spotify-dark text-spotify-text">
            <Component {...pageProps} />
          </div>
          )
}

export default MyApp
