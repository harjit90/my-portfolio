import { createRoot } from 'react-dom/client'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom' // used to work it for github pages
import App from './App.jsx'
import { MyThemeContext } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <MyThemeContext>
      <App />
    </MyThemeContext>
  </HashRouter>,
)
