import React, { useState, useEffect } from 'react'

import './App.css'
import { data } from './data'
import DisplayList from './components/DisplayList'
import Tags from './components/Tags'
import OrderBy from './components/OrderBy'
import Budget from './components/Budget'
import SearchBar from './components/SearchBar'

function App() {
  const originalData = data
  const tags = ['大螢幕', '小螢幕', '一般螢幕', '蘋果', '安卓']
  const budget = ['所有', '1萬以下', '1~2萬']

  // queryStr budget tags orderBy
  const [queryStr, setQueryStr] = useState('')
  const [checkedBudget, setCheckedBudget] = useState('')
  const [checkedTags, setCheckedTags] = useState([])
  const [selectedOrder, setSelectedOrder] = useState('')

  const [display, setDisplay] = useState(data)

  const queryExecutor = (result) => {
    // queryStr.toLowerCase()
    result = result.filter((item) => {
      return item.name.includes(queryStr)
    })
    return result
  }

  const budgetExecutor = (result) => {
    switch (checkedBudget) {
      case '1萬以下':
        result = result.filter((item) => {
          return item.price < 10000
        })
        break
      case '1~2萬':
        result = result.filter((item) => {
          return item.price > 10000 && item.price < 20000
        })
        break
      default:
        break
    }
    return result
  }

  const tagsExecutor = (result) => {
    result = result.filter((item) => {
      let isChecked = false
      const itemTagsArr = item.tags.split(',')
      for (let i = 0; i < checkedTags.length; i++) {
        if (itemTagsArr.includes(checkedTags[i])) {
          isChecked = true
          break
        }
      }
      return isChecked === true
    })
    return result
  }

  const orderExecutor = (result) => {
    switch (selectedOrder) {
      case '依價格排序由低至高':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case '依價格排序由高至低':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      default:
        result = [...result].sort((a, b) => a.id - b.id)
        break
    }
    return result
  }

  /* eslint-disable */
  useEffect(() => {
    let result = originalData

    if (queryStr.length > 0) result = queryExecutor(result)
    result = budgetExecutor(result)
    if (checkedTags.length > 0) result = tagsExecutor(result)
    result = orderExecutor(result)

    setDisplay(result)
  }, [queryStr, checkedBudget, checkedTags, selectedOrder])
  /* eslint-enable */

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
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
                          range={value}
                          checked={checkedBudget}
                          setChecked={setCheckedBudget}
                        />
                      )
                    })}
                    <h4 className="mt-4">標籤</h4>
                    {tags.map((value, i) => {
                      return (
                        <Tags
                          key={i}
                          category={value}
                          checked={checkedTags}
                          setChecked={setCheckedTags}
                        />
                      )
                    })}
                  </div>
                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o"></i> 篩選結果
                    </h2>
                    <hr />
                    <SearchBar setQueryStr={setQueryStr} />
                    <div className="padding"></div>
                    <OrderBy
                      selected={selectedOrder}
                      setSelected={setSelectedOrder}
                    />
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <tbody>
                          {display.map((item, i) => {
                            return <DisplayList key={i} data={item} />
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
