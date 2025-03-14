import { useNavigate } from "react-router-dom";


function Signup() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Signup</h1>
            <form action="">
                <input type="text" id="username" placeholder="Username" required />
                <input type="password" id="password" placeholder="Password" required />
                <button type="submit" onClick={console.log("amogus")}>Log In</button>
            </form>
            <button onClick={() => navigate('/')}>Return</button>
        </div>
    );
}

export default Signup;