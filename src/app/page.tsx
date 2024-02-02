import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
	<h1 className={styles.title}>
	  Task2Text
	</h1>
      <div className={styles.description}>
        <p>
          Hey, what's up. Do you sms?
        </p>
      </div>
    </main>
  );
}
