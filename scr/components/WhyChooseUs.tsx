import { CheckCircle, Shield, Zap, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Πιστοποιημένη Ποιότητα",
      description: "Συνεργαζόμαστε με τους κορυφαίους κατασκευαστές παγκοσμίως",
    },
    {
      icon: Shield,
      title: "Εγγύηση & Αξιοπιστία",
      description: "Πλήρης εγγύηση σε όλα τα προϊόντα μας",
    },
    {
      icon: Zap,
      title: "Γρήγορη Εξυπηρέτηση",
      description: "Ταχεία ανταπόκριση",
    },
    {
      icon: Users,
      title: "Εξειδικευμένο Προσωπικό",
      description: "Πολυετή εμπειρία στον χώρο των αντλιών πετρελαίου",
    },
  ];

  return (
    <section className="pt-8 md:pt-10 lg:pt-12 pb-8 md:pb-12 lg:pb-16 relative overflow-hidden -mt-8 md:-mt-12 lg:-mt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-10 lg:mb-12 animate-fade-in mt-4 md:mt-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground font-display">
            Γιατί να μας επιλέξετε
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Προσφέρουμε ολοκληρωμένες λύσεις με τη μεγαλύτερη ποικιλία στην αγορά
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="gradient-card p-5 rounded-xl shadow-card hover:shadow-glow transition-smooth hover:scale-105 animate-fade-in text-center md:text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center md:justify-start">
                <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center shadow-glow">
                  <feature.icon className="text-primary-foreground" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground font-display">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
