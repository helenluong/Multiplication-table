import React, { useState, useEffect, Component } from "react";


const Index = () => {
    const [mulCol1, setMulCol1] = useState([])
    const [mulCol2, setMulCol2] = useState([])
    const [myLoopTab, setMyLoopTab] = useState([])

    const [myRgb, setMyRgb] = useState('') //1. chỗ chứa trong useState()

    const [rgb, setRgb] = useState('')
    const changeColor = () => {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        setRgb(`${r},${g},${b}`)
        console.log('255,0,0')
    }

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
    //lam sao kiem va thay the het ki tu muon thay

    useEffect(() => {
        createMulTab()
        console.log("1");
    }, [])





    return (
        <div>
            <div>
                How to change background color of my table
                <hr className='text-warning' />

                {/* 
                1. Tạo được 1 cái nút random() 0-255 ? Tại sao? rgb(a,b,c). Phải random được số a,b,c từ 0-255 
                2. Tạo đc 1 cái nút và binding cái function random vào nút đó.
                3. Tạo được 1 hàm random() 0-255 
                4. Phải có chỗ chứa (useState), phải có chỗ xuất ra render {}
                5. Làm ngược từ bước thứ 4 trở lên
                6. Làm xong 1 bước, test lại 1 bước.
                */}
                <hr />
                {/* 1.b Lấy dữ liệu từ useState() */}
                <h1
                style={
                    // { backgroundColor: "rgb(0,255,0)" }
                    { backgroundColor: `rgb(${myRgb})` }
                }
                >RGB:{myRgb}</h1>


                {/* 3a Tạo cái nút */}
                {/* 3b Binding */}
                <button onClick={randomNumber}>Random rgb()</button>
                <hr />
                {/* --------------------------------- */}

                <button onClick={changeColor}>
                    Click here to see COLOR change
                </button>

                {/*  */}

            </div>
            <div id="wrapper">
                {
                    myLoopTab.map((element, index) => {
                        return (
                            <table key={index}>
                                {myLoopTab.map((myElement, myIndex) => {
                                    return (
                                        <>
                                            <tr id="MulTab" key={myIndex}>
                                                <td key={myIndex}>{myElement} x {element}</td>
                                                <td key={myIndex + 10}>{myElement * element}</td>
                                            </tr>

                                        </>

                                    )
                                })}
                                <br />
                            </table>
                        )
                    })
                }
            </div>
            <table className="table table-bordered border-dark">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>

                </tr>
                <tr>
                    <td>a x b </td>
                    <td>c</td>

                </tr>


            </table>


        </div>
    );
};

export default Index;