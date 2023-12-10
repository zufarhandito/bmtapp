'use client';
import {
  AnnouncementHomePage,
  ArticleHomePage,
  Hero,
  Profile,
  ServicesHomePage,
} from '../components/modules/LandingPage';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <section id="beranda">
        <Hero />
      </section>
      <section id="pengumuman">
        <AnnouncementHomePage />
      </section>
      <section id="profil">
        <Profile />
      </section>
      <section id="layanan">
        <ServicesHomePage />
      </section>
      <section id="artikel">
        <ArticleHomePage />
      </section>
    </main>
  );
}
