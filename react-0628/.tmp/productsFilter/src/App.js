import React from 'react'
import './App.css'

function App() {
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
                    {/* <!-- BEGIN FILTER BY PRICE --> */}
                    <h4>By price:</h4>
                    Between <div id="price1">$300</div> to{' '}
                    <div id="price2">$800</div>
                    <div className="slider-primary">
                      <div
                        className="slider slider-horizontal"
                        style={{ width: '152px' }}
                      >
                        <div className="slider-track">
                          <div
                            className="slider-selection"
                            style={{ left: '30%', width: '50%' }}
                          ></div>
                          <div
                            className="slider-handle round"
                            style={{ left: '30%' }}
                          ></div>
                          <div
                            className="slider-handle round"
                            style={{ left: '80%' }}
                          ></div>
                        </div>
                        <div
                          className="tooltip top hide"
                          style={{ top: '-30px', left: '50.1px' }}
                        >
                          <div className="tooltip-arrow"></div>
                          <div className="tooltip-inner">300 : 800</div>
                        </div>
                        <input
                          type="text"
                          className="slider"
                          value=""
                          data-slider-min="0"
                          data-slider-max="1000"
                          data-slider-step="1"
                          data-slider-value="[300,800]"
                          data-slider-tooltip="hide"
                        />
                      </div>
                    </div>
                    {/* <!-- END FILTER BY PRICE --> */}
                    {/* <!-- BEGIN FILTER BY CATEGORY --> */}
                    <h4>By category:</h4>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" className="icheck" /> Application
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" className="icheck" /> Design
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" className="icheck" /> Desktop
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" className="icheck" /> Management
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" className="icheck" /> Mobile
                      </label>
                    </div>
                    {/* <!-- END FILTER BY CATEGORY --> */}
                    <div className="padding"></div>
                    {/* <!-- BEGIN FILTER BY DATE --> */}
                    {/* <h4>By date:</h4>
                    From
                    <div
                      className="input-group date form_date"
                      data-date="2014-06-14T05:25:07Z"
                      data-date-format="dd-mm-yyyy"
                      data-link-field="dtp_input1"
                    >
                      <input type="text" className="form-control" />
                      <span className="input-group-addon bg-blue">
                        <i className="fa fa-th"></i>
                      </span>
                    </div>
                    <input type="hidden" id="dtp_input1" value="" />
                    To
                    <div
                      className="input-group date form_date"
                      data-date="2014-06-14T05:25:07Z"
                      data-date-format="dd-mm-yyyy"
                      data-link-field="dtp_input2"
                    >
                      <input type="text" className="form-control" />
                      <span className="input-group-addon bg-blue">
                        <i className="fa fa-th"></i>
                      </span>
                    </div>
                    <input type="hidden" id="dtp_input2" value="" /> */}
                    {/* <!-- END FILTER BY DATE --> */}
                    <div className="padding"></div>
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
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">
                          <i className="fa fa-search"></i>
                        </button>
                      </span>
                    </div>
                    {/* <!-- END SEARCH INPUT --> */}
                    {/* <p>Showing all results matching "web development"</p> */}

                    <div className="padding"></div>

                    <div className="row">
                      {/* <!-- BEGIN ORDER RESULT --> */}
                      <div className="col-sm-6">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            以價格排序-由少至多 <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a href="#/">Name</a>
                            </li>
                            <li>
                              <a href="#/">Date</a>
                            </li>
                            <li>
                              <a href="#/">View</a>
                            </li>
                            <li>
                              <a href="#/">Rating</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <!-- END ORDER RESULT --> */}

                      {/* <div className="col-md-6 text-right">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-default active"
                          >
                            <i className="fa fa-list"></i>
                          </button>
                          <button type="button" className="btn btn-default">
                            <i className="fa fa-th"></i>
                          </button>
                        </div>
                      </div> */}
                    </div>

                    {/* <!-- BEGIN TABLE RESULT --> */}
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <td className="number text-center">1</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300/FF8C00"
                                alt=""
                              />
                            </td>
                            <td className="product">
                              <strong>Product 1</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$350</td>
                          </tr>
                          <tr>
                            <td className="number text-center">2</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300/5F9EA0"
                                alt=""
                              />
                            </td>
                            <td className="product">
                              <strong>Product 2</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$1,050</td>
                          </tr>
                          <tr>
                            <td className="number text-center">3</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300"
                                alt=""
                              />
                            </td>
                            <td className="product">
                              <strong>Product 3</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$550</td>
                          </tr>
                          <tr>
                            <td className="number text-center">4</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300/8A2BE2"
                                alt=""
                              />
                            </td>
                            <td className="product">
                              <strong>Product 4</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$330</td>
                          </tr>
                          <tr>
                            <td className="number text-center">5</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300"
                                alt=""
                              />
                            </td>
                            <td className="product">
                              <strong>Product 5</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </span>
                            </td>
                            <td className="price text-right">$540</td>
                          </tr>
                          <tr>
                            <td className="number text-center">6</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300/6495ED"
                                alt=""
                              />
                            </td>
                            <td className="product">
                              <strong>Product 6</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$870</td>
                          </tr>
                          <tr>
                            <td className="number text-center">7</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300/DC143C"
                                alt=""
                              />
                            </td>
                            <td className="product">
                              <strong>Product 7</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$620</td>
                          </tr>
                          <tr>
                            <td className="number text-center">8</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300/9932CC"
                                alt=""
                              />
                            </td>
                            <td className="product">
                              <strong>Product 8</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$1,550</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* <!-- END TABLE RESULT --> */}

                    {/* <!-- BEGIN PAGINATION --> */}
                    {/* <ul className="pagination">
                      <li className="disabled">
                        <a href="#/">«</a>
                      </li>
                      <li className="active">
                        <a href="#/">1</a>
                      </li>
                      <li>
                        <a href="#/">2</a>
                      </li>
                      <li>
                        <a href="#/">3</a>
                      </li>
                      <li>
                        <a href="#/">4</a>
                      </li>
                      <li>
                        <a href="#/">5</a>
                      </li>
                      <li>
                        <a href="#/">»</a>
                      </li>
                    </ul> */}
                    {/* <!-- END PAGINATION --> */}
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
