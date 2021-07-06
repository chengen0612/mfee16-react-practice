export default function Tags(props) {
  const { category, checked, setChecked } = props
  const isChecked = checked.includes(category)
  const checkHandler = () => {
    if (isChecked) {
      setChecked(
        checked.filter((value) => {
          return value !== category
        })
      )
    } else {
      setChecked([...checked, category])
    }
  }
  return (
    <>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            checked={isChecked}
            onChange={checkHandler}
          />
          {category}
        </label>
      </div>
    </>
  )
}
