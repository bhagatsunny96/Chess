import React from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'
export default function Peice({ peice: { type, color }, position, }) {
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: 'peice', id: `${position}_${type}_${color}`, },
        collect: (monitor) => {
            return { isDragging: !!monitor.isDragging() }
        },
    })
    const peiceImg = require(`./assets/${type}_${color}.png`)
    return ( <
        >
        <
        DragPreviewImage connect = { preview }
        src = { peiceImg }
        / >

        <
        div className = 'piece-container'
        ref = { drag }
        style = {
            { opacity: isDragging ? 0 : 1 }
        } >
        <
        img src = { peiceImg }
        alt = ""
        className = 'piece' / >

        <
        /div> < / >
    )
}