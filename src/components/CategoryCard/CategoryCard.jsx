import { Link } from "react-router-dom"
import styles from './CategoryCard.module.css'

import Icon from "../Icon/Icon"
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/categories/${category._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{category.title}</h1>
            <Icon category={category.category} />
          </span>
          <AuthorInfo content={category} />
        </header>
        <p>{category.text}</p>
      </article>
    </Link>
  )
}

// const NewCategory = (props) => {
//   const [form, setForm] = useState({
//     name: '',
//     description: '',
//   })

//   const handleChange = ({ target }) => {
//     setForm({ ...form, [target.name]: target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
		// Update this line shortly...
//   }

export default CategoryCard;


