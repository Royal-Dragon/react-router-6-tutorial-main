import { Routes, Route } from 'react-router-dom'
import Layout from './pages/sharedLayout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Login from './pages/Login'
import Error from './pages/Error'
import SingleProduct from './pages/SingleProduct'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'

function App () {
  const [user,setUser] = useState();
  return (
    
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='/login' element={<Login setUser={setUser} />}/>
          <Route path='/dashboard' element={<Dashboard user={user} />}/>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    
  )
}

export default App
