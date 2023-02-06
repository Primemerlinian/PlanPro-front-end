import { useState } from "react";
import styles from "./NewCategory.module.css";

const NewCategory = (props) => {
  const [form, setForm] = useState({
    title: "",
    color: "",
  });

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddCategory(form);
  };

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <label htmlFor="color-input">Color</label>
        <select
          required
          name="color"
          id="color-input"
          value={form.color}
          onChange={handleChange}
        >
          <option value="Grey">Grey</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Blue">Blue</option>
          <option value="Pink">Pink</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default NewCategory;
