import { useState } from "react"
import Cards from "./Cards";
import './button.css'
import './Cards.css'

export default function Bookshelf({ info }) {
    const [item, setItem] = useState([])
    const [istrue, setIstrue] = useState("false")
    function GoToBookshelf() {
        if (istrue == "false") {
            setIstrue("true")
        }
        let storedData = {}
        // Loop through local storage keys and retrieve data
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            storedData[key] = localStorage.getItem(key);
            // console.log(localStorage.getItem(key))
        }
        // console.log(item);
        // console.log([storedData]);
        setItem(...item, [storedData]);
    }
    return (
        <div>
            <button className="btn" onClick={GoToBookshelf} style={(istrue == "true") ? {opacity: 0} : {opacity: 1}}>My Bookshelf</button>
            {(istrue == "true") ?
                <div>
                    <hr />
                    <div className="container">
                    {/* <h1>{console.log(item.cart_item_k1ezwkn3yyl)}</h1> */}
                    {console.log(item[0])}
                    {Object.keys(item[0]).map((key) => (
                        <li key={key} className="cardoutline">
                        {/* <b>{key}:</b>  */}
                        {item[0][key]}
                         </li>
                    ))}
                    </div>
                    <hr />
                </div>
                :
                <h1></h1>
            }
        </div>
    )
}