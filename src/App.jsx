
import Header from './components/Header';
import TopNavbar from './components/TopNavbar';
import MainNavbar from './components/MainNavbar';
import Welcome from './components/Welcome';
import Benefits from './components/Benefits';
import CertificateSection from './components/CertificateSection';
import WhatWeDo from './components/WhatWeDo';
import CourseSection from './components/CourseSection';
import DirectionsRegistration from './components/DirectionsRegistration';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <TopNavbar />
      <MainNavbar />
      <main className="flex-grow">
        <Welcome />
        <Benefits />
        <CertificateSection />
        <WhatWeDo />
        <CourseSection />
        <DirectionsRegistration />
      </main>
      <Footer />
    </div>
  );
}

export default App;