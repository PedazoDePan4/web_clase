import { useNavigate } from "react-router-dom";


function ResetPassword() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        
    }

    return (
        <div>
            <h1>Reset Password</h1>
            <form action="">
                <input type="text" id="email" placeholder="email" required />
                <input type="password" id="password" placeholder="new password" required />
                <button type="submit" onClick={console.log("amogus")}>Log In</button>
            </form>
            <button onClick={() => navigate('/')}>Return</button>
        </div>
    )
}

export default ResetPassword;