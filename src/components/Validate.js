import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Validate() {

    const [pass, setpass] = useState()

    let navigate = useNavigate();

    useEffect(() => {

        let authToken = sessionStorage.getItem(process.env.REACT_APP_KEY)
        if (authToken) {
            console.log("Auth ")
            navigate('/home')
        }
    }, [])

    const handleclick = (e) => {
        e.preventDefault();

        console.log(pass, process.env.REACT_APP_PASS)
        if (pass === process.env.REACT_APP_PASS) {
            sessionStorage.setItem(process.env.REACT_APP_KEY, pass)
            navigate('/home')
        }
        else {
            alert('Incorrect Password')
        }

    }

    return (
        <div>

            <div className="center-form">

                <form class="login">
                    {/* <h1 className="heading">My Photo Gallery</h1> */}
                    <input type="password" name="password" id="password"
                     placeholder='Enter Security Code...'
                        onChange={(e) => setpass(e.target.value)} required /><br />
                    <button onClick={handleclick} class="btn">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Validate