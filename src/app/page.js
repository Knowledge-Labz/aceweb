'use client'
import {useEffect} from 'react'
import Navbar from './components/global/navbar/navbar'
import Hero from './components/homepage/hero/hero'
import Details from './components/homepage/details/details'
import Explainer from './components/homepage/explainer/explainer'
import Cta from './components/homepage/cta/cta'
export default function Home() {
  useEffect(() => {
    // disable X axis scrolling
    document.body.style.overflowX = "hidden";
});
  return (
    <main className="">
      <style>
        @import url(&quot;https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap&quot;);
      </style>
        <Navbar/>
      <section className="hero-section">
        <Hero/>
      </section>
      <section className="presentation-section">
        <Details/>
      </section>
      <section className="explainer-section">
        <Explainer/>
      </section>
      <section className="cta-section">
        <Cta/>
      </section>
    </main>
  )
}
