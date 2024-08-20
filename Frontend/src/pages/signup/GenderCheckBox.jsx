const GenderCheckBox = () => {
  return (
	<div className="flex">
		<div className="form-control">
          <label className="label cursor-pointer gap-2">
            <span className="label-text">Male</span>
          <input type="checkbox"  className="checkbox checkbox-primary" />
          </label>
        </div>

		<div className="form-control">
			<label htmlFor="" className={`label gap-2 cursor-pointer`}>
				<span className="label-text">Female</span>
				<input type="checkbox" className="checkbox checkbox-secondary " />
			</label>
		</div>


	</div>
  )
}

export default GenderCheckBox