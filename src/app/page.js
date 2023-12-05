import Header from '@/components/common/Header/Header'
import DataInputContainer from '@/components/FeatureComponents/DataInput/DataInputContainer'
import ResultsTableContainer from '@/components/FeatureComponents/ResultsTable/ResultsTableContainer'
import styles from './page.module.css'
export default function Home() {
  return (
   <>
    <Header />
    <main className={styles.mainCtr}>
      <DataInputContainer />
      <ResultsTableContainer />
    </main>
   </>
  )
}
