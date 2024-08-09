import { contactData } from "../constants";

const Contact = () => {
    console.log("ini contact")
    return (
        <div className="contactBox border">
            <p className="contact">Phone : {contactData.phone}</p>
            <p className="contact">Mail : {contactData.email}</p>
            <p className="contact">Address : {contactData.address}</p>
        </div>
    )
}

export default Contact