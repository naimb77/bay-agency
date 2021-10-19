// Stap 1: Importeer React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// Stap 2: definieer je component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Baysal Agency!">
      <p>Lorem ipsum</p>
      </Layout>
      <StaticImage alt="A picture from Luffy" src="../images/monkeydluffy.jpg"></StaticImage>
    </main>
  )
}
// Stap 3: Exporteer je component 
export default IndexPage
