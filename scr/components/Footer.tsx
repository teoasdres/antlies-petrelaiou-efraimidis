import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import whatsappIcon from "@/assets/social/whatsapp.png";
import viberIcon from "@/assets/social/viber.png";
import messengerIcon from "@/assets/social/messenger.png";

const Footer = () => {
  return (
    <footer className="gradient-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 md:items-start gap-y-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="font-bold text-lg mb-4 text-foreground h-7 flex items-center">ΕΦΡΑΙΜΙΔΗΣ</h3>
            <p className="text-muted-foreground text-sm mb-4 max-w-full">
              Εξειδικευμένη εταιρεία στην πώληση αντλιών πετρελαίου.
              Αξιοπιστία, ποιότητα και εξαιρετική εξυπηρέτηση.
            </p>
            <div className="flex gap-1">
              <a
                href="https://wa.me/306937184549"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 hover:opacity-80 transition-smooth"
                aria-label="WhatsApp"
              >
                <img 
                  src={whatsappIcon} 
                  alt="WhatsApp" 
                  className="w-full h-full object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity max-w-[20px] max-h-[20px]"
                />
              </a>
              <a
                href="viber://chat?number=306937184549"
                className="flex items-center justify-center w-8 h-8 hover:opacity-80 transition-smooth"
                aria-label="Viber"
              >
                <img 
                  src={viberIcon} 
                  alt="Viber" 
                  className="w-full h-full object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity max-w-[20px] max-h-[20px]"
                />
              </a>
              <a
                href="https://m.me/your-page"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 hover:opacity-80 transition-smooth"
                aria-label="Messenger"
              >
                <img 
                  src={messengerIcon} 
                  alt="Messenger" 
                  className="w-full h-full object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity max-w-[20px] max-h-[20px]"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-delay md:ml-20">
            <h3 className="font-bold text-lg mb-4 text-foreground h-7 flex items-center">Σύνδεσμοι</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Αρχική
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Προϊόντα
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Επικοινωνία
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-delay">
            <h3 className="font-bold text-lg mb-4 text-foreground h-7 flex items-center">Επικοινωνία</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <a 
                  href="https://www.google.com/maps/place/%CE%91%CE%BD%CE%B1%CF%81%CF%81%CE%AC%CF%87%CE%B7+500+05,+%CE%95%CE%BB%CE%BB%CE%AC%CE%B4%CE%B5%CF%82/@40.4922702,21.5728402,15.75z/data=!4m6!3m5!1s0x1357620a029060ed:0x500bd2ce2bb18b0!8m2!3d40.4925406!4d21.5714154!16s%2Fm%2F04f5x97?hl=el-GR&entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth cursor-pointer"
                >
                  Αναρράχη, 500 05, Ελλάδα
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <a href="tel:+306937184549" className="hover:text-primary transition-smooth">
                  +30 693 718 4549
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <a href="mailto:vasilliosefremidis@gmail.com" className="hover:text-primary transition-smooth">
                  vasilliosefremidis@gmail.com
                </a>
              </li>
            </ul>
            <p className="text-muted-foreground text-sm mt-4">
              <strong>Ώρες λειτουργίας:</strong>
              <br />
              Δευ-Παρ: 08:00 - 18:00
              <br />
              Σάβ: 09:00 - 14:00
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Εφραιμίδης Αντλίες Πετρελαίου. Όλα τα νόμιμα δικαιώματα διατηρούνται.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

