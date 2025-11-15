import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Search, Home, Package, Mail } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Αρχική", icon: Home },
    { path: "/products", label: "Προϊόντα", icon: Package },
    { path: "/contact", label: "Επικοινωνία", icon: Mail },
  ];

  // Golden ratio: φ = 1.618
  // Base spacing: 16px (1rem)
  // Golden ratio spacing: 16 * 1.618 ≈ 25.9px (1.618rem)
  // Using 1.618rem for major spacing, 1rem for base

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        scrolled 
          ? "border-b border-border/40" 
          : "border-b border-border/30"
      }`}
      style={{
        background: scrolled 
          ? 'linear-gradient(to bottom, hsla(222, 47%, 11%, 0.85), hsla(222, 47%, 10%, 0.85))'
          : 'linear-gradient(to bottom, hsla(222, 47%, 12%, 0.75), hsla(222, 47%, 11%, 0.75))',
        boxShadow: scrolled 
          ? '0 1px 3px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)' 
          : 'inset 0 1px 0 rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)'
      }}
    >
      <div className="container mx-auto px-5 lg:px-6">
        <div className="flex items-center justify-between" style={{ height: '4.5rem' }}>
          {/* Logo */}
          <Link 
            to="/" 
            className="flex flex-col"
          >
            <h1 className="font-sans font-bold text-lg md:text-xl tracking-normal text-foreground leading-tight">
              ΕΦΡΑΙΜΙΔΗΣ
            </h1>
            <span className="text-[10px] md:text-xs text-muted-foreground font-medium tracking-normal mt-0.5">
              Αντλίες Πετρελαίου
            </span>
          </Link>

          {/* Search Bar */}
          <form 
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-xs mx-6"
          >
            <div className="relative w-full">
              <input
                id="header-search"
                name="header-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Αναζήτηση..."
                className={`w-full h-9 px-3 pl-10 text-sm border-b transition-colors duration-200 ${
                  isSearchFocused
                    ? 'border-primary bg-transparent'
                    : 'border-border bg-transparent hover:border-border'
                } focus:outline-none text-foreground placeholder:text-muted-foreground/50`}
              />
              <Search 
                size={15} 
                className={`absolute left-2 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                  isSearchFocused ? 'text-primary' : 'text-muted-foreground/40'
                }`}
              />
            </div>
          </form>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-1.5 text-sm font-sans font-medium tracking-normal uppercase transition-all duration-200 group ${
                    location.pathname === link.path
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  <Icon 
                    size={16} 
                    className={`transition-all duration-200 ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-foreground/40 group-hover:text-foreground/70"
                    }`}
                  />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            
            {/* Call Button */}
            <a 
              href="tel:+306937184549"
              className="flex items-center gap-2.5 px-4 py-2 rounded-lg text-sm font-sans font-semibold tracking-normal transition-all duration-300 group relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(14, 165, 233, 0.12) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                boxShadow: '0 2px 8px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon with pulse animation */}
              <div className="relative">
                <Phone 
                  size={16} 
                  className="text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 animate-pulse" />
              </div>
              
              <span className="text-foreground relative z-10 group-hover:translate-x-0.5 transition-transform duration-300">
                Καλέστε μας
              </span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border pt-4 pb-4">
            <nav className="space-y-3">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    id="header-search-mobile"
                    name="header-search-mobile"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Αναζήτηση..."
                    className="w-full h-9 px-3 pl-10 text-sm border-b border-border bg-transparent focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground/50 transition-colors duration-200"
                  />
                  <Search 
                    size={15} 
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground/40"
                  />
                </div>
              </form>
              
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-2 text-sm font-sans font-medium uppercase tracking-normal py-2 transition-colors ${
                      location.pathname === link.path 
                        ? "text-foreground" 
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    <Icon size={16} className={location.pathname === link.path ? "text-primary" : "text-foreground/40"} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              
              <a 
                href="tel:+306937184549"
                className="flex items-center gap-2.5 px-4 py-3 rounded-lg text-sm font-sans font-semibold tracking-normal transition-all duration-300 relative overflow-hidden mt-2 group"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(14, 165, 233, 0.12) 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                  boxShadow: '0 2px 8px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <Phone 
                    size={18} 
                    className="text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 animate-pulse" />
                </div>
                
                <span className="text-foreground relative z-10 group-hover:translate-x-0.5 transition-transform duration-300">
                  Καλέστε μας
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
