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
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="year_of_birth"
          placeholder="Year of Birth"
          value={formData.year_of_birth}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="province"
          placeholder="Province"
          value={formData.province}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
        />
      </div>
      <button className="button" type="submit">
        Thêm
      </button>
    </form>
  );
}

export default Form;
