import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// let obj = 
// {
//   "firstName": "John",
//   "lastName": "Doe",
//   "age": 50,
//   "hobbies": ["reading", "traveling", "swimming"],
//   "friends": [
//     {
//       "firstName": "Jane",
//       "lastName": "Smith",
//       "age": 45
//     }
//   ]
// };

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
