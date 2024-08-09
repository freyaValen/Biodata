import { data } from "../constants"

const Name = () => {
    console.log("ini adalah name")
    return (
        <div className="nameBox">
            <h1 className="name">Freya Valencia</h1>
            <p className="name">{data.job}</p>
        </div>
    )
}

export default Name