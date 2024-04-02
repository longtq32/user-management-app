import { useState } from "react";

import Form from "./Form";
import usersData from "./data/users";

function TableData() {
  const [users, setUsers] = useState(usersData);

  const [edittingItem, setEdittingItem] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const handleEditUser = (editedUser) => {
    const userIndex = users.findIndex((user) => user.id === editedUser.id);

    if (userIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[userIndex] = editedUser;
      setUsers(updatedUsers);
    }
  };

  const handleEdit = (item) => {
    setEdittingItem(item);
  };

  const handleSave = (
    id,
    newName,
    newGender,
    newYear_of_birth,
    newProvince,
    newPosition
  ) => {
    const newData = users.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: newName,
          gender: newGender,
          year_of_birth: newYear_of_birth,
          province: newProvince,
          position: newPosition,
        };
      }
      return item;
    });
    setUsers(newData);
    setEdittingItem(null);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
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
          {users.map((item, id) => (
            <tr key={id}>
              <td>{item.id}</td>
              <td>
                {edittingItem && edittingItem.id === item.id ? (
                  <input defaultValue={item.name} />
                ) : (
                  item.name
                )}
              </td>

              <td>
                {edittingItem && edittingItem.id === item.id ? (
                  <input defaultValue={item.gender} />
                ) : (
                  item.gender
                )}
              </td>

              <td>
                {edittingItem && edittingItem.id === item.id ? (
                  <input defaultValue={item.year_of_birth} />
                ) : (
                  item.year_of_birth
                )}
              </td>
              <td>
                {edittingItem && edittingItem.id === item.id ? (
                  <input defaultValue={item.province} />
                ) : (
                  item.province
                )}
              </td>
              <td>
                {edittingItem && edittingItem.id === item.id ? (
                  <input defaultValue={item.position} />
                ) : (
                  item.position
                )}
              </td>

              {/* <td>{item.gender}</td>
              <td>{item.year_of_birth}</td>
              <td>{item.province}</td>
              <td>{item.position}</td> */}

              <td>
                {/* <button onClick={() => handleEditUser(user)}>Chỉnh sửa</button> */}
                {edittingItem && edittingItem.id === item.id ? (
                  <button
                    onClick={() =>
                      handleSave(
                        item.id,
                        item.name,
                        item.gender,
                        item.year_of_birth,
                        item.province,
                        item.position
                      )
                    }
                  >
                    Save
                  </button>
                ) : (
                  <button onClick={() => handleEdit(item)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableData;
