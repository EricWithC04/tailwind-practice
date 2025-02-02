import './App.css'
import styles from './styles.ts'

import { 
  Navbar,
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Hero,
  Stats,
  Testimonials } from './components'

function App() {
  return (
    <div className='bg-primary text-white w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App
