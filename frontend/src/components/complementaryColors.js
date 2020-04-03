import React from "react"
import paints from "../paints.json"

function complementCalculator(color){
    let complement = [0, 0, 0]

    for (let i = 0; i < color.length; i++) {
        const element = color[i];
        complement[i] = 255 - element
    }
    return complement
}

function complementLocator(color){
    const trueComplement = complementCalculator(color)
    let closestComplement
    let leastDelta = 765

    for (paint in paints){
        let rgb = paint.rgba.slice(0, 3)

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

export default complementCalculator