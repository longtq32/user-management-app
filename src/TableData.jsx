import { useState } from "react";

import Form from "./Form";
// import usersData from "./data/users";


function TableData() {
  const [users, setUsers] = useState([]);

  const handleEditUser = (editedUser) => {
    const userIndex = users.findIndex((user) => user.id === editedUser.id);

    if (userIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[userIndex] = editedUser;
      setUsers(updatedUsers);
    }
  };

  const addData = (newData) => {
    setUsers((prevData) => [...prevData, newData]);
  };

  return (
    <>
      <h1 className="app-title">Ứng dụng Quản lý Người dùng</h1>
      
      <Form addData={addData} />
      
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Năm sinh</th>
            <th>Nơi sinh</th>
            <th>Vị trí</th>
          </tr>
        </thead>
        <tbody>
          {users.map( (user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.year_of_birth}</td>
              <td>{user.province}</td>
              <td>{user.position}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Chỉnh sửa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableData;
