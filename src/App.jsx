import React from 'react'
import { useState, useEffect } from "react";
import './App.css'
import Board from './Board';
import { gameSubject, initGame, resetGame } from "./Game";

function GameApp() {
    const [board, setboard] = useState([])
    const [isGameOver, setIsGameOver] = useState()
    const [result, setResult] = useState()
    const [turn, setTurn] = useState()
    useEffect(() => {
        initGame()
        const subscribe = gameSubject.subscribe((game) => {
            setboard(game.board)
            setIsGameOver(game.isGameOver)
            setResult(game.result)
            setTurn(game.turn)
        })
        return () => subscribe.unsubscribe()
    }, [])
    return <div className = "app-container" > {
            isGameOver && ( <
                h2 className = "vertical-text" > Game Over <
                button onClick = { resetGame } >
                <
                span className = "vertical-text" >
                NEW GAME <
                /span> < /
                button >
                <
                /h2>
            )
        } <
        div className = "board-container" >
        <
        Board board = { board }
    turn = { turn }
    /> < /
    div > {
        result && < p className = "vertical-text" > { result } < /p>} < /
        div >
    }
    export default GameApp