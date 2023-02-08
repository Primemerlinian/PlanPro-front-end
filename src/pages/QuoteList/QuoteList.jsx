// import React, { useState } from "react";

// function App() {
//   const [quotes, setQuotes] = useState([]);
//   const [quote, setQuote] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setQuotes([...quotes, quote]);
//     setQuote("");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={quote}
//           onChange={(event) => setQuote(event.target.value)}
//         />
//         <button type="submit">Add Quote</button>
//       </form>
//       <ul>
//         {quotes.map((quote, index) => (
//           <li key={index}>{quote}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
