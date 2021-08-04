import { ChangeEvent } from 'react';

interface Props {
    color: string
    handleChange(event: ChangeEvent<HTMLInputElement>): void
    addColor(event: React.FormEvent): void
}

const AddForm = ({color, handleChange, addColor}:Props) => {
    return (
        <form className="form-add" onSubmit={(e) => addColor(e)}>
            <label htmlFor="color" className="label-bold">Add new color: </label>
            <input 
                type="text" 
                id="color" 
                name="color" 
                placeholder="#00..." 
                value={color}
                onChange={handleChange}
            />
            <button type="submit">+ Add</button>
        </form>
    )
}

export default AddForm