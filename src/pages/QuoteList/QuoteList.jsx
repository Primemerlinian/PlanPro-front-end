import QuoteCard from "../../components/QuoteCard/QuoteCard"
import styles from './QuoteList.module.css'
import { NavLink } from 'react-router-dom'


const QuoteList = (props) => {
  return (
    <div>
      <NavLink to ="/quotes/new" >
        <button>New Quote</button></NavLink>
      <main className={styles.container}>
      {props.quotes.map((quote) => (
        <QuoteCard key={quote._id}
          quote={quote} />
      ))}
      </main>
    </div>
  )
}
export default QuoteList