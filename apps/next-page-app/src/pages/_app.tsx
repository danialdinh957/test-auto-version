import type { AppProps } from 'next/app'

// import '@danial/ui/style.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default App
