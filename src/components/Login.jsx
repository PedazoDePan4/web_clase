import { useNavigate } from "react-router-dom";


function Login({ setLogin }) {

  const navigate = useNavigate();

  {/* Cambiar el estado del log in en base al input */ }
  const validateForm = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" || password === "password") {
      setLogin(true)
      navigate('/admin')
    }
    else {
      alert("Invalid username or password")
    }
  }

  return (
    <div className="container">
      <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <div className="logo"></div>
      </div>
      <h1>Log In</h1>
      <form action="">
        <input type="text" id="username" placeholder="Username" required />
        <input type="password" id="password" placeholder="Password" required />
        <button type="submit" onClick={validateForm}>Log In</button>
      </form>
      <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
  
          body {
            background: black;
            color: white;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
  
          .logo {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: spin 1s linear infinite;
            background: linear-gradient(90deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00e7, #ff0000);
          }
  
          h1 {
            text-align: center;
            margin: 0;
            padding: 0;
          }
  
          form {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
  
          input {
            width: 300px;
            height: 40px;
            margin: 10px;
            padding: 5px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            color: white;
            background-color: rgba(216, 219, 234, 0.2);
          }
  
          button {
            width: 300px;
            height: 40px;
            margin: 10px;
            padding: 5px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            background-color: #3844f4;
            color: white;
            cursor: pointer;
          }
        `}</style>
    </div>
  )
}

export default Login;
