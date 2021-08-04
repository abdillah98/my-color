import { useState, ChangeEvent } from 'react';
import { IColor } from './interface';
import { hexToRGB, hexToHSL, getRed, getGreen,  getBlue } from './convert';
import ColorItem from './components/ColorItem'
import FilterForm from './components/FilterForm';
import AddForm from './components/AddForm';

const App = () => {
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

    const handleFilter = (event: ChangeEvent<HTMLInputElement>):void => {
        if(event.target.checked) {
            if (event.target.value === 'red') {
                setMyColor(myColor.filter((color) => getRed(color.rgb) > 127))
            }
            if (event.target.value === 'green') {
                setMyColor(myColor.filter((color) => getGreen(color.rgb) > 127))
            }
            if (event.target.value === 'blue') {
                setMyColor(myColor.filter((color) => getBlue(color.rgb) > 127))
            }
        }
        else {
            setMyColor(data)
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target
        if(name === 'color') setColor(value)
    };

    const addColor = (event: React.FormEvent): void => {
        event.preventDefault()
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
        <AddForm color={color} handleChange={handleChange} addColor={addColor}/>
        <FilterForm handleFilter={handleFilter}/>
        <div className="color-list">
            {myColor.map((color: IColor, key: number) => {
                return <ColorItem key={key} color={color} deleteColor={deleteColor}/>
            })}
        </div>
      </div>
    );
}
 
export default App;