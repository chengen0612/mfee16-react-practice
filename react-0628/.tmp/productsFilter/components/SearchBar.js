import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar({ setQueryStr }) {
  const queryStr = useRef(null)
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="以商品名稱搜尋"
          ref={queryStr}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => {
              setQueryStr(queryStr.current.value)
            }}
          >
            <FaSearch className="mb-1" />
          </button>
        </span>
      </div>
    </>
  )
}
