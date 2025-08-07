import { motion } from 'framer-motion';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 text-primary">
              <BookOpen className="w-6 h-6" />
              <span className="text-lg font-semibold">Welcome to IAT TECHNOLOGIES</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Educate, Innovate, Empower India
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              IAT Technologies has rapidly established itself as a high-performing organization in the IT Training 
              and Placement sector, well known for its commitment to delivering quality education and career counseling. 
              The company, with its reputation as a highly respected name in the pool of career-driven professionals, 
              has made an impressive and successful place for itself in the highly competitive IT Training & Placement arena.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              At the center of this success are the dedicated coordinators at IAT, who carefully monitor several 
              academic activities like subject planning, delivering lectures, and problem-solving sessions. Their 
              proactive approach makes sure that each student is provided with individualized attention and unstinting 
              guidance throughout the learning process—tells of a genuinely student-oriented IT Training & Placement institute.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              With a good placement history in the best IT companies, IAT Technologies keeps providing students with 
              technical knowledge as well as career ability. If you are a fresher or wish to improve your skills, 
              IAT Technologies is your best choice for total IT Training & Placement, hence the best IT institute in Chennai.
            </p>

            <Link 
              to="/about" 
              className="inline-block btn-primary"
            >
              Read More
            </Link>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/api/placeholder/600/500"
                alt="IAT Technologies Training"
                className="rounded-xl shadow-large w-full"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-medium">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">2,374+</div>
                    <div className="text-sm text-muted-foreground">Students Placed</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-medium">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            India's Trusted Destination for IT Job Skills Training
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <strong>IAT Technologies</strong> is a leading IT training and placement company based in Chennai, India, 
            dedicated to empowering individuals and organizations with the skills required to excel in today's digital landscape. 
            With a mission to bridge the gap between talent and opportunity, IAT Technologies offers a range of industry-relevant 
            courses and services designed to foster growth, productivity, and success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;