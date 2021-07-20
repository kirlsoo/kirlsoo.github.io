import React, { useState } from 'react';
import '../Contact/contact.css';

function Contact(props) {
    const [message,setMessage] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="Contact" id="contact">
            <div className="left">
                <img src="https://wallpapercave.com/wp/wp4955491.jpg" alt=""></img>
            </div>
            <div className="right">
                <h2>Contact Me!</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span> Thanks! I'll get back to you ASAP</span>}
                </form>
            </div>
        </div>
    );
}

export default Contact;