import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const courses = [
    'Data Science',
    'Full Stack Development',
    'Software Testing',
    'Data Analytics',
    'Ethical Hacking & Cyber Security',
    'Web Development',
    'AWS DevOps',
    'Azure DevOps',
    'Oracle Database'
  ];

  const quickLinks = [
    { name: 'Why IAT Technologies', path: '/about' },
    { name: 'Our Success Journeys', path: '/placements' },
    { name: 'Hire from Us', path: '/contact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Terms & Conditions', path: '/terms' }
  ];

  const branches = [
    {
      name: 'Chennai – Guindy Branch',
      address: 'B-22, SIDCO Industrial Estate, Guindy, Chennai - 600032',
      phone: '+91 73387 14969',
      email: 'info@iattechnologies.com'
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
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">IAT</span>
              </div>
              <h3 className="text-xl font-bold">IAT Technologies</h3>
            </div>
            <p className="text-gray-300">
              Leading IT training and placement company dedicated to empowering individuals with
              skills required to excel in today's digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">IAT Technologies</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trending Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Trending Courses</h4>
            <ul className="space-y-2">
              {courses.slice(0, 6).map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-gray-300 hover:text-primary transition-smooth"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Chennai – Guindy Branch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-gray-300">
                  B-22, SIDCO Industrial Estate, Guindy, Chennai - 600032
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+91 73387 14969</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">info@iattechnologies.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* All Branches */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-6 text-center">Our Branches</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch) => (
              <div key={branch.name} className="text-center space-y-2">
                <h5 className="font-semibold text-primary">{branch.name}</h5>
                <p className="text-sm text-gray-300">{branch.address}</p>
                <p className="text-sm text-gray-300">{branch.phone}</p>
                <p className="text-sm text-gray-300">{branch.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            ©{currentYear} IAT Technologies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;