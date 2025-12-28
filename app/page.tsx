import Header from './components/Header';
import Hero from './components/Hero';
import ServicesHome from './components/ServicesHome';
import ProcedureHome from './components/ProcedureHome';
import CasesHome from './components/CasesHome';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServicesHome />
        <ProcedureHome />
        <CasesHome />
      </main>
      <Footer />
    </div>
  );
}
