import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < 2374) {
            return prev + 50;
          }
          return 2374;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section className="bg-gray-light section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                className="text-6xl md:text-7xl font-bold text-primary mb-4"
              >
                {count.toLocaleString()}
                <span className="text-4xl">+</span>
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Students Placed
              </h3>
              <div className="flex justify-center lg:justify-start">
                <img 
                  src="/api/placeholder/100/20" 
                  alt="Decorative dots" 
                  className="opacity-60"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <img 
                src="/api/placeholder/500/400" 
                alt="IT Training and placement" 
                className="rounded-lg shadow-medium w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg shadow-orange">
                <div className="text-2xl font-bold">1,999+</div>
                <div className="text-sm">Happy Students</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;