export default function Budget(props) {
  const { budget, checked, setChecked } = props
  return (
    <>
      <div>
        <input
          type="radio"
          checked={budget === checked && true}
          onChange={() => {
            setChecked(budget)
          }}
        />
        <label className="ml-1">{budget}</label>
      </div>
    </>
  )
}
