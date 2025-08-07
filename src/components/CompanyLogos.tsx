import { motion } from 'framer-motion';
import companiesData from '../data/companies.json';

interface Company {
  id: number;
  name: string;
  logo: string;
}

const CompanyLogos = () => {
  const companies: Company[] = companiesData;

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Alumni work at
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trained at IAT Technologies, placed at leading tech companies – see where our learners are making an impact.
          </p>
        </motion.div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-soft hover:shadow-medium transition-smooth hover-scale group"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="max-h-12 w-auto filter grayscale group-hover:grayscale-0 transition-smooth opacity-70 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>

        {/* Infinite Scroll Effect (Alternative Display) */}
        <div className="mt-16 overflow-hidden">
          <div className="flex space-x-16" style={{
            animation: 'marquee 30s linear infinite',
            width: 'calc(200% + 4rem)'
          }}>
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`scroll-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-10 w-auto filter grayscale opacity-60"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%) }
            100% { transform: translateX(-50%) }
          }
        `}
      </style>
    </section>
  );
};

export default CompanyLogos;