import React from 'react'
import Header from '../../components/Header/Header.jsx'
import Logo from '../../components/Logo/Logo.jsx'
import ProductListing from '../../components/ProductListing/ProductListing.jsx'
import Footer from '../../components/Footer/Footer.jsx'

export default function HomePage() {
  return (
    <div>
      <Header />
      <Logo />
      <main>
        <ProductListing />
      </main>
      <Footer />
    </div>
  )
}
