import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  // <Provider> ek High Order Functional component hai jo bridge ki tarah kaam karta hai 
  // jo hmare Redux store aur React app ko
  //  aapas mein connect karke poore app ko state(Store ka data) ka access deta hai.
  <Provider store={store}>
      <App />
    </Provider>
)
