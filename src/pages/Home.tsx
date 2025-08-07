import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import CoursesGrid from '../components/CoursesGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsSection from '../components/TestimonialsSection';
import CompanyLogos from '../components/CompanyLogos';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>IAT Technologies - Best IT Training and Placement Institute in Chennai</title>
        <meta 
          name="description" 
          content="IAT Technologies is Chennai's leading IT training and placement institute. Join 2,374+ successful students placed in top companies like TCS, Wipro, Infosys. Courses in Data Science, Full Stack Development, and more." 
        />
        <meta name="keywords" content="IT training Chennai, placement institute, data science course, full stack development, software testing, chennai training institute" />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <StatsSection />
      <CoursesGrid limit={6} />
      <WhyChooseUs />
      <TestimonialsSection />
      <CompanyLogos />
      <ContactForm />
    </>
  );
};

export default Home;