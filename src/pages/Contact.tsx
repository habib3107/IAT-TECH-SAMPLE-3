import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const branches = [
    {
      name: 'Chennai – Guindy Branch (Head Office)',
      address: 'B-22, SIDCO Industrial Estate, Guindy, Chennai - 600032',
      phone: '+91 73387 14969',
      email: 'info@iattechnologies.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9636789!2d80.2100632!3d13.0107266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679008dfdc93%3A0x46bee1be85dbe37c!2sSecond%20Floor%2C%20B-22%2C%20Guindy%20Industrial%20Estate%2C%20SIDCO%20Industrial%20Estate%2C%20Guindy%2C%20Chennai%2C%20Tamil%20Nadu%20600032!5e0!3m2!1sen!2sin!4v1647258740000!5m2!1sen!2sin'
    },
    {
      name: 'Chennai – Anna Nagar Branch',
      address: 'W-4, 5th Main Road, Anna Nagar, Chennai - 600040',
      phone: '+91 94442 27273',
      email: 'admin@kmias.com'
    },
    {
      name: 'Madurai Branch',
      address: 'Vikashni Building, Plot 760, West 80 Feet Road, Anna Nagar, Madurai - 625020',
      phone: '+91 94442 27273',
      email: 'admin@kmias.com'
    },
    {
      name: 'Trichy Branch',
      address: 'No.8, Star Avenue, Old Karur Road, Mela Chinthamani, Trichy - 620003',
      phone: '+91 94442 27273',
      email: 'admin@kmias.com'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact IAT Technologies - Get in Touch for IT Training Courses</title>
        <meta 
          name="description" 
          content="Contact IAT Technologies for IT training inquiries. Multiple locations in Chennai, Madurai, and Trichy. Call +91 73387 14969 or email info@iattechnologies.com" 
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-orange-200 max-w-3xl mx-auto">
              Get in touch with us to start your IT career journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Contact Information */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us at any of our convenient locations across Tamil Nadu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-medium overflow-hidden"
            >
              <iframe
                src={branches[0].mapUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IAT Technologies Guindy Branch Location"
              />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-medium">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  Office Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-medium">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+91 73387 14969</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>info@iattechnologies.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <span>B-22, SIDCO Industrial Estate, Guindy, Chennai - 600032</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Branches */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Branches
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-light p-6 rounded-xl hover:shadow-medium transition-smooth"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {branch.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{branch.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{branch.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{branch.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;