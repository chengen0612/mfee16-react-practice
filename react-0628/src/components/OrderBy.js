export default function OrderBy(props) {
  const { selected, setSelected } = props
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <select
            value={selected}
            onChange={(e) => {
              setSelected(e.target.value)
            }}
          >
            <option value="請選擇排序">請選擇排序</option>
            <option value="依價格排序由低至高">依價格排序由低至高</option>
            <option value="依價格排序由高至低">依價格排序由高至低</option>
          </select>
        </div>
      </div>
    </>
  )
}
