import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Crypto Edge", href: "#crypto" },
    { label: "FAQ", href: "#faq" },
    { label: "About", href: "#about" }
  ];

  const secondaryLinks = [
    { label: "Mindset", href: "#mindset" },
    { label: "Pricing", href: "#pricing" },
    { label: "Affiliate", href: "#affiliate" }
  ];

  return (
    <footer className="bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-dark-bg font-bold text-lg">E</span>
              </div>
              <span className="text-white font-bold text-xl">EQUITYEDGE</span>
            </div>
          </div>

          {/* Quicklinks */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quicklinks</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="space-y-4">
                {secondaryLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Subscribe to our newsletter</h3>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 rounded-l-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <Button className="bg-primary hover:bg-primary/90 text-dark-bg px-6 py-3 rounded-r-lg rounded-l-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </Button>
            </div>
            
            <div>
              <p className="text-white font-semibold mb-4">Follow us on:</p>
              <div className="flex space-x-4">
                <a href="#discord" className="text-gray-300 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                  </svg>
                </a>
                <a href="#instagram" className="text-gray-300 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.793L4.27 17.55l-1.297-1.297l1.355-1.163C3.555 14.613 3.555 13.937 3.555 13.937s0-.677.773-1.154L2.973 11.52l1.297-1.297l1.163 1.355c.477-.773 1.154-.773 1.154-.773s.677 0 1.154.773l1.163-1.355l1.297 1.297l-1.355 1.163c.773.477.773 1.154.773 1.154s0 .677-.773 1.154l1.355 1.163l-1.297 1.297l-1.163-1.355c-.477.773-1.154.773-1.154.773s-.677 0-1.154-.773l-1.163 1.355l-1.297-1.297l1.355-1.163c-.568-1.063-1.719-1.793-3.016-1.793z"/>
                  </svg>
                </a>
                <a href="#twitter" className="text-gray-300 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#tiktok" className="text-gray-300 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Legal Information */}
          <div className="mb-8">
            <div className="text-sm text-gray-300 mb-4">
              © 2025 Equity Edge Ltd All rights reserved.<br />
              Equity Edge Ltd is registered in Saint Lucia, Company Number 2025-00306.<br />
              Registered Office: Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm mb-8">
              <a href="#terms" className="text-gray-300 hover:text-primary transition-colors">
                Terms & Conditions
              </a>
              <span className="text-gray-500">|</span>
              <a href="#cookie" className="text-gray-300 hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <span className="text-gray-500">|</span>
              <a href="#privacy" className="text-gray-300 hover:text-primary transition-colors">
                Privacy policy
              </a>
              <span className="text-gray-500">|</span>
              <a href="#refunds" className="text-gray-300 hover:text-primary transition-colors">
                Refunds
              </a>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="space-y-6 text-xs text-gray-400">
            <div>
              <h4 className="text-white font-semibold mb-2">Disclaimer</h4>
            </div>
            
            <div>
              <h5 className="text-gray-300 font-semibold mb-2">Jurisdictional Disclaimer</h5>
              <p>
                Equity Edge Ltd does not offer services, MetaQuotes services, or access to MetaTrader 5 (MT5) to residents of certain jurisdictions, including but not limited to: Canada, 
                Crimea, Cuba, Cyprus, Iran, Malaysia, North Korea, Sudan, Syria, and the United States.
              </p>
            </div>

            <div>
              <h5 className="text-gray-300 font-semibold mb-2">General Risk Disclaimer</h5>
              <p>
                Nothing on this website or in our services constitutes a solicitation, recommendation, endorsement, or offer to purchase or sell any financial instruments by Equity Edge Ltd, its 
                employees, contractors, affiliates, or partners. You are solely responsible for evaluating the potential risks and benefits associated with using any content or services offered on 
                this site.
              </p>
            </div>

            <div>
              <p>
                All forms of trading involve substantial risk. Decisions made based on any content provided by Equity Edge Ltd are made entirely at your own risk. Information is provided "as is" 
                without any warranties, express or implied, including but not limited to accuracy, completeness, or fitness for a particular purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;