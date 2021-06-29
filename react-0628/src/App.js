import React, { useState } from 'react'
// import css
import './App.css'
import Summary from './Components/Summary'
import OrderList from './Components/OrderList'

const products = [
  {
    name: '咖啡色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    name: '白色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    name: '黑色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
  {
    name: '金色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 1200,
  },
]

function App() {
  // set default number
  const [counts, setCounts] = useState(Array(products.length).fill(1))

  const sumUp = counts.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )

  const total = () => {
    let total = 0
    products.forEach((product, i) => {
      total += product.price * counts[i]
    })
    return total
  }

  return (
    <>
      <div className="card">
        <div className="row">
          <OrderList
            counts={counts}
            setCounts={setCounts}
            products={products}
          />
          <Summary sumUp={sumUp} total={total()} />
        </div>
      </div>
    </>
  )
}

export default App
