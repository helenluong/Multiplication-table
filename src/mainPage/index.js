import React, { useState, useEffect, Component} from "react";


const Index = () => {
    const [mulTab, setMulTab] = useState ([])
    const [myLoopTab, setMyLoopTab] = useState([])
    
    function createMulTab (e) {
        let myTab = []

            for (let i = 0; i < 11; i++) {
                myTab.push(i);
            }
    }
    setMyLoopTab(myTab);

    useEffect(() => {
        createMulTab()
        console.log("1");
    }, [])

    return (
        <div>
          <h3></h3>  
        </div>
    );
};

export default Index;