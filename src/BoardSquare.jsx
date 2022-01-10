import React, { useEffect, useState } from 'react';
import Square from './Square';
import Peice from './Peice';
import { useDrop } from 'react-dnd';
import { handlemove } from './Game';
import { gameSubject } from './Game';
import Promote from './Promote';
export default function BoardSquare({ peice, black, position }) {
    const [promotion, setPromotion] = useState(null)
    const [, drop] = useDrop({
        accept: 'peice',
        drop: (item) => {
            const [fromPosition] = item.id.split('_')
            handlemove(fromPosition, position)

        },
    })

    useEffect(() => {
        const subscribe = gameSubject.subscribe(({ pendingPromotion }) =>
            pendingPromotion && pendingPromotion.to === position ? setPromotion(pendingPromotion) : setPromotion(null)
        )
        return () => subscribe.unsubscribe()
    }, [position])

    return ( <
        div className = "board-square"
        ref = { drop } >
        <
        Square black = { black } > {
            promotion ? ( <
                Promote promotion = { promotion }
                />
            ) : peice ? ( <
                Peice peice = { peice }
                position = { position }
                />
            ) : null
        } <
        /Square> < /
        div >
    )
}