import { withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'

const data = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
  {
    id: 4,
    name: '金色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 1200,
  },
]

function Product(props) {
  const { auth } = props
  const queryId = +props.match.params.id
  console.log(props)

  const [product, setProduct] = useState({
    id: 0,
    name: '',
    catgory: '',
    image: '',
    price: 0,
  })

  /* eslint-disable */
  useEffect(() => {
    const index = data.findIndex((item) => {
      return item.id === queryId
    })
    if (index > -1) setProduct(data[index])
  }, [])
  /* eslint-enable */

  return (
    <>
      <h1>Product</h1>
      <h3>目前登入狀況: {auth ? '登入' : '登出'}</h3>
      {product && (
        <>
          <h5>查詢商品 id {product.Id}</h5>
          <h4>{product.name}</h4>
          <img src={product.image} alt="" />
        </>
      )}
    </>
  )
}

export default withRouter(Product)
