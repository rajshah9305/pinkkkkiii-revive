import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

const footerLinks = [
  'About Us',
  'Our Process', 
  'Strains',
  'Blog',
  'Contact'
];

const Footer = () => {
  return (
    <footer className="bg-deep-purple py-10 px-5 text-center border-t border-white/10">
      <div className="flex justify-center gap-5 mb-5">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--glass-bg))] text-foreground text-xl transition-[var(--transition-smooth)] hover:-translate-y-1 hover:bg-ethereal-pink hover:shadow-[0_0_20px_hsl(var(--ethereal-pink))]"
              aria-label={social.label}
            >
              <IconComponent size={20} />
            </a>
          );
        })}
      </div>
      
      <div className="flex justify-center gap-8 mb-5 flex-wrap">
        {footerLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-warm-gray no-underline transition-[var(--transition-smooth)] hover:text-ethereal-pink"
          >
            {link}
          </a>
        ))}
      </div>
      
      <p className="text-warm-gray text-sm opacity-70">
        © 2023 Ethereal Bloom. All rights reserved. For medicinal use only where permitted.
      </p>
    </footer>
  );
};

export default Footer;