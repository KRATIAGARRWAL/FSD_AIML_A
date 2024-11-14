
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import Greeting from './greetings.jsx'
import Footer from './footer.jsx'
import Testprops from './Testprops.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Greeting/>
    <Testprops testClick={testClick}/>
    <Footer/>
    <App />
  </StrictMode>,
)
