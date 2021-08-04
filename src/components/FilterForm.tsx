import React from 'react';

const FilterForm = () => {
    return (
      <div className="form-filter">
        <span>
          <label htmlFor="red">
            <input type="checkbox" id="red" name="red" />
            <span> Red &gt; 50%</span>
          </label>
        </span>
        <span>
          <label htmlFor="green">
            <input type="checkbox" id="green" name="green" />
            <span> Green &gt; 50%</span>
          </label>
        </span>
        <span>
          <label htmlFor="blue">
            <input type="checkbox" id="blue" name="blue" />
            <span> Blue &gt; 50%</span>
          </label>
        </span>
        <span>
          <label htmlFor="saturation">
            <input type="checkbox" id="saturation" name="saturation" />
            <span> Saturation &gt; 50%</span>
          </label>
        </span>
      </div>
    )
}

export default FilterForm

