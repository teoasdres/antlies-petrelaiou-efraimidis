import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες").max(100),
  email: z.string().email("Μη έγκυρη διεύθυνση email").max(255),
  phone: z.string().min(10, "Μη έγκυρος αριθμός τηλεφώνου").max(20),
  message: z.string().min(10, "Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form data:", data);
    toast.success("Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε σύντομα μαζί σας.");
    reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Διεύθυνση",
      content: "Αναρράχη, 500 05, Ελλάδα",
      link: "https://www.google.com/maps/place/%CE%91%CE%BD%CE%B1%CF%81%CF%81%CE%AC%CF%87%CE%B7+500+05,+%CE%95%CE%BB%CE%BB%CE%AC%CE%B4%CE%B5%CF%82/@40.4922702,21.5728402,15.75z/data=!4m6!3m5!1s0x1357620a029060ed:0x500bd2ce2bb18b0!8m2!3d40.4925406!4d21.5714154!16s%2Fm%2F04f5x97?hl=el-GR&entry=ttu",
    },
    {
      icon: Phone,
      title: "Τηλέφωνο",
      content: "+30 693 718 4549",
      link: "tel:+306937184549",
    },
    {
      icon: Mail,
      title: "Email",
      content: "vasilliosefremidis@gmail.com",
      link: "mailto:vasilliosefremidis@gmail.com",
    },
    {
      icon: Clock,
      title: "Ώρες Λειτουργίας",
      content: "Δευ-Παρ: 08:00-18:00, Σάβ: 09:00-14:00",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Επικοινωνία - ΕΦΡΑΙΜΙΔΗΣ"
        description="Επικοινωνήστε μαζί μας για πληροφορίες σχετικά με αντλίες πετρελαίου. Τηλέφωνο: +30 693 718 4549"
        keywords="επικοινωνία, ΕΦΡΑΙΜΙΔΗΣ, τηλέφωνο, αντλίες πετρελαίου, contact"
        url="/contact"
      />
      <Header />

      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground font-display mx-auto text-center">
              Επικοινωνήστε μαζί μας
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center">
              Είμαστε εδώ για να σας εξυπηρετήσουμε. Επικοινωνήστε μαζί μας για οποιαδήποτε
              απορία ή προσφορά.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="gradient-card p-8 animate-slide-in-left">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Στείλτε μας μήνυμα</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold mb-4 text-foreground">
                    Ονοματεπώνυμο *
                  </label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Το όνομά σας"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-lg font-medium mt-3.5 animate-fade-in leading-relaxed">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold mb-4 text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="email@example.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-lg font-medium mt-3.5 animate-fade-in leading-relaxed">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-semibold mb-4 text-foreground">
                    Τηλέφωνο *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="+30 XXX XXX XXXX"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-lg font-medium mt-3.5 animate-fade-in leading-relaxed">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold mb-4 text-foreground">
                    Μήνυμα *
                  </label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Το μήνυμά σας..."
                    rows={7}
                    className={`py-4 px-5 ${errors.message ? "border-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-destructive text-lg font-medium mt-3.5 animate-fade-in leading-relaxed">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Αποστολή..." : "Αποστολή Μηνύματος"}
                </Button>
              </form>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="gradient-card p-6 hover:shadow-glow transition-smooth"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-foreground">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-smooth cursor-pointer"
                            {...(info.icon === MapPin ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Google Maps */}
              <Card className="gradient-card overflow-hidden h-64 relative">
                {!isMapLoaded && (
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/90 flex items-center justify-center z-10"
                    style={{
                      opacity: isMapLoaded ? 0 : 1,
                      transition: 'opacity 0.6s ease-in-out'
                    }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mx-auto mb-3 animate-pulse" style={{ animationDuration: '2s' }}>
                        <MapPin className="text-primary-foreground" size={24} />
                      </div>
                      <p className="text-muted-foreground text-sm">Φόρτωση χάρτη...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://www.google.com/maps?q=Αναρράχη+500+05,+Ελλάδα&hl=el&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ 
                    border: 0,
                    opacity: isMapLoaded ? 1 : 0,
                    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isMapLoaded ? 'scale(1)' : 'scale(0.98)',
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ΕΥΦΡΑΙΜΙΔΗΣ - Αναρράχη"
                  onLoad={() => setIsMapLoaded(true)}
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
