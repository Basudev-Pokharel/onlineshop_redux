import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/hooks";
import { fetchUsers } from "../store/userSlice";

const Users = () => {
  let users = useSelector((state) => state.users.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      Length of Users are:{users.length}
      {users.map((data) => (
        <div key={data.id}>
          <h2>{data.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Users;
