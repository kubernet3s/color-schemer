import colorTransform as ct

function complementCalculator(color){
    r = color[0]
    g = color[1]
    b = color[2]
    hslcolor = ct.rgbToHsl(r,g,b)
    hslcomp = ((hslcolor[0]+.5)%1, hslcolor[1], hslcolor[2])
    complement = ct.hslToRgb(hslcomp[0],hslcomp[1],hslcomp[2])
    return complement
}

function complementLocator(color, colorList){
    const trueComplement = complementCalculator(color.rgba.slice(0, 3))
    let closestComplement
    let leastDelta = 765

    for (let i = 0; i < colorList.length; i++){
        const paint = colorList[i]
        const rgb = paint.rgba.slice(0, 3)
        let delta = 0

        for (let i = 0; i < rgb.length; i++) {
            const element = rgb[i];
            delta += Math.abs(trueComplement[i] - element)
        }
        if (delta < leastDelta){
            leastDelta = delta
            closestComplement = paint
        }
    }
    return closestComplement
}

export default complementLocator
