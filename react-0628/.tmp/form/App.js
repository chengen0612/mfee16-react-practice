import React, { useState } from 'react'
import MyRadioBox from './components/MyRadioBox'
import MyCheckbox from './components/MyCheckbox'

function App() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [dropDown, setDropDown] = useState('')
  const [gender, setGender] = useState('')
  const [agree, setAgree] = useState(false)
  const [likeList, setLikeList] = useState([])
  const [inputDate, setInputDate] = useState('')

  const genderList = ['male', 'female', 'undefined']
  const likeTypes = ['芒果', '草莓', '荔枝']

  return (
    <>
      <h1>可控表單元素</h1>
      <hr />
      <section id="input-text">
        <h3>文字輸入框</h3>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textarea">
        <h3>文字區域</h3>
        <textarea
          cols="30"
          rows="6"
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value)
          }}
        />
      </section>
      <section id="select">
        <h3>下拉式選單</h3>
        <select
          value={dropDown}
          onChange={(e) => {
            setDropDown(e.target.value)
          }}
        >
          {/* 「請選擇」的部分預設為空值和預設狀態統一 */}
          <option value="">請選擇</option>
          <option value="蘋果">蘋果</option>
          <option value="香蕉">香蕉</option>
          <option value="西瓜">西瓜</option>
        </select>
      </section>
      <section id="radio">
        <h3>單選按鈕</h3>
        {genderList.map((value, i) => {
          return (
            <MyRadioBox
              key={i}
              value={value}
              checkedValue={gender}
              setCheckedValue={setGender}
            />
          )
        })}
        {/* <input
          type="radio"
          value="male"
          checked={gender === 'male'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <lable>male</lable> */}
      </section>
      <section id="checkbox">
        <h3>多選按鈕</h3>
        <h5>單一選項</h5>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
          }}
        />
        <label>我同意會員註冊相關規定</label>

        <h5>多選選項</h5>
        {likeTypes.map((value, i) => {
          return (
            <MyCheckbox
              key={i}
              value={value}
              checkedValueList={likeList}
              setCheckedValueList={setLikeList}
            />
          )
        })}
        {/* <input
          type="checkbox"
          value="mango"
          checked={likeList.includes('芒果')}
          onChange={(e) => {
            const value = e.target.value

            if (likeList.includes(value)) {
              // remove this item from array
              const newLikeList = likeList.filter((removeT, i) => {
                return removeT !== value
              })
              setLikeList(newLikeList)
            } else {
              setLikeList([...likeList, value])
            }
          }}
        />
        <label>芒果</label> */}
      </section>
      <section id="input-date">
        <h3>選擇日期</h3>
        <input
          type="date"
          value={inputDate}
          onChange={(e) => {
            setInputDate(e.target.value)
          }}
        />
      </section>
    </>
  )
}

export default App
