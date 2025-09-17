import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import vayuMascot from "../assets/vayu-mascot.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Games", href: "/games" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Leaderboard", href: "#leaderboard" },
    { label: "Community", href: "#community" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                EcoQuest
              </span>
              <Leaf className="w-5 h-5 text-primary" />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              {item.href.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )}
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <div className="flex items-center gap-2 px-3 py-2 mb-4">
                <div className="flex items-center gap-2">
                  <img 
                    src={vayuMascot} 
                    alt="EcoQuest" 
                    className="w-8 h-8"
                  />
                  <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    EcoQuest
                  </span>
                </div>
              </div>
              
              <div className="px-3">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    {item.href.startsWith('#') ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-lg text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="text-lg text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}