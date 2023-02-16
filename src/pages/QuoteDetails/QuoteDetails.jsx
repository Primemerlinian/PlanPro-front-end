import styles from './QuoteDetails.module.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as quoteService from '../../services/quoteService'

const QuoteDetails = (props) => {
  const { id } = useParams()
  const [quote, setQuote] = useState({})

  useEffect(() => {
    const fetchQuote = async () => {
      const data = await quoteService.show(id)
      setQuote(data)
    }
    fetchQuote()
  }, [id])

  // Verify state with a console.log or React Dev Tools:
  console.log('Quote State:', quote)
  if (!quote) return 'Loading...'

  return (
    <main className={styles.container}>
      <article>
        <header>
          {quote.category && <h3>{quote.category.toUpperCase()}</h3>}
          <h1>{quote.title}</h1>
        </header>
        <p>{quote.text}</p>
      </article>
      <section>
        <h1>Quotes</h1>
      </section>
    </main>
  )
}

export default QuoteDetails
