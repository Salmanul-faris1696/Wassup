const GenderCheckBox = ({onCheckboxChange , selectedGender}) => {
  return (
	<div className="flex">
		<div className="form-control">
          <label className={`label cursor-pointer gap-2 ${selectedGender === 'male' ? 'Selected' : ""}`}>
            <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox checkbox-primary" checked={selectedGender === 'male'} onChange={()=>onCheckboxChange('male')}/>
          </label>
        </div>

		<div className="form-control">
			<label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ""}`}>
				<span className="label-text">Female</span>
				<input type="checkbox" className="checkbox checkbox-secondary " checked={selectedGender === 'female'} onChange={()=>onCheckboxChange('female')}/>
			</label>
		</div>


	</div>
  )
}

export default GenderCheckBox