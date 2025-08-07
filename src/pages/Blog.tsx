import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Data Science Revolution: Are You Ready to Join?",
      excerpt: "Explore the growing demand for data science professionals and how to start your journey in this exciting field.",
      image: "/api/placeholder/400/250",
      author: "Admin",
      date: "September 24, 2024",
      category: "Data Science"
    },
    {
      id: 2,
      title: "Accelerate Your Career with Our Data Science Course",
      excerpt: "Learn how our comprehensive data science program can transform your career prospects in the tech industry.",
      image: "/api/placeholder/400/250",
      author: "Admin",
      date: "September 18, 2024",
      category: "Career"
    },
    {
      id: 3,
      title: "Transform Your Career with Data Science",
      excerpt: "Discover the key skills and knowledge needed to succeed in the rapidly evolving field of data science.",
      image: "/api/placeholder/400/250",
      author: "Admin",
      date: "September 17, 2024",
      category: "Education"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Latest IT Industry News & Insights | IAT Technologies</title>
        <meta name="description" content="Stay updated with latest IT industry trends, career tips, and educational insights from IAT Technologies blog." />
      </Helmet>

      <section className="bg-gradient-to-r from-primary to-orange-dark text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-orange-200">Latest insights from the IT industry</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-medium hover:shadow-large transition-smooth hover-lift overflow-hidden"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-smooth">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <button className="btn-primary">Read More</button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;