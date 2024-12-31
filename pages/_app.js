import '../styles/globals.css';
import { PopupProvider } from '../context/PopupContext';

function MyApp({ Component, pageProps }) {
  return (
    <PopupProvider>
      <Component {...pageProps} />
    </PopupProvider>
  );
}

export default MyApp;
