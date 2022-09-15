import React, { useState, useEffect, Component } from "react";


const Index = () => {
    const [mulCol1, setMulCol1] = useState([])
    const [mulCol2, setMulCol2] = useState([])
    const [myLoopTab, setMyLoopTab] = useState([])
   

    function createMulTab(e) {
        let myTabHeader = []
        for (let i = 1; i < 11; i++) {
            myTabHeader.push(i);
        }
        setMyLoopTab(myTabHeader)

        // let myTabFirstCol = []
        // for (let j = 1; j < 11; j++) {
        //     myTabFirstCol.push(j);
        // }
        // setMulCol1(myTabFirstCol)
        // let myTabSecondCol = []
        // for (let k = 1; k < 14; k++) {
        //     if (k < 11) {
        //         myTabSecondCol.push(k);
        //     }
        //     else if (k < 12) {
        //         myTabSecondCol.push('=');
        //     }
        //     else if (k < 13) {
        //         myTabSecondCol.push('x');
        //     }
        //     else if (k < 14) {
        //         myTabSecondCol.push('j*k');
        //     }
        // }
        // setMulCol2(myTabSecondCol)
    }
    //lam sao kiem va thay the het ki tu muon thay

    useEffect(() => {
        createMulTab()
        console.log("1");
    }, [])

    


    return (
        <div>
            <div id="wrapper">
                {
                    myLoopTab.map((element, index) => {
                        return (
                            <table>
                                {myLoopTab.map((myElement, myIndex) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{myElement} x {element}</td>
                                                <td>{myElement * element}</td>
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
            <table class="table table-bordered border-dark">
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