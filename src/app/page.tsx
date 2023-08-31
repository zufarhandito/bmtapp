'use client'
import Announcement from './components/Announcement'
import Article from './components/Article/Article'
import Counts from './components/Counts'
import { MyFooter } from './components/Footer'
import Hero from './components/Hero'
import { Profile } from './components/Profile'
import Services from './components/Services'
import { MyNavbar } from './components/navbar'

export default function Home() {
  return (
    <main>
      <MyNavbar/>
      <Hero/>
      <Counts/>
      <Announcement/>
      <Profile/>
      <Services/>
      <Article/>
      <MyFooter/>
    </main>
  )
}
