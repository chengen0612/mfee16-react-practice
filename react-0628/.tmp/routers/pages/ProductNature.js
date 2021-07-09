import { withRouter } from 'react-router-dom'

import Breadcrumb from '../components/Breadcrumb'

function ProductNature(props) {
  const { auth } = props

  const searchParams = new URLSearchParams(props.location.search)

  // get query string
  const natureId = searchParams.get('id')

  return (
    <>
      <h1>大自然系列</h1>
      <Breadcrumb />
      <h3>目前登入狀況: {auth ? '登入' : '登出'}</h3>
      {natureId && <h4>搜尋字串: {natureId}</h4>}
    </>
  )
}

export default withRouter(ProductNature)
