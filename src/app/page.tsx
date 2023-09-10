'use client';
import Announcement from './components/Announcement';
import Article from './components/Article/Article';
import Counts from './components/Counts';
import { MyFooter } from './components/Footer';
import Hero from './components/Hero';
import { Profile } from './components/Profile';
import Services from './components/Services';

export default function Home() {
  return (
    <main className=" overflow-hidden">
      {/* <MyNavbar/> */}
      <section id="beranda">
        <Hero />
      </section>
      <section>
        <Counts />
      </section>
      <section id="pengumuman">
        <Announcement />
      </section>
      <section id="profil">
        <Profile />
      </section>
      <section id="layanan">
        <Services />
      </section>
      <section id="artikel">
        <Article />
      </section>
      <section id="kontak">
        <MyFooter />
      </section>
    </main>
  );
}
