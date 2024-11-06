import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Symbols from './pages/Symbols/Symbols';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import FacebookSymbols from './pages/FacebookSymbols/FacebookSymbols';
import InstagramFonts from './pages/InstagramFonts/InstagramFonts';
import InchRuler from './pages/InchRuler/InchRuler';
import SpecialSymbolsEmojis from './pages/SpecialSymbolsEmojis/SpecialSymbolsEmojis';
import Footer from './components/Footer/Foooter';
import ContactUs from "./pages/NecessaryPages/ContactUs";
import PrivacyPolicy from './pages/NecessaryPages/PrivacyPolicy';
import TermsOfUse from './pages/NecessaryPages/TermsOfUse';
import AboutUs from './pages/NecessaryPages/AboutUs';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

// const Symbols = React.lazy(()=> import("./pages/Symbols/Symbols"))
// import FlippingCoin from './pages/FlippingCoin/FlippingCoin';
import FlippingCoin1 from './pages/FlippingCoin/FlippingCoin1';

const App = () => {

  return (
    <main>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/symbols' element={<Symbols />} />
            <Route path='/facebook-symbols' element={<FacebookSymbols />} />
            <Route path='/instagram-fonts' element={<InstagramFonts />} />
            <Route path='/ruler/:type' element={<InchRuler />} />
            <Route path='/special/:type/:topic' element={<SpecialSymbolsEmojis />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/flipping-coin" element={<FlippingCoin1 />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </main>
  )
}

export default App;
