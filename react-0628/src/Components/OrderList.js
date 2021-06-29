import React from 'react'
import '../App.css'
import ProductItem from './ProductItem'

function OrderList(props) {
  const { counts, setCounts, products } = props

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>Shopping Cart</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              {products.length} items
            </div>
          </div>
        </div>
        {products.map((item, i) => {
          return (
            <ProductItem
              key={i}
              name={item.name}
              catgory={item.catgory}
              image={item.image}
              price={item.price}
              count={counts[i]}
              setThisCount={(newCount) => {
                // copy a new array
                const newCounts = [...counts]
                // set a new value to this item
                newCounts[i] = newCount < 1 ? 1 : newCount
                // replace previous array with this new array
                setCounts(newCounts)
              }}
            />
          )
        })}
        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">Back to shop</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
