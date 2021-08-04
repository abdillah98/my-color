// import React from 'react';
// import AddForm from './components/AddForm';
import FilterForm from './components/FilterForm';
import ColorItem from './components/ColorItem'
import { FC, useState, ChangeEvent } from 'react';
import { IColor } from './interface';
import { hexToRGB, hexToHSL } from './convert';

const App: FC = () => {
    const data = [
        { 
            id: 1, 
            hex: '#1ABC9C', 
            rgb: 'rgb(26,188,156)', 
            hsl: 'hsl(168.1,75.7%,42%)', 
            default: true 
        },
        { 
            id: 2, 
            hex: '#2ECC71', 
            rgb: 'rgb(46,204,113)', 
            hsl: 'hsl(145.4,63.2%,49%)',
            default: true 
        },
        { 
        id: 3, 
            hex: '#3498DB', 
            rgb: 'rgb(52,152,219)', 
            hsl: 'hsl(204.1,69.9%,53.1%)',
            default: true 
        },
        { 
            id: 4, 
            hex: '#9B59B6', 
            rgb: 'rgb(155,89,182)', 
            hsl: 'hsl(282.6,38.9%,53.1%)',
            default: true 
        },
        { 
            id: 5, 
            hex: '#34495E', 
            rgb: 'rgb(52,73,94)', 
            hsl: 'hsl(210,28.8%,28.6%)',
            default: true
        },
    ]

    const [myColor, setMyColor] = useState<IColor[]>(data);
    const [color, setColor] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      if (event.target.name === "color") {
        setColor(event.target.value);
      } 
    };

    const addColor = (e: React.FormEvent): void => {
        e.preventDefault()
        const newColor = { 
            id: myColor.length + 1, 
            hex: color,
            rgb: hexToRGB(color),
            hsl: hexToHSL(color),
            default: false
        }
        setMyColor([...myColor, newColor]);
        setColor('');
    };

    const deleteColor = (id: number): void => {
        setMyColor(myColor.filter((color) => color.id !== id))
    }

    return (
      
      <div className="container">
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
        <FilterForm />
        <div className="color-list">
            {myColor.map((color: IColor, key: number) => {
                return <ColorItem key={key} color={color} deleteColor={deleteColor}/>
            })}
        </div>
      </div>
    );
}
 
export default App;