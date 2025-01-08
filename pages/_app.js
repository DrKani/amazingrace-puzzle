// pages/_app.js
// This is our app's entry point - it wraps all other pages
import '../styles/globals.css'  // Import our global styles

function MyApp({ Component, pageProps }) {
  // Component is the active page
  // pageProps are the props passed to the page
  return <Component {...pageProps} />
}

export default MyApp