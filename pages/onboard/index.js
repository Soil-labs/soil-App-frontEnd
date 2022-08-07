import {
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { findMembers } from "../../redux/slices/usersInspectSlice";
import { updateUser } from "../../redux/slices/userInspectSlice";
import Layout from "../../components/layout/Layout";
import Avatar from "../../components/Avatar";
import EditUser from "../../components/EditUser";
import UserSelector from "../../components/UserSelector";
import Button from "../../components/Button";

function Projects() {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.usersInspect.members);
  const [users, setUsers] = useState([]);
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [submiting, setSubmiting] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(null);
  const [savedUsers, setSavedUsers] = useState([]);
  const [saveError, setSaveError] = useState(false);
  const router = useRouter();

  // const memberIsSelected = (member) => {
  //   const selectedMembers = [...users, ...savedUsers];
  //   return selectedMembers.some(
  //     (selectedMember) => selectedMember._id === member._id
  //   );
  // };

  const handleEditUser = (userData) => {
    const updatedUsers = users.map((user, index) => {
      if (currentUserIndex !== index) return user;
      return userData;
    });
    setUsers(updatedUsers);
  };

  useEffect(() => {
    const params = {};
    dispatch(findMembers(params));
    const interval = setInterval(() => {
      dispatch(findMembers(params));
    }, 10000);
    return () => clearInterval(interval);
  }, [dispatch]);

  useMemo(() => {
    if (!router.query.id || !members || !members.length) return;
    if (usersLoaded) return;
    if (usersLoaded) return;
    let idsQuery = router.query.id;
    if (idsQuery && typeof idsQuery === "string") {
      setUsers(members.filter((member) => member._id === idsQuery));
    }
    if (idsQuery.length > 1 && typeof idsQuery === "object") {
      setUsers(
        members.filter((member) => idsQuery.some((id) => member._id == id))
      );
    }
    setUsersLoaded(true);
  }, [JSON.stringify(members), router.query.id]);

  const setUserCallback = useCallback(
    (item) => {
      setUsers([...users, item.user]);
    },
    [users]
  );

  const handleSaveUser = async () => {
    if (submiting) return;
    const currUser = users[currentUserIndex];
    const params = {
      _id: currUser._id,
      discordName: currUser.discordName,
      interest: currUser.interest,
      timeZone: currUser.timeZone,
      hoursPerWeek: currUser.hoursPerWeek,
      skills: currUser.skills,
    };
    setSubmiting(true);
    const { type } = await dispatch(updateUser(params));
    setSubmiting(false);

    if (type.includes("rejected")) {
      setSaveError(true);
      return;
    }
    setSavedUsers([...savedUsers, users[currentUserIndex]]);
    setUsers(users.filter((user, index) => index !== currentUserIndex));
    setCurrentUserIndex(null);
  };

  const handleDeleteUser = () => {
    if (submiting) return;
    setUsers(users.filter((user, index) => index !== currentUserIndex));
    setCurrentUserIndex(null);
  };

  useEffect(() => {
    if (saveError) setTimeout(() => setSaveError(false), 5000);
  }, [saveError]);

  return (
    <div className="grid grid-cols-1 gap-y-3 md:gap-x-3 md:grid-cols-5">
      {/* How to apply column */}
      <section className="col-span-1">
        <UserSelector
          setDataCallback={setUserCallback}
          name="user"
          options={members}
          placeholder="Search user"
          selectedUsers={[...users, ...savedUsers]}
        />
        {users.map((user, index) => (
          <div
            key={index}
            onClick={() => {
              console.log(index);
              setCurrentUserIndex(index);
            }}
            className="flex items-center p-1 rounded-lg hover:bg-white cursor-pointer"
          >
            <Avatar src={user.discordAvatar} />
            <span>{user.discordName}</span>
          </div>
        ))}
      </section>

      {/* Main column */}
      <main className="col-span-3">
        {currentUserIndex !== null && (
          <div className="relative w-full bg-white p-3 rounded-xl">
            <>
              {saveError && (
                <h4 className="p-2 text-white bg-red-500 rounded-lg mb-2">
                  User could not be saved
                </h4>
              )}
              <h3 className="text-center">FILL OUT NEW USER PROFILE</h3>
              <EditUser
                key={users[currentUserIndex]}
                user={users[currentUserIndex]}
                setUserCallback={handleEditUser}
              />
              <div onClick={handleSaveUser} className="inline-block">
                <Button disabled={submiting}>Save</Button>
              </div>
              <div onClick={handleDeleteUser} className="inline-block">
                <Button disabled={submiting}>Delete</Button>
              </div>
            </>
          </div>
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
            className="flex items-center p-1"
          >
            <Avatar src={user.discordAvatar} />
            <span>{user.discordName}</span>
          </div>
        ))}
      </section>
      {/* <p>{JSON.stringify(JSON.stringify(users))}</p> */}
    </div>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Projects;
