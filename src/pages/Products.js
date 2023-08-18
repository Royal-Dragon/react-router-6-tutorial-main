import { Link } from "react-router-dom";
import products from '../data'

const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>products</h2>
        <div className="products">
          {/* map through the data and create a product card for each */}
          {products.map((item)=>{
            return(
              <article key={item.id}>
                <h3>
                  {item.name}
                </h3>
                <Link to={`/products/${item.id}`}> more info</Link>
              </article>
            )
          })}
        </div>
        <Link to={'/'} className="btn">info</Link>
      </section>
    </>
  );
};

export default Products;
