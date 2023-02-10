import styles from './StepList.module.css'

const StepList = (props) => {

  return (
    <main className={styles.container}>
      <section>
        <h4>Step list</h4>
        <ul>
          {props.steps.map(step => (
            <li key={step._id}>
              {step.title}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default StepList