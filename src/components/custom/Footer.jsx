import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaXTwitter, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: 'Accounting Book Keeping', href: '/services/accounting-bookkeeping' },
      { name: 'Recruitment Services', href: '/services/recruitment-services' },
      { name: 'Payroll Services', href: '/services/payroll-services' },
      { name: 'Product Support', href: '/services/product-support' },
      { name: 'Product Development', href: '/services/product-development' },
    ],
    company: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about/company' },
      { name: 'Career', href: '/about/career' },
      { name: 'Blogs', href: '/blogs' },
      { name: 'Contact Us', href: '/contact-us' },
    ],
    social: [
      { 
        name: 'LinkedIn', 
        href: 'https://linkedin.com',
        icon: <FaLinkedin className="w-5 h-5" />
      },
      { 
        name: 'Instagram', 
        href: 'https://instagram.com',
        icon: <FaInstagram className="w-5 h-5" />
      },
      { 
        name: 'Twitter', 
        href: 'https://twitter.com',
        icon: <FaXTwitter className="w-5 h-5" />
      },
    ],
    terms_condition: [
      { name: 'Privacy Policy', href: '/' },
      { name: 'Terms and Condition', href: '/' },
    ],
  };

  return (
    <footer className="bg-[#0a0a0a] text-gray-300 border-t border-gray-800/50">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 pt-16 pb-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo-forge.png" 
                alt="Logo" 
                width={160} 
                height={50} 
                className="invert brightness-200 contrast-[1.1] mix-blend-screen h-auto"
                style={{ height: 'auto' }}
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Transforming residential spaces with professional craftsmanship and innovative design solutions. 
            </p>
            <div className="flex gap-6 mt-2">
              {navigation.social.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={item.name}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <FaLocationDot className="w-5 h-5 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 mt-1 shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  123 Business Avenue, Suite 100<br />
                  Chicago, IL 60601, USA
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhone className="w-5 h-5 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 shrink-0" />
                <span className="text-sm text-gray-400">+1 (312) 555-0123</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="w-5 h-5 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 shrink-0" />
                <span className="text-sm text-gray-400">contact@forgehire.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className='text-gray-500 text-sm'>             
                © {currentYear} Forge Hire. All rights reserved. <span className='text-white'><Link href='https://luminatewebsol.com/ ' title='Luminate Web Solutions - Web Development Company' aria-label="Luminate Web Solutions" rel="noopener noreferrer" target="_blank">Luminate Web Solutions</Link></span>
                </p>
          </div>
          
          <div className="flex gap-8 text-xs font-medium uppercase tracking-wider">
            {navigation.terms_condition.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;