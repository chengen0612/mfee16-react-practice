import React from 'react'
import '../App.css'

function Summary(props) {
  const { sumUp, total } = props
  return (
    <div className="col-md-4 summary">
      <div>
        <h5>
          <b>Summary</b>
        </h5>
      </div>
      <hr />
      <div className="row">
        <div className="col order__sum">ITEMS</div>
        <div className="col text-right">{sumUp}</div>
      </div>
      {/* <form>
        <p>SHIPPING</p>
        <select>
          <option className="text-muted">
            Standard-Delivery- &euro;5.00
          </option>
        </select>
        <p>GIVE CODE</p>
        <input id="code" placeholder="Enter your code" />
      </form> */}
      <div className="row order__subtotal">
        <div className="col">TOTAL PRICE</div>
        <div className="col text-right">&euro; {total}</div>
      </div>
      <button className="btn">CHECKOUT</button>
    </div>
  )
}

export default Summary
