import colorsys as cs

function complementCalculator(color){
    r = color[0]
    g = color[1]
    b = color[2]
    rawcomp = cs.hsv_to_rgb((cs.rgb_to_hsv(r,g,b)[0]+.5)%1,cs.rgb_to_hsv(r,g,b)[1],cs.rgb_to_hsv(r,g,b)[2])
    complement = [round(num, 0) for num in rawcomp] 
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
