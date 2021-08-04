export const getRed = (red:any):number => {
    let result:any = red.substring(4, red.length-1)
        .replace(/ /g, '')
        .split(',')[0]
    
     return result
  }
  
export const getGreen = (green:any):number => {
    let result:any = green.substring(4, green.length-1)
        .replace(/ /g, '')
        .split(',')[1]

    return result
}
  
export const getBlue = (blue:any):number => {
    let result:any = blue.substring(4, blue.length-1)
        .replace(/ /g, '')
        .split(',')[2]

    return result
}
  
export const hexToRGB = (param:string):string => {
    let red:string = '0' 
    let green:string = '0' 
    let blue:string = '0'

    // 3 digits
    if (param.length === 4) {
        red = "0x" + param[1] + param[1];
        green = "0x" + param[2] + param[2];
        blue = "0x" + param[3] + param[3];

    // 6 digits
    } else if (param.length === 7) {
        red = "0x" + param[1] + param[2];
        green = "0x" + param[3] + param[4];
        blue = "0x" + param[5] + param[6];
    }
    
    return "rgb("+ +red + "," + +green + "," + +blue + ")";
}

  export const hexToHSL = (H:any): any => {
    // Convert hex to RGB first
    let r:any = 0 
    let g:any = 0 
    let b:any = 0
    
    if (H.length === 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
      } else if (H.length === 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
      }
      // Then to HSL
      r /= 255;
      g /= 255;
      b /= 255;
      let cmin = Math.min(r,g,b),
          cmax = Math.max(r,g,b),
          delta = cmax - cmin,
          h = 0,
          s = 0,
          l = 0;
      
          if (delta === 0)
          h = 0;
        else if (cmax === r)
          h = ((g - b) / delta) % 6;
        else if (cmax === g)
          h = (b - r) / delta + 2;
        else
          h = (r - g) / delta + 4;
      
        h = Math.round(h * 60);
      
        if (h < 0)
          h += 360;
      
        l = (cmax + cmin) / 2;
        s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
      
        return "hsl(" + h + "," + s + "%," + l + "%)";
  }