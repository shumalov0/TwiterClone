
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes'
import './assets/css/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
