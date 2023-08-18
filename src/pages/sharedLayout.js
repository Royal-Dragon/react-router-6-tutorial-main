import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  )
}
export default Home
