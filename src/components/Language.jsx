import { language } from "../constants";

const Language = ()=> {
    return (
        <div>
            <h2>Language</h2>
            <ul className="list">
                {
                    language.map((item)=> (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Language