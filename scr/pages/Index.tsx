import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="ΕΦΡΑΙΜΙΔΗΣ - Αντλίες Πετρελαίου Φορτηγών"
        description="Η κορυφαία εταιρεία αντλιών πετρελαίου φορτηγών. Προϊόντα Bosch, Delphi, Denso, Siemens. Πώληση, έλεγχος και συντήρηση με εγγύηση."
        keywords="Αντλίες πετρελαίου, φορτηγά, diesel pump, Bosch, Delphi, Denso, Siemens, MPEK PETRELAIOU, ANTLIES PETRELAIOU"
      />
      <Header />
      <Hero />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
