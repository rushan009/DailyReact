import React, { useEffect, useState } from "react";
import Usercard from "./Usercard";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setUsers(result);
    };

    fetchData();
  }, []);

  const styles = {
    gridContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginTop: "20px",
    },
  };

  return (
    <div>
      <h1>Users App</h1>
      <div style={styles.gridContainer}>
        {users.map((user) => (
          <Usercard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
