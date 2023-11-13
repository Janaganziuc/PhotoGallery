import { useEffect, useState } from "react"
import ApiLinkTemplate from "../template/ApiLinkTemplate"
export default function ApiLink() {
    const [mix, setMix] = useState([])
    const [category, setCategory] = useState("mixed")
    // console.log(category)

    const PHOTOPROJECT = `https://api.pexels.com/v1/search?query=${category}`
    useEffect(() => {
        try {
            const request = async () => {
                await fetch(PHOTOPROJECT, {
                    method: "GET",
                    headers: {
                        Authorization: "3bIIzrHFJntiuXYh5Lm5mnE0zdVKtt2ilThJvVefj0sVywBRvOnbaVkH"
                    }
                })
                    .then(response => response.json())
                    .then(json => setMix(json))
            }
            request()
        } catch (error) {
            console.log("conectarea cu serverul a esuat")
        }
    }, [PHOTOPROJECT])
    console.log(PHOTOPROJECT)
    // console.log(mix.photos)
    const intro = mix.photos
    const photoStock = intro?.map((e, i) => {
        const fotoSize = e.src.tiny
        const fotoDescription = e.alt
        return <ApiLinkTemplate imagine={fotoSize} imagineText={fotoDescription}></ApiLinkTemplate>
    })
    // console.log(photoStock)
    // console.log(mix.photos)
    function change() {
        setCategory("mixed")
    }
    function oceanfn() {
        setCategory("ocean")
    }
    function roadfn() {
        setCategory("road")
    }
    function creativefn() {
        setCategory("creative")
    }
    function showCategoryInput(data) {
        setCategory(data.target.value)
    }
    return (
        <div>
            <div className="allPhoto">
                {photoStock}
            </div>
            <div className="buttonPhoto">
                <button onClick={change}>Mixed</button>
                <button onClick={oceanfn}>Ocean</button>
                <button onClick={roadfn}>Road</button>
                <button onClick={creativefn}>Creative</button>
            </div>
            <div className="inputPhoto">
                <input onChange={showCategoryInput} type="text" placeholder="enter the category" name="" id="" />
            </div>
        </div>
    )
}