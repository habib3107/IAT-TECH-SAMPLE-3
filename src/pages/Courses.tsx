import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import CoursesGrid from '../components/CoursesGrid';
import coursesData from '../data/courses.json';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Data Science', 'Development', 'Testing', 'Cloud', 'Security'];

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>IT Courses - Data Science, Full Stack Development & More | IAT Technologies</title>
        <meta 
          name="description" 
          content="Explore comprehensive IT courses at IAT Technologies. Learn Data Science, Full Stack Development, Software Testing, Cyber Security, and more with industry-aligned curriculum and placement support." 
        />
        <meta name="keywords" content="IT courses, data science course, full stack development, software testing course, cyber security training, chennai courses" />
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
              Explore Our IT Courses
            </h1>
            <p className="text-xl md:text-2xl text-orange-200 max-w-3xl mx-auto">
              Master the skills that matter with our industry-aligned curriculum designed for real-world success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-gray-light py-8">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-white text-foreground hover:bg-primary hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-muted-foreground">
            Showing {filteredCourses.length} of {coursesData.length} courses
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Level:</span>
                        <span className="font-semibold">{course.level}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-light text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full btn-primary">
                      Enroll Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Courses;