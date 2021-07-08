import { withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { data } from '../data/shirts'
import Breadcrumb from '../components/Breadcrumb'

function Product(props) {
  const { auth } = props
  const queryId = +props.match.params.id

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
      <Breadcrumb />
      <h3>目前登入狀況: {auth ? '登入' : '登出'}</h3>
      {product && (
        <>
          <h5>查詢商品 id {product.id}</h5>
          <h4>{product.name}</h4>
          <img src={product.image} alt="" />
        </>
      )}
    </>
  )
}

export default withRouter(Product)