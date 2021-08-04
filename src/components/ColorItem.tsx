import { IColor } from '../interface'

interface Props {
    color: IColor;
    deleteColor(id: number): void;
  }
  
const ColorItem = ({ color, deleteColor, }: Props) => {
    return (
        <div className="color-item">
            <div className="color-box" style={{backgroundColor: color.hex}}></div>
            <div className="color-info">
            <span className="color-hex">{color.hex}</span>
            {color.default === false ? <button className="color-close" onClick={() => deleteColor(color.id)}>x</button> : null}
            </div>
        </div>
    )
}

export default ColorItem