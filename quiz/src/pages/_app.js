import { QuestionProvider } from '../context/QuestionContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <QuestionProvider>
      <Component {...pageProps} />
    </QuestionProvider>
  );
}

export default MyApp
