import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Award, BookOpen, TrendingUp } from 'lucide-react';
import trainersData from '../data/trainers.json';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To bridge the gap between talent and opportunity by providing industry-relevant IT training and placement services."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be India's leading IT training institute, empowering professionals to excel in the digital economy."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, Innovation, Integrity, and Student-centric approach in everything we do."
    }
  ];

  const methodology = [
    {
      title: "Theory",
      description: "Strong theoretical foundation with industry insights and subject matter expertise",
      icon: BookOpen
    },
    {
      title: "Practicals",
      description: "Hands-on labs and real-time problem solving with latest tools and technologies",
      icon: Users
    },
    {
      title: "Assignments",
      description: "Real-world challenges that extend analytical thinking and practical application",
      icon: Target
    },
    {
      title: "Certification",
      description: "Industry certification preparation with intensive training and practice tests",
      icon: Award
    },
    {
      title: "Resume Preparation",
      description: "Professional resume creation showcasing qualifications and experience",
      icon: BookOpen
    },
    {
      title: "Hands-On Experience",
      description: "Practical experience through real projects and internship opportunities",
      icon: Users
    },
    {
      title: "Get Job",
      description: "Dedicated placement support until successful job placement in top companies",
      icon: TrendingUp
    }
  ];

  return (
    <>
      <Helmet>
        <title>About IAT Technologies - Leading IT Training Institute in Chennai</title>
        <meta 
          name="description" 
          content="Learn about IAT Technologies, Chennai's premier IT training and placement institute. Our mission, vision, expert trainers, and proven methodology for student success." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-orange-dark text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About IAT Technologies
            </h1>
            <p className="text-xl md:text-2xl text-orange-200 max-w-3xl mx-auto">
              Your trusted partner in IT education and career development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center bg-gray-light p-8 rounded-xl hover:shadow-medium transition-smooth"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Educate, Innovate, Empower India
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  IAT Technologies has rapidly established itself as a high-performing organization in the IT Training 
                  and Placement sector, well known for its commitment to delivering quality education and career counseling.
                </p>
                <p>
                  At the center of this success are the dedicated coordinators at IAT, who carefully monitor several 
                  academic activities like subject planning, delivering lectures, and problem-solving sessions.
                </p>
                <p>
                  With a good placement history in the best IT companies, IAT Technologies keeps providing students with 
                  technical knowledge as well as career ability.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/api/placeholder/600/400"
                alt="IAT Technologies Campus"
                className="rounded-xl shadow-large w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expert Trainers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Expert Trainers
            </h2>
            <p className="text-lg text-muted-foreground">
              Advance Your IT Career with IAT Technologies' Leading Instructors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainersData.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gray-light p-6 rounded-xl hover:shadow-medium transition-smooth"
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-foreground mb-2">{trainer.name}</h3>
                <p className="text-primary font-semibold mb-2">{trainer.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{trainer.specialization}</p>
                <p className="text-xs text-muted-foreground">{trainer.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Training Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive 7-step process designed to ensure your success from learning to placement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {methodology.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-medium hover:shadow-large transition-smooth hover-lift"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                <div className="mt-4 text-2xl font-bold text-primary/20">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;