import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import TestimonialsSection from '../components/TestimonialsSection';
import CompanyLogos from '../components/CompanyLogos';
import StatsSection from '../components/StatsSection';

const Placements = () => {
  return (
    <>
      <Helmet>
        <title>Student Placements - Success Stories | IAT Technologies</title>
        <meta name="description" content="Discover IAT Technologies student placement success stories. 2,374+ students placed in top companies like TCS, Wipro, Infosys, and more." />
      </Helmet>

      <section className="bg-gradient-to-r from-primary to-orange-dark text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Placements</h1>
            <p className="text-xl text-orange-200">Success stories of our alumni</p>
          </motion.div>
        </div>
      </section>

      <StatsSection />
      <TestimonialsSection />
      <CompanyLogos />
    </>
  );
};

export default Placements;