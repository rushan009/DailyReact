import React from "react";

const Usercard = ({ user }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{user.name}</h2>

      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <div style={styles.address}>
        <strong>Address:</strong>
        <p>
          {user.address.street}, {user.address.city}
        </p>
      </div>

      <div style={styles.company}>
        <strong>Company:</strong>
        <p>{user.company.name}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "12px",
    maxWidth: "400px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  name: {
    marginBottom: "8px",
    color: "#333",
  },
  address: {
    marginTop: "8px",
    fontSize: "14px",
  },
  company: {
    marginTop: "8px",
    fontSize: "14px",
  },
};

export default Usercard;
