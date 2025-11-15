import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import boschLogo from "@/assets/logo/bosch-logo.png";
import delphiLogo from "@/assets/logo/delphi-logo.png";
import densoLogo from "@/assets/logo/desno-logo.png";
import siemensLogo from "@/assets/logo/siemens-logo.png";
import ivecoLogo from "@/assets/logo/iveco-logo.png";
import bmwLogo from "@/assets/logo/BMW-Logo.png";
import fiatLogo from "@/assets/logo/fiat-logo.png";
import isuzuLogo from "@/assets/logo/isuzu-logo.png";
import fordLogo from "@/assets/logo/ford-logo.png";
import hyundaiLogo from "@/assets/logo/hyundai-logo.png";
import daihatsuLogo from "@/assets/logo/daihatsu-logo.png";
import mazdaLogo from "@/assets/logo/mazda-logo.png";
import mercedesLogo from "@/assets/logo/mercedes-logo.png";
import mitsubishiLogo from "@/assets/logo/mitsubishi-logo.png";
import nissanLogo from "@/assets/logo/nissan-logo.png";
import opelLogo from "@/assets/logo/opel-logo.png";
import volvoLogo from "@/assets/logo/volvo-logo.png";

const brands = [
  { logo: mercedesLogo, name: "Mercedes" },
  { logo: boschLogo, name: "Bosch" },
  { logo: fordLogo, name: "Ford" },
  { logo: delphiLogo, name: "Delphi" },
  { logo: mazdaLogo, name: "Mazda" },
  { logo: hyundaiLogo, name: "Hyundai" },
  { logo: daihatsuLogo, name: "Daihatsu" },
  { logo: bmwLogo, name: "BMW" },
  { logo: densoLogo, name: "Denso" },
  { logo: siemensLogo, name: "Siemens" },
  { logo: ivecoLogo, name: "Iveco" },
  { logo: fiatLogo, name: "Fiat" },
  { logo: isuzuLogo, name: "Isuzu" },
  { logo: mitsubishiLogo, name: "Mitsubishi" },
  { logo: nissanLogo, name: "Nissan" },
  { logo: opelLogo, name: "Opel" },
  { logo: volvoLogo, name: "Volvo" },
];

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Εργαστήριο αντλιών πετρελαίου φορτηγών - ΕΦΡΑΙΜΙΔΗΣ"
          title="Εργαστήριο επισκευής και συντήρησης αντλιών πετρελαίου φορτηγών"
          className="w-full h-full object-cover"
          style={{ objectPosition: "right 90%" }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 md:via-background/85 to-transparent" />
        <div className="absolute inset-0 bg-black/60 md:bg-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-8 pb-8 md:pt-20 md:pb-16">
        <div className="max-w-[38rem] md:max-w-[50rem] lg:max-w-[55rem] animate-fade-in ml-0 md:ml-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight font-display">
            <span style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.6)', WebkitTextStroke: '0.5px rgba(255,255,255,0.1)', color: 'hsl(210 40% 98%)' }}>
              Η εξειδικευμένη εταιρεία πώλησης
            </span>{" "}
            <span className="block">
              <span className="gradient-text">αντλιών πετρελαίου</span>{" "}
              <span style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.6)', WebkitTextStroke: '0.5px rgba(255,255,255,0.1)', color: 'hsl(210 40% 98%)' }}>φορτηγών</span>
            </span>
          </h1>
          <p 
            className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 animate-fade-in-delay leading-relaxed max-w-[90%] md:max-w-[85%] font-medium"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.7)', color: 'rgba(255,255,255,0.95)' }}
          >
          Προσφέρουμε ολοκληρωμένες, αξιόπιστες και τεχνικά προηγμένες λύσεις,
          με προϊόντα υψηλής ποιότητας από κορυφαίους διεθνείς κατασκευαστές όπως
          Bosch, Delphi, Denso και Siemens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in mb-10 md:mb-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">
                Δες τα Προϊόντα μας
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+306937184549" className="flex items-center">
                <Phone className="mr-2" size={20} />
                Καλέστε μας
              </a>
            </Button>
          </div>

          {/* Brand Logos - Infinite Scroll */}
          <div className="flex flex-col gap-4 animate-fade-in-delay -mx-4 mt-8 md:mt-10">
            <p className="text-sm md:text-base text-muted-foreground px-4 font-semibold">Κορυφαίοι Κατασκευαστές:</p>
            <div className="relative h-52 md:h-64 w-[calc(100%+5rem)] overflow-hidden" style={{ contain: 'layout style paint' }}>
              <div className="flex gap-8 md:gap-10 animate-scroll" style={{ backfaceVisibility: 'hidden', perspective: '1000px', transform: 'translate3d(0, 0, 0)', WebkitTransform: 'translate3d(0, 0, 0)' }}>
                {[...brands, ...brands, ...brands].map((brand, index) => (
                  <div
                    key={index}
                    className="h-52 md:h-64 w-36 md:w-44 flex-shrink-0 object-contain opacity-85 hover:opacity-100 transition-all duration-300 grayscale-[0.2] brightness-90 hover:brightness-110 hover:grayscale-0"
                    style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0, 0, 0)', WebkitTransform: 'translate3d(0, 0, 0)' }}
                  >
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} - Κατασκευαστής αντλιών πετρελαίου`}
                      title={`${brand.name} - Κορυφαίος κατασκευαστής αντλιών πετρελαίου`}
                      className="h-full w-full object-contain" 
                      style={{ transform: 'translate3d(0, 0, 0)', WebkitTransform: 'translate3d(0, 0, 0)' }} 
                      loading="lazy" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
