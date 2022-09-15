import React, { useState, useEffect, Component } from "react";


const Index = () => {
    
    const [myLoopTab, setMyLoopTab] = useState([])

    const [myRgb, setMyRgb] = useState('') //1. chỗ chứa trong useState()
    const [myNumber, setMyNumber] = useState('') //1. chỗ chứa trong useState()

   

    // 2. tạo cái hàm random()
    function randomNumber() {
        console.log('test')
        // setMyRgb('255,0,0')
        // setMyRgb(Math.floor(Math.random()*255))
        // rgb(a,b,c)
        // random a,b,c
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        setMyRgb(`${r},${g},${b}`) //tự coi lại, gg keywords "literal string JS"
    }

    function randomCol() {
        console.log('test')
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        setMyNumber(`${r},${g},${b}`) //tự coi lại, gg keywords "literal string JS"
    }

    //dynamic color code of usestate
    //Math.random, tao nut random 0-255
    //tao nut de chay function random, check button



    function createMulTab(e) {
        let myTabHeader = []
        for (let i = 1; i < 11; i++) {
            myTabHeader.push(i);
        }
        setMyLoopTab(myTabHeader)


    }

    useEffect(() => {
        createMulTab()
        console.log("1");
    }, [])





    return (
        <div>
            <div>
                How to change background color of my table
                <hr className='text-warning' />

            </div>
            <div id="wrapper">
                {
                    myLoopTab.map((element, index) => {
                        return (
                            <table key={index} >
                                {myLoopTab.map((myElement, myIndex) => {
                                    return (
                                        <>
                                            <tr key={myIndex} >
                                                <td key={myIndex} style={{backgroundColor: `rgb(${myRgb})`,
                                                                          border: `1px dashed black`,
                                                                          color: `darkblack`}}>
                                                    {myElement} x {element}</td>
                                                <td key={myIndex + 10} style={{backgroundColor: `rgb(${myRgb})`,
                                                                               color: `rgb(${myNumber})` }}>
                                                    {myElement * element}</td>
                                            </tr>
                                        </>
                                        
                                    );
                                   
                               })}
                                <br />
                            </table> 
                        );
                        
                    })
                }
    
                        <button onClick={randomCol}>Random Math()</button>
                        <button onClick={randomNumber}>Random Color()</button>
                    
            </div>


        </div>
    );
};

export default Index;