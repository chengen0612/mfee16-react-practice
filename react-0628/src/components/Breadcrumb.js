import { withRouter, Link } from 'react-router-dom'

function Breadcrumb(props) {
  // console.log(props.location)

  // 建立對照陣列
  // const pathnameList = ['/about', '/login', 'product']
  // const pathnameZhList = ['關於我們', '會員登入', '商品']

  // const convertPathnameToZh = () => {
  //   const index = pathnameList.map((value) => {
  //     return props.location.pathname.includes(value)
  //   })
  //   return pathnameZhList[index]
  // }

  // console.log(convertPathnameToZh)

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/product">商品</Link>
          </li>
        </ol>
      </nav>
    </>
  )
}

export default withRouter(Breadcrumb)
