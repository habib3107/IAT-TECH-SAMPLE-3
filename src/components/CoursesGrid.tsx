import { motion } from 'framer-motion';
import { Clock, BarChart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import coursesData from '../data/courses.json';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  category: string;
  features: string[];
  placement_rate: string;
}

const CoursesGrid = ({ limit }: { limit?: number }) => {
  const courses = limit ? coursesData.slice(0, limit) : coursesData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Career-Focused, Industry Approved Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the skills that matter with our industry-aligned curriculum designed for real-world success
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course: Course) => (
            <motion.div
              key={course.id}
              variants={item}
              className="group bg-white rounded-xl shadow-medium hover:shadow-large transition-smooth hover-lift overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.placement_rate}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {course.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <BarChart className="w-4 h-4 text-primary" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{course.category}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {course.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-light text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/courses/${course.id}`}
                    className="block w-full text-center btn-primary hover:shadow-orange"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/courses" className="btn-secondary">
              View All Courses
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CoursesGrid;