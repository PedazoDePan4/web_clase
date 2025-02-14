function AdminPage({setLogin}) {
  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={() => setLogin(false)}>Log Out</button>
    </div>
  );
}

export default AdminPage;