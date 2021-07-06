import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import './App.css'
import { data } from './data'
import ProductList from './components/ProductList'
import Tags from './components/Tags'
import OrderBy from './components/OrderBy'
import Budget from './components/Budget'

function App() {
  // console.log(data)
  const tags = ['大螢幕', '小螢幕', '一般螢幕', '蘋果', '安卓']
  const budget = ['所有', '1萬以下', '1~2萬']

  // filter tags orderBy budget queryStr
  const originalData = data
  const [results, setResults] = useState(data)
  // const [checkedTags, setCheckedTags] = useState([])
  const [checkedBudget, setCheckedBudget] = useState('')

  useEffect(() => {
    let newResult = []
    switch (checkedBudget) {
      case '1萬以下':
        newResult = originalData.filter((item) => {
          return item.price < 15000
        })
        console.log(newResult)
        break
      case '1~2萬':
        break
      default:
        newResult = originalData
    }
    setResults(newResult)
  }, [checkedBudget, originalData])

  return (
    <>
      <div className="container">
        <div className="row">
          {/* <!-- BEGIN SEARCH RESULT --> */}
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  {/* <!-- BEGIN FILTERS --> */}
                  <div className="col-md-3">
                    <h2 className="grid-title">
                      <i className="fa fa-filter"></i> Filters
                    </h2>
                    <hr />
                    <h4>價格</h4>
                    {budget.map((value, i) => {
                      return (
                        <Budget
                          key={i}
                          budget={value}
                          checked={checkedBudget}
                          setChecked={setCheckedBudget}
                        />
                      )
                    })}
                    <h4 className="mt-4">標籤</h4>
                    {tags.map((value, i) => {
                      return <Tags key={i} category={value} />
                    })}
                  </div>
                  {/* <!-- END FILTERS --> */}
                  {/* <!-- BEGIN RESULT --> */}
                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o"></i> Result
                    </h2>
                    <hr />
                    {/* <!-- BEGIN SEARCH INPUT --> */}
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        value="以商品名稱搜尋"
                        onChange={() => {}}
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">
                          <FaSearch className="mb-1" />
                        </button>
                      </span>
                    </div>
                    {/* <!-- END SEARCH INPUT --> */}
                    {/* <p>Showing all results matching "web development"</p> */}

                    <div className="padding"></div>

                    <div className="row">
                      {/* <!-- BEGIN ORDER RESULT --> */}
                      <div className="col-sm-6">
                        <select>
                          <OrderBy />
                        </select>
                      </div>
                      {/* <!-- END ORDER RESULT --> */}
                    </div>

                    {/* <!-- BEGIN TABLE RESULT --> */}
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <tbody>
                          {results.map((item, i) => {
                            return <ProductList key={item.id} data={data[i]} />
                          })}
                        </tbody>
                      </table>
                    </div>
                    {/* <!-- END TABLE RESULT --> */}
                  </div>
                  {/* <!-- END RESULT --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END SEARCH RESULT --> */}
        </div>
      </div>
    </>
  )
}

export default App
