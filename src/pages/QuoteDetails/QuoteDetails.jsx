import styles from "./QuoteDetails.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as quoteService from "../../services/quoteService";
// import AuthorInfo from "../../components/AuthorInfo/AuthorInfo";

const QuoteDetails = (props) => {
  const { id } = useParams();
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const fetchQuote = async () => {
      const data = await quoteService.show(id);
      setQuote(data);
      console.log(data);
    };
    fetchQuote();
  }, [id]);
  if (null) return "Loading...";

  return (
    <main className={styles.container}>
      <article>
        <header>
          {quote.category && <h3>{quote.category.toUpperCase()}</h3>}
          <h1>{quote.title}</h1>
        </header>
        <p>{quote.quote}</p>
      </article>
      <span>
        {/* <AuthorInfo content={quote} /> */}
        {quote?.author?._id === props.user.profile && (
          <>
            <button
              style={{ color: "black" }}
              onClick={() => props.handleDeleteQuote(id)}
            >
              Delete
            </button>
          </>
        )}
      </span>
    </main>
  );
};

export default QuoteDetails;
