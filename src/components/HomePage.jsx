function HomePage({setLogin}) {
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={() => setLogin(false)}>Log Out</button>
      </div>
    );
  }
  
  export default HomePage;