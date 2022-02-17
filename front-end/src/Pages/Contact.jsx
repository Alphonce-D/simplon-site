import Navbar from "../Components/Navbar.jsx";

import React, { useRef} from 'react'
import '../Styles/Components/_formStyle.scss'

function Form() {


    const firstNameRef = useRef(null)
    const lastNameRef =  useRef(null)
    const emailRef = useRef(null)
    const messageRef =  useRef(null)

    
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
    }

    return (
      
        <div  className="container">
          <Navbar />
            <h1>Nous contacter</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="name">
                    <label for="firstName" id="nameLabel">Prénom</label>
                    <input
                     
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="firstName" 
                        ref={firstNameRef} 
                        tabindex="1" 
                    />
                    
                    <label for="lastName">Nom</label>
                    <input  
                        type="text" 
                        id="lastName" 
                        className="lastName" 
                        ref={lastNameRef}
                        tabindex="2"  
                    />
                </div>
                <label for="email">Email</label>
                <input 
                type="email" 
                name="email"
                id="email"
                className="email"
                placeholder="example@corp.com"
                ref={emailRef}
                tabindex="3" 
                />

                <label for="message">Message</label>
                <textarea 
                placeholder="Ecrivez ici..." 
                className="message" 
                name="message"
                ref={messageRef}
                >

                </textarea>
                <button type="submit" className="send">Envoyer</button>
            </form>
        </div>
    )
}

export default Form

// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
//       <h1>Contact</h1>
//     </div>
//   );
// };

// export default Contact;
