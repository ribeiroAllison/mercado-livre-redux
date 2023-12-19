"use client"

import Header from '@/components/common/Header/Header'
import DataInputContainer from '@/components/FeatureComponents/DataInput/DataInputContainer'
import ResultsTableContainer from '@/components/FeatureComponents/ResultsTable/ResultsTableContainer'
import styles from './page.module.css'
import { Provider } from 'react-redux';
import store from '@/redux/store';
import React from 'react'

export default function Home() {
  return (
   <Provider store={store}>
      <Header />
      <main className={styles.mainCtr}>
        <DataInputContainer />
        <ResultsTableContainer />
      </main>
    </Provider>
   
  )
}
