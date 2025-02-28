import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { MonthlySummary } from './pages/MonthlySummary/MonthlySummary'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <MonthlySummary />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
