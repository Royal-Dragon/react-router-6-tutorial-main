import { Link, useParams } from 'react-router-dom'
import products from '../data'

const SingleProduct = () => {
  const ProductId = useParams().productId
  const product = products.find((item)=> item.id === ProductId);
  
  return (
    <section className='section product'>
      <img src={product.image} alt={product.name} />
      <h2> {product.name}</h2>
      <Link to={'/products'}> back to products</Link>
    </section>
  )
}

export default SingleProduct
