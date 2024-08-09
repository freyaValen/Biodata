import { education } from "../constants";

const Education = ()=> {
    return (
        <div className="border">
            <h2>Education</h2>
            <ul className="list">
                <li><h4>2015 - 2021</h4></li>
                <li><a href="https://maps.app.goo.gl/TFL52LC9d8RtEkvi7"><p>{education.primary}</p></a></li>
                <li><h4>2021 - 2024</h4></li>
                <li><a href="https://maps.app.goo.gl/naYYaKWFSqrFBvdj7"><p>{education.middle}</p></a></li>
                <li><h4>2024</h4></li>
                <li><a href="https://bpkpenabur.or.id/bandung/smak-bpk-penabur-banda"><p>{education.high}</p></a></li>
            </ul>
        </div>
    )
}

export default Education