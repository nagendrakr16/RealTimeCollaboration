import React, { useEffect, useState } from 'react';

const CollaboratorsList = ({ socket }) => {
  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    if (!socket) return;

    socket.on("update-collaborators", (users) => {
      setCollaborators(users);
    });
  }, [socket]);

  return (
    <div>
      <h3>Active Collaborators</h3>
      <ul>
        {collaborators.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CollaboratorsList;
