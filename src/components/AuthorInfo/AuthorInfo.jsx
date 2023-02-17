import styles from './AuthorInfo.module.css'
import ProfileIcon from '../../assets/branding/profile.png'

const AuthorInfo = ({ content }) => {
  const photo = content?.author?.photo ? content?.author?.photo : ProfileIcon
  return (
    <div className={styles.container}>
      <img src={photo} alt="The user's avatar" />
    </div>
  )
}

export default AuthorInfo