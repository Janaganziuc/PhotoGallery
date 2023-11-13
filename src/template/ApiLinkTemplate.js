import { useState } from "react"

export default function ApiLinkTemplate({ imagine, imagineText }) {
    const [changeSize, setChangesize] = useState(true)
    console.log(changeSize)
    const verify = (changeSize) ? "templatePhoto" : "sizeLarge"
    const sizeImg = () => {
        setChangesize(!changeSize)
        
    }
    return (
        <div onClick={sizeImg} className={verify}>
            <img src={imagine} alt={imagineText}></img>
        </div>
    )
}

// import { useState } from "react"

// export default function ApiLinkTemplate({ imagine, imagineText }) {
//     const [changeSize, setChangesize] = useState("templatePhoto")
//     console.log(changeSize)

//     const sizeImg = () => {
//         setChangesize("sizeLarge")
//         console.log("sizeImg")
//     }
//     return (
//         <div onClick={sizeImg} className={changeSize}>
//             <img src={imagine} alt={imagineText}></img>
//         </div>
//     )
// }
