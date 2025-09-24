import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Challenges", href: "#challenges" },
    { label: "Affiliate", href: "#affiliate" },
    { label: "FAQ", href: "#faq" },
    { label: "About", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
      {/* Announcement Bar */}
      <div className="bg-dark-bg text-primary-glow text-sm py-2 px-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          ✅ 10K challenge from $27! • 🚀 Skip The Challenge With Our Instant Accounts! • 🎯 Trade with MetaTrader 5 (MT5) • 
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-glow rounded-lg flex items-center justify-center">
              <span className="text-dark-bg font-bold text-xl">E</span>
            </div>
            <span className="text-foreground font-bold text-xl">EQUITYEDGE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary-glow transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="nav" size="sm">
              Start Challenge
            </Button>
            <Button variant="cta" size="sm">
              Client Area
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary-glow transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="nav" size="sm">
                  Start Challenge
                </Button>
                <Button variant="cta" size="sm">
                  Client Area
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;