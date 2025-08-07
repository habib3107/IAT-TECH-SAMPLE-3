import { motion } from 'framer-motion';
import { BookOpen, Code, Users, TrendingUp, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Industry-Aligned Curriculum",
      description: "Our curriculum is carefully designed to reflect the latest industry trends, ensuring you gain the skills that are currently in high demand."
    },
    {
      icon: Code,
      title: "Hands-On Learning",
      description: "We emphasize practical training through real-time projects and live case studies, helping you build job-ready skills with confidence."
    },
    {
      icon: Users,
      title: "Unlimited Internship Opportunities",
      description: "We offer unlimited internship support, giving you the chance to apply your learning in real-world environments and strengthen your experience."
    },
    {
      icon: Award,
      title: "Dedicated Placement Support",
      description: "From resume building to mock interviews and job referrals, we provide complete assistance to help you step confidently into the workforce."
    },
    {
      icon: TrendingUp,
      title: "Career Growth Pathways",
      description: "Whether you're a fresher or a working professional, our programs are designed to open up exciting and rewarding career opportunities in IT and beyond."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-primary font-semibold mb-2">
            Empowering Upskilling Your Future
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            IAT Technologies is a Top IT Training and Placement institute in Chennai, dedicated to 
            equipping learners with the most in-demand skills of today's digital world
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-white rounded-xl p-6 shadow-medium hover:shadow-large transition-smooth hover-lift"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-smooth">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-smooth" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;