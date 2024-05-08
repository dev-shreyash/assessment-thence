import axios from 'axios';
import './form.scss'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Form() {
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()



    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(email)) {
            setError("");
        } else {
            setError("Enter a valid email address");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const name = formData.get("name").trim()
        if (!name) {
            setError("Name is required");
            return
        }

        try {
            

            if (!error) {

                //api operations
                // const res = await axios.post('http://server-url/api/', {
                //     name,
                //     email
                // })

                navigate('/success')
            } else {
                console.error("Fix the errors before submitting")
            }


        } catch (error) {
            console.error("Submission failed:", error.res?.data?.message);
            setError(error.res.data.message || "Form submission failed");
        }

    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Enter your name" />
                <input name="email" type="text" placeholder="Enter your email" value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                    }} />
                 {error && <p className="error"><img src="/error-mark.svg" alt="" />{error}</p>}

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Form