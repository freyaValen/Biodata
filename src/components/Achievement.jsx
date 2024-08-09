import { achievement } from "../constants";

const Achievement =()=> {
    return (
        <div className="list">
           <h2>Achievement</h2>
            {
                achievement.map((item)=>(
                    <li>{item}</li>
                ))
            }
        </div>
    )
}

export default Achievement