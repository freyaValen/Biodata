import { skills } from "../constants";

const Skills =()=> {
    return (
        <div className="list">
            <h2>Skills</h2>
            {
                skills.map((item)=> (
                    <li>{item}</li>
                ))
            }
        </div>
    )
}

export default Skills