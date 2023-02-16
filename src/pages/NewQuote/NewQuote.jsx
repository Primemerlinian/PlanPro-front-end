import { useState } from "react";
import styles from './NewQuote.module.css'

const NewQuote = (props) => {
  const [form, setForm] = useState({ quote: "", });
  
  
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddQuote(form);
  };

  return (
    <>
      <main className={styles.container}>

      <form onSubmit={handleSubmit}>
        <h1>Quote</h1>
        <label htmlFor="quote-input"> Add an Inspirational Quote here!</label>
        <input
          type="text"
          name="quote"
          value={form.quote}
          placeholder="Type Here!"
          onChange={handleChange}
          />
        <button style={{ color: "black" }} type="submit">
          Submit
        </button>
      </form>
      {/* {props.quotes.map((quote) => (
          <>
        <li key={quote._id}>
        {quote.author?._id === props.user.profile &&
        <div className='quotecreation'>
          <button style={{ color: "black" }}
          onClick={() => props.handleDeleteQuote(props.quote._id)}
          >
            X
          </button>
            </div>
            }
            {quote.quote}
        </li>
            </> */}
      {/* ))} */}
      </main>
    </>
  );
};

export default NewQuote;



