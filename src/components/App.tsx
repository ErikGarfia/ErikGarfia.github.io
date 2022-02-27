import React from 'react';
import './App.scss';
import ParticlesComponent from './Particles/Particles';
import HomeComponent from './Home/Home';
import NavbarComponent from './Navbar/Navbar';
import AboutComponent from './About/About';
import TechnoComponent from './Technologies/Technologies';
import ProjectComponent from './Projects/Projects';
import CertificationsComponent from './Certifications/Certifications';
import Experience from './MyExperience/myExperience';

function App() {

  return (
    <>
      <ParticlesComponent />
      <NavbarComponent />
      <HomeComponent />
      <AboutComponent />
      <TechnoComponent />
      <Experience />
      <ProjectComponent/>
      <CertificationsComponent />
    </>
  );
}

export default App;
