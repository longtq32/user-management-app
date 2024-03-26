import { useState } from "react";

function Form({ addData }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    gender: "",
    year_of_birth: "",
    province: "",
    position: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(formData);
    setFormData({
      id: "",
      name: "",
      gender: "",
      year_of_birth: "",
      province: "",
      position: "",
    });
  };

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData( (prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleChange}/>
      <input type="text" name="name" placeholder="name" value={formData.name} onChange={handleChange}/>
      <input type="text" name="gender" placeholder="gender" value={formData.gender} onChange={handleChange}/>
      <input type="text" name="year_of_birth" placeholder="year_of_birth" value={formData.year_of_birth} onChange={handleChange}/>
      <input type="text" name="province" placeholder="province" value={formData.province} onChange={handleChange}/>
      <input type="text" name="position" placeholder="position" value={formData.position} onChange={handleChange}/>
      <button type="submit">Thêm</button>
    </form>
  );
}

export default Form;
