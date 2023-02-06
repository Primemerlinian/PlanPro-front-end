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



export default CategoryCard;


