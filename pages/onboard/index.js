import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Avatar from "../../components/Avatar";
import EditUser from "../../components/EditUser";

const mockData = {
  users: [
    {
      discordName: "Milo",
      discordAvatar: "https://placeimg.com/480/480/nature",
    },
    {
      discordName: "Sbelka",
      discordAvatar: "https://placeimg.com/480/480/nature",
    },
  ],
};

function Projects() {
  const [users, setUsers] = useState(mockData.users);
  const [currentUserIndex, setCurrentUserIndex] = useState(null);
  const [savedUsers, setSavedUsers] = useState([]);

  const handleEditUser = (userData) => {
    const updatedUsers = users.map((user, index) => {
      if (currentUserIndex !== index) return user;
      return userData;
    });
    setUsers(updatedUsers);
  };

  const handleSaveUser = () => {
    setSavedUsers([...savedUsers, users[currentUserIndex]]);
    setUsers(users.filter((user, index) => index !== currentUserIndex));
    setCurrentUserIndex(null);
  };

  const handleDeleteUser = () => {
    setUsers(users.filter((user, index) => index !== currentUserIndex));
    setCurrentUserIndex(null);
  };

  return (
    <div className="grid grid-cols-1 gap-y-3 md:gap-x-3 md:grid-cols-5">
      {/* How to apply column */}
      <section className="col-span-1">
        {users.map((user, index) => (
          <div
            key={index}
            onClick={() => {
              console.log(index);
              setCurrentUserIndex(index);
            }}
          >
            <Avatar src={user.discordAvatar} />
            <span>{user.discordName}</span>
          </div>
        ))}
      </section>

      {/* Main column */}
      <main className="col-span-3">
        {currentUserIndex !== null && (
          <>
            <h3>FILL OUT NEW USER PROFILE</h3>
            <EditUser
              user={users[currentUserIndex]}
              setUserCallback={handleEditUser}
            />
            <button onClick={handleSaveUser}>Save</button>
            <button onClick={handleDeleteUser}>Delete</button>
          </>
        )}
      </main>

      {/* How to apply column */}
      <section className="col-span-1">
        {savedUsers.map((user, index) => (
          <div
            key={index}
            onClick={() => {
              console.log(index);
              setCurrentUserIndex(index);
            }}
          >
            <Avatar src={user.discordAvatar} />
            <span>{user.discordName}</span>
          </div>
        ))}
      </section>
      <p>{JSON.stringify(users[currentUserIndex])}</p>
    </div>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Projects;
