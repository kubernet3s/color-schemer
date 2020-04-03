import paints from  "./paints.json"
import React from 'react';

function rgb(rgba){
    return `rgb(${rgba.slice(0, 3).join(",")})`
}

function colorList(){
    return(
        <ul>
        {paints.map(
          paint => <li key={paint._id} class={paint.name}><font style= {{color: rgb(paint.rgba)}}>{paint.name}</font></li>
        )}
      </ul>
    )
}

export default colorList