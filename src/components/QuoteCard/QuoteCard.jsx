import { NavLink } from 'react-router-dom'  
import styles from './QuoteCard.module.css'

const QuoteCard = ({ quote }) => {
  return (
    <NavLink to={`/quotes/${quote._id}`}>
      <article className={styles.container} key={quote._id}>
        <header>
            <h1>{quote.title}</h1>
        </header>
        <p>{quote.quote}</p>
        </article>
    </NavLink>
  )
}

export default QuoteCard