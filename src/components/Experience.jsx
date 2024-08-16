import { competition } from "../constants";

const Experience =()=> {
    return (
        <div className="list">
            <h2>Competition Experience</h2>
                {
                    competition.map((item)=> (
                        <li>{item}</li>
                    ))
                }
            <div className="space"/>
        </div>
    )
}

export default Experience