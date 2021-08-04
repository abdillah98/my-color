import React from 'react';

const AddForm = () => {
    return (
      <div className="form-add">
        <label htmlFor="color" className="label-bold">Add new color: </label>
        <input type="text" id="color" name="color" placeholder="#00..." />
        <button type="button">+ Add</button>
      </div>
    ) 
}

export default AddForm