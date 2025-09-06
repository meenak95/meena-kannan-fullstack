import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/meena-kannan', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/meenak95', icon: '🐙' },
    { name: 'Email', url: 'mailto:meena.kannan@example.com', icon: '📧' },
    { name: 'Twitter', url: 'https://twitter.com/meenakannan', icon: '🐦' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MK</span>
              </div>
              <span className="text-white font-semibold text-lg">Meena Kannan</span>
            </div>
            <p className="text-slate-300 text-sm max-w-xs">
              Lead Software Engineer passionate about building scalable applications and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-xl"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>📍 Singapore</p>
              <p>📧 meena.kannan@example.com</p>
              <p>📱 +65 1234 5678</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Meena Kannan. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Built with React & Tailwind CSS</span>
              <span>•</span>
              <span>Deployed on GitHub Pages</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
