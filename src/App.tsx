import { useEffect, useState } from 'react';
import { caseStudies, homeCases } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import CaseStudy from './components/CaseStudy';
import HydroTrackDetail from './components/HydroTrackDetail';
import GoRoundDetail from './components/GoRoundDetail';

type Route = 'home' | 'case' | 'hydrotrack2' | 'goround2';

export default function App() {
  const [route, setRoute] = useState<Route>(() => {
    const h = window.location.hash;
    if (h === '#/case/hydrotrack2') return 'hydrotrack2';
    if (h === '#/case/goround2') return 'goround2';
    if (h.startsWith('#/case/')) return 'case';
    return 'home';
  });
  const [caseId, setCaseId] = useState<string | null>(() => {
    const h = window.location.hash;
    return h.startsWith('#/case/') ? h.replace('#/case/', '') : null;
  });
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash;
      if (h === '#/case/hydrotrack2') { setRoute('hydrotrack2'); setCaseId('hydrotrack2'); return; }
      if (h === '#/case/goround2') { setRoute('goround2'); setCaseId('goround2'); return; }
      if (h.startsWith('#/case/')) {
        const id = h.replace('#/case/', '');
        if (caseStudies[id]) { setRoute('case'); setCaseId(id); return; }
      }
      setRoute('home'); setCaseId(null);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    if (route !== 'home') return;
    const ids = ['about', 'work', 'contact'];
    const onScroll = () => {
      let current = 'about';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) current = id;
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [route]);

  const navigate = (newRoute: string, sectionId?: string, newCaseId?: string) => {
    if (newRoute === 'home') {
      window.location.hash = '';
      setRoute('home');
      setCaseId(null);
      requestAnimationFrame(() => {
        if (!sectionId || sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'auto' });
        } else {
          const el = document.getElementById(sectionId);
          if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
        }
      });
    } else if (newRoute === 'hydrotrack2') {
      window.location.hash = '/case/hydrotrack2';
      setRoute('hydrotrack2');
      setCaseId('hydrotrack2');
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (newRoute === 'goround2') {
      window.location.hash = '/case/goround2';
      setRoute('goround2');
      setCaseId('goround2');
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (newRoute === 'case' && newCaseId) {
      window.location.hash = `/case/${newCaseId}`;
      setRoute('case');
      setCaseId(newCaseId);
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} route={route} navigate={navigate} />
      {route === 'home' ? (
        <>
          <Hero />
          <About />
          <Work navigate={navigate} cases={homeCases} />
          <Contact />
        </>
      ) : route === 'hydrotrack2' ? (
        <HydroTrackDetail navigate={navigate} />
      ) : route === 'goround2' ? (
        <GoRoundDetail navigate={navigate} />
      ) : (
        caseId && caseStudies[caseId]
          ? <CaseStudy caseId={caseId} navigate={navigate} />
          : null
      )}
    </>
  );
}
