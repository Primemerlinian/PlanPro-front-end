import styles from './Landing.module.css'
import Logotype from '../../assets/branding/PlanProAll.png'

const Landing = () => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.splash}>
          <img src={Logotype} alt="logo" />
        </section>
        <section className={styles.about}>
          <header>
            <h1>ABOUT US</h1>
            <h3>Why Productivity?</h3>
          </header>
          <article>
            <p>
              PlanPro offers a holistic view of an individual's work and personal life, eliminating the need for constant calendar switching by hand and reducing the time spent on planning. It provides a clear overview of daily tasks and upcoming appointments, making it easier for users to manage their schedules and focus on what's important.

              PlanPro is designed with flexibility in mind, allowing users to access it from anywhere, at any time. With the ability to plan and manage their day before it even starts, users can feel confident and in control, no matter where they are. Whether you are on the go or at home, PlanPro provides the convenience and ease of use necessary to stay organized and ahead of the game. It will also be there to offer any sort of daily motivation and inspiration.
            </p>
          </article>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2022 PLANPRO INC. ALL RIGHTS RESERVED</p>
      </footer>
    </>
  )
}

export default Landing