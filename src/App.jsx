import { 
createBrowserRouter,
Route, 
 createRoutesFromElements,
 RouterProvider
} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/help/Contact'
import Faq from './pages/help/Faq'
import './App.css'
import CareersError from './pages/CareersError'
// Layouts
import RootLayouts from '../layouts/RootLayouts'
import HelpLayout from '../layouts/HelpLayout'
import NotFound from './pages/NotFound'
import CareersLayout from '../layouts/CareersLayout'
import Career, { careersLoader } from './pages/Career'
import CareerDetails, { careerDetailsLoader} from './pages/CareerDetails'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<RootLayouts />} >
      <Route index element={<Home />} />
      <Route path = 'about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='careers' element={<CareersLayout />} >
        <Route index element={<Career />} 
        loader={careersLoader}
        errorElement = {<CareersError />}
        />
        <Route 
        path = ':id'
        element = {<CareerDetails />}
        loader={careerDetailsLoader}
        errorElement = {<CareersError />}
      />
      </Route>
        <Route path='*' element={<NotFound />}/>
    </Route>
  )
)
function App() {  
 return (
    <RouterProvider router={router} />
  )
}

export default App
