export default function Budget(props) {
  const { range, checked, setChecked } = props
  return (
    <>
      <div>
        <input
          type="radio"
          checked={range === checked && true}
          onChange={() => {
            setChecked(range)
          }}
        />
        <label className="ml-1">{range}</label>
      </div>
    </>
  )
}
