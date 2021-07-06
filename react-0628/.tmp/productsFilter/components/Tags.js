export default function Tags({ category }) {
  return (
    <>
      <div className="checkbox">
        <label>
          <input type="checkbox" className="icheck" /> {category}
        </label>
      </div>
    </>
  )
}
