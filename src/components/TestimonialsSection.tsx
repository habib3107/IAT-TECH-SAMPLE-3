import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials: Testimonial[] = testimonialsData;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Testimonial
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry-Certified Training Courses
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-large relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-24 h-24 rounded-full object-cover shadow-medium"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Rating */}
                    <div className="flex justify-center md:justify-start space-x-1 mb-4">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial */}
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                      "{currentTestimonial.testimonial}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-foreground">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-primary font-semibold">
                        {currentTestimonial.role}
                      </p>
                      <p className="text-muted-foreground">
                        {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-medium hover:shadow-large text-primary p-3 rounded-full transition-smooth hover-scale"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-medium hover:shadow-large text-primary p-3 rounded-full transition-smooth hover-scale"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid (for larger screens) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-medium hover:shadow-large transition-smooth hover-lift"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-bold text-foreground">{testimonial.name}</h5>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-4">
                "{testimonial.testimonial}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;