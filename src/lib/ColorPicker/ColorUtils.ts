export interface RGBColor {
    r: number,
    g: number,
    b: number
}

export interface HSVColor {
    h: number,
    s: number,
    v: number,
}

function setZeros(text: string): string {
    const length = text.length
    let zeros = ""
    for (let amount = 2 - length; amount > 0; amount--) {
        zeros += "0"
    }
    return zeros + text
}

export function HEX2RGB(color: string): RGBColor {
    color = color.replace("#", "")
	if (color.length==6){
		const hexR = color.slice(0, 2)
    	const hexG = color.slice(2, 4)
    	const hexB = color.slice(4, 6)
    	return { r: parseInt(hexR, 16), g: parseInt(hexG, 16), b: parseInt(hexB, 16) }
	} else {
		return {r:NaN, g:NaN, b:NaN}
	}
}

export function RGB2HEX(color: RGBColor):string {
    const r = setZeros(Math.round(color.r).toString(16))
    const g = setZeros(Math.round(color.g).toString(16))
    const b = setZeros(Math.round(color.b).toString(16))
    return `#${r}${g}${b}`
}

export function HSV2HEX(color: HSVColor):string {
    return RGB2HEX(HSV2RGB(color))
}

export function HEX2HSV(color:string):HSVColor{
    color = color.replace("#", "")
    return RGB2HSV(HEX2RGB(color))
}

export function RGB2HSV(color: RGBColor):HSVColor {
    const r = color.r / 255
    const g = color.g / 255
    const b = color.b / 255
    const v = Math.max(r, g, b)
    const c = v - Math.min(r, g, b)
    const l = v - (c / 2)

    let hue = 0;
    if (c === 0) {
        hue = 0
    } else if (v === r) {
        hue = 60 * (0 + (g - b) / c)
    } else if (v === g) {
        hue = 60 * (2 + (b - r) / c)
    } else if (v === b) {
        hue = 60 * (4 + (r - g) / c)
    }
    if (hue < 0) {
        hue = 360 + hue
    }

    let val: number;
    let sat: number;
    if (l === 0 || l === 1) {
        sat = 0
        val = l + sat * Math.min(l, 1 - l)
    } else {
        const satL = (v - l) / Math.min(l, 1 - l)
        val = l + satL * Math.min(l, 1 - l)
        sat = 2 * (1 - (l / val))
    }
    return { h: hue, s: sat, v: val }
}

export function HSV2RGB(color: HSVColor): RGBColor {
    const hue = (color.h == 360 ? 0 : color.h)
    const sat = color.s
    const val = color.v

    let r = 0;
    let g = 0;
    let b = 0;

    const chroma = val * sat;
    const hPrime = hue / 60;
    const intHPrime = Math.floor(hPrime);
    const x = chroma * (1 - Math.abs(hPrime % 2 - 1));
    switch (intHPrime) {
        case 0:
            r = chroma;
            g = x;
            break;
        case 1:
            r = x;
            g = chroma;
            break;
        case 2:
            g = chroma;
            b = x;
            break;
        case 3:
            g = x;
            b = chroma;
            break;
        case 4:
            r = x;
            b = chroma;
            break;
        case 5:
            r = chroma;
            b = x;
            break;
    }
    const m = val - chroma
    return {
        r: 255 * (r + m),
        g: 255 * (g + m),
        b: 255 * (b + m)
    }

}

function getLum(color:RGBColor):number{
    const sR = getsRGB(color.r)
    const sG = getsRGB(color.g)
    const sB = getsRGB(color.b)
    const R = sR <= 0.03928 ? sR/12.92 : Math.pow((sR+0.055)/1.055, 2.4)
    const G = sG <= 0.03928 ? sG/12.92 : Math.pow((sG+0.055)/1.055, 2.4)
    const B = sB <= 0.03928 ? sB/12.92 : Math.pow((sB+0.055)/1.055, 2.4)
    return 0.2126*R+0.7152*G+0.0722*B

}

function getsRGB(value:number):number{
    return value/255
}

export function contrast(color1:RGBColor, color2:RGBColor):number{
    const lum1 = getLum(color1)
    const lum2 = getLum(color2)
    return (Math.max(lum1, lum2)+0.05)/(Math.min(lum1, lum2)+0.05)
}

export function getWhiteOrBlack(color:RGBColor){
	const contrastLight = contrast(color, {r:255, g:255, b:255})
    const contrastDark = contrast(color, {r:0, g:0, b:0})
    return (contrastDark>contrastLight) ? "#000000" : "#ffffff"
}