import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Search, ArrowUpDown, BarChart3, Phone } from "lucide-react";
import { inventory, categories } from "@/data/inventory";
import { getBrandLogo } from "@/utils/brandLogos";
import { getProductImageSync } from "@/utils/productImages";

// Custom order for categories
const categoryOrder = [
  "ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ",
  "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ",
  "ΑΝΤΛΙΕΣ ΜΕ ΜΠΕΚ",
  "ΑΝΤΛΙΕΣ ΥΨΗΛΗΣ ΠΙΕΣΗΣ",
];

// Category to Greeklish mapping for SEO
const categoryGreeklish: Record<string, string> = {
  "ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ": "MPEK PETRELAIOU / Diesel Injectors",
  "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ": "ANTLIES PETRELAIOU / Diesel Pumps",
  "ΑΝΤΛΙΕΣ ΜΕ ΜΠΕΚ": "ANTLIES ME MPEK / Pumps with Injectors",
  "ΑΝΤΛΙΕΣ ΥΨΗΛΗΣ ΠΙΕΣΗΣ": "ANTLIES YPSILIS PIESIS / High Pressure Pumps",
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"brand" | "code">("brand");
  const [selectedProduct, setSelectedProduct] = useState<{ brand: string; productCode: number | null } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Read search query from URL on mount
  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      setQuery(decodeURIComponent(searchQuery));
      // Clear the search param from URL after reading it
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  // Sort categories according to custom order
  const sortedCategories = useMemo(() => {
    return categoryOrder.filter((cat) => categories.includes(cat));
  }, [categories]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let data = inventory.filter(
      (i) =>
        (selectedCategory === "all" || i.category === selectedCategory) &&
        (q.length === 0 || i.brand.toLowerCase().includes(q))
    );
    data = [...data].sort((a, b) => {
      if (sortBy === "brand") {
        return a.brand.localeCompare(b.brand, "el", { sensitivity: "base" });
      }
      // Sort by code: descending (most first, then least), null values last
      if (a.productCode === null && b.productCode === null) return 0;
      if (a.productCode === null) return 1;
      if (b.productCode === null) return -1;
      return b.productCode - a.productCode; // Descending order (highest first)
    });
    return data;
  }, [query, selectedCategory, sortBy]);

  const totalItems = filtered.length;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Κατάλογος Προϊόντων - Αντλίες Πετρελαίου"
        description="Κατάλογος όλων των διαθέσιμων brands και κωδικών αντλιών πετρελαίου. ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ, ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ, ΑΝΤΛΙΕΣ ΜΕ ΜΠΕΚ, ΑΝΤΛΙΕΣ ΥΨΗΛΗΣ ΠΙΕΣΗΣ."
        keywords="κατάλογος προϊόντων, αντλίες πετρελαίου, MPEK PETRELAIOU, ANTLIES PETRELAIOU, diesel pumps catalog, diesel injectors"
        url="/products"
      />
      <Header />

      {/* Hero */}
      <section className="pt-24 md:pt-28 pb-12 md:pb-16 px-4">
        <div className="container mx-auto text-center animate-fade-in max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-foreground tracking-tight leading-tight">
            Κατάλογος Προϊόντων
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Αναζητήστε στον κατάλογο όλα τα διαθέσιμα brands και κωδικούς ανά κατηγορία.
          </p>
        </div>
      </section>

      {/* Filters + List */}
      <section className="pb-16 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Category Selection */}
          <div className="mb-6 md:mb-8 animate-fade-in">
            <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
                className="h-10 md:h-11 px-4 md:px-5 text-sm md:text-base font-medium transition-all duration-200 flex-shrink-0 rounded-lg"
              >
                Όλες
              </Button>
              {sortedCategories.map((c, index) => (
                <Button
                  key={c}
                  variant={selectedCategory === c ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(c)}
                  className="h-10 md:h-11 px-4 md:px-5 text-sm md:text-base font-medium transition-all duration-200 flex-shrink-0 rounded-lg hover:scale-105"
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mb-8 md:mb-10 animate-fade-in">
            <Card className="p-4 md:p-5 border-border/40 bg-card/40 backdrop-blur-sm rounded-xl shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                {/* Search */}
                <div className="relative flex-1">
                  <input
                    id="product-search"
                    name="product-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Αναζήτηση brand..."
                    className="w-full h-11 md:h-12 rounded-lg border border-input/50 bg-background/50 px-10 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
                  />
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/70" size={18} />
                </div>

                {/* Sort Buttons & Results */}
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-3">
                  <div className="flex gap-2.5">
                    <Button
                      variant={sortBy === "brand" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortBy("brand")}
                      className="h-11 px-4 text-sm font-medium rounded-lg transition-all duration-200"
                    >
                      <ArrowUpDown size={16} className="mr-2" />
                      <span>Brand</span>
                    </Button>
                    <Button
                      variant={sortBy === "code" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortBy("code")}
                      className="h-11 px-4 text-sm font-medium rounded-lg transition-all duration-200"
                    >
                      <BarChart3 size={16} className="mr-2" />
                      <span>Κωδικοί</span>
                    </Button>
                  </div>

                  {/* Results Count */}
                  <div className="text-sm md:text-base text-muted-foreground text-center md:text-right md:ml-4 font-medium">
                    {totalItems} {totalItems === 1 ? "αποτέλεσμα" : "αποτελέσματα"}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Product Cards by Category */}
          <div className="space-y-12 md:space-y-16">
            {(selectedCategory === "all" ? sortedCategories : [selectedCategory]).map((cat) => {
              const rows = filtered.filter((i) => i.category === cat);
              if (rows.length === 0) return null;

              return (
                <div key={cat} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-baseline justify-between px-1 mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight font-sans">
                      {cat}
                    </h3>
                    <Badge variant="secondary" className="text-sm md:text-base font-semibold px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-muted/40 border border-border/30 text-foreground/90 shadow-sm">
                      {rows.length} {rows.length === 1 ? "Brand" : "Brands"}
                    </Badge>
                  </div>

                  {/* Product Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
                    {rows.map((row, idx) => {
                      const logo = getBrandLogo(row.brand);
                      const { image: productImage, isProductImage } = getProductImageSync(row.brand, cat, idx);
                      return (
                        <Card
                          key={`${row.brand}-${cat}-${idx}`}
                          className="group flex flex-col hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out border-border/40 overflow-hidden hover:border-primary/50 bg-card/70 backdrop-blur-sm rounded-2xl"
                          style={{ animationDelay: `${idx * 0.02}s` }}
                        >
                          {/* Product Image */}
                          <div className="relative w-full aspect-square bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 flex items-center justify-center p-4 md:p-6 border-b border-border/20 overflow-hidden">
                            {/* Modern geometric pattern overlay */}
                            <div className="absolute inset-0 opacity-10">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.3),transparent_50%)]"></div>
                              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(59,130,246,0.1)_50%,transparent_70%)]"></div>
                            </div>
                            {/* Content wrapper */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                              {(() => {
                                const isMpekPetrelaiou = cat === "ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ";
                                const isAntliesPetrelaiou = cat === "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ";
                                const isAntliesMeMpek = cat === "ΑΝΤΛΙΕΣ ΜΕ ΜΠΕΚ";
                                const isVDO = row.brand.toUpperCase() === "VDO";
                                const isDENSO = row.brand.toUpperCase() === "DENSO";
                                const isDelphi = row.brand.toUpperCase() === "DELPHI";
                                const isBosch = row.brand.toUpperCase() === "BOSCH";
                                const isBarkas = row.brand.toUpperCase() === "BARKAS";
                                const isBaudouin = row.brand.toUpperCase() === "BAUDOUIN";
                                const isCase = row.brand.toUpperCase() === "CASE";
                                const isBMW = row.brand.toUpperCase() === "BMW";
                                const isChryslerVM = row.brand.toUpperCase() === "CHRYSLER/VM";
                                const isCummins = row.brand.toUpperCase() === "CUMMINS";
                                const isRotodiesel = row.brand.toUpperCase() === "ROTODIESEL";
                                const isDorman = row.brand.toUpperCase() === "DORMAN";
                                const isFiat = row.brand.toUpperCase() === "FIAT" || row.brand.toUpperCase() === "FIAT/IVECO" || row.brand.toUpperCase() === "IVECO/FIAT";
                                const isFiatOM = row.brand.toUpperCase() === "FIAT OM";
                                const isIveco = row.brand.toUpperCase() === "IVECO";
                                const isKHD = row.brand.toUpperCase() === "KHD";
                                const isKHDMWN = row.brand.toUpperCase() === "KHD/ MWN" || row.brand.toUpperCase() === "KHD/MWN";
                                const isMercedesBenz = row.brand.toUpperCase() === "MERCEDES BENZ" || row.brand.toUpperCase() === "MERCEDES-BENZ";
                                const isNissan = row.brand.toUpperCase() === "NISSAN";
                                const isToyota = row.brand.toUpperCase() === "TOYOTA";
                                const isSteyr = row.brand.toUpperCase() === "STEYR";
                                const isStanadyne = row.brand.toUpperCase() === "STANADYNE";
                                const isVEB = row.brand.toUpperCase().includes("VEB-EINSPRITZGERAETEWERK") || row.brand.toUpperCase().includes("EINSPRITZGERAETEWERK") || row.brand.toUpperCase().includes("AKEN");
                                
                                let sizeClass = "w-[92%] h-[92%]";
                                
                                if (isDelphi && isAntliesMeMpek) {
                                  sizeClass = "w-[115%] h-[115%]";
                                } else if (isDENSO && isMpekPetrelaiou) {
                                  sizeClass = "w-[115%] h-[115%]";
                                } else if (isBarkas && isAntliesPetrelaiou) {
                                  sizeClass = "w-[160%] h-[160%]";
                                } else if (isBaudouin && isAntliesPetrelaiou) {
                                  sizeClass = "w-[140%] h-[140%]";
                                } else if (isBosch && isAntliesPetrelaiou) {
                                  sizeClass = "w-[100%] h-[100%]";
                                } else if (isBosch && isAntliesMeMpek) {
                                  sizeClass = "w-[100%] h-[100%]";
                                } else if (isCase && isAntliesPetrelaiou) {
                                  sizeClass = "w-[130%] h-[130%]";
                                } else if (isChryslerVM && isAntliesPetrelaiou) {
                                  sizeClass = "w-[120%] h-[120%]";
                                } else if (isRotodiesel && isAntliesPetrelaiou) {
                                  sizeClass = "w-[120%] h-[120%]";
                                } else if (isDorman && isAntliesPetrelaiou) {
                                  sizeClass = "w-[135%] h-[135%]";
                                } else if (isFiat && isAntliesPetrelaiou) {
                                  sizeClass = "w-[120%] h-[120%]";
                                } else if (isFiatOM && isAntliesPetrelaiou) {
                                  sizeClass = "w-[120%] h-[120%]";
                                } else if (isBMW && isAntliesPetrelaiou) {
                                  sizeClass = "w-[75%] h-[75%]";
                                } else if (isNissan && isAntliesPetrelaiou) {
                                  sizeClass = "w-[80%] h-[80%]";
                                } else if (isToyota && isAntliesPetrelaiou) {
                                  sizeClass = "w-[80%] h-[80%]";
                                } else if (isIveco && isAntliesPetrelaiou) {
                                  sizeClass = "w-[75%] h-[75%]";
                                } else if (isMercedesBenz && isAntliesPetrelaiou) {
                                  sizeClass = "w-[105%] h-[105%]";
                                } else if (isKHDMWN && isAntliesPetrelaiou) {
                                  sizeClass = "w-[100%] h-[100%]";
                                } else if (isKHD && isAntliesPetrelaiou) {
                                  sizeClass = "w-[90%] h-[90%]";
                                } else if (isSteyr && isAntliesPetrelaiou) {
                                  sizeClass = "w-[110%] h-[110%]";
                                } else if (isStanadyne && isAntliesPetrelaiou) {
                                  sizeClass = "w-[110%] h-[110%]";
                                } else if (isVDO) {
                                  sizeClass = "w-[110%] h-[110%]";
                                } else if (isDENSO) {
                                  sizeClass = "w-[99%] h-[99%]";
                                } else if (isAntliesMeMpek) {
                                  sizeClass = "w-[99%] h-[99%]";
                                } else if (isMpekPetrelaiou) {
                                  sizeClass = "w-[96%] h-[96%]";
                                }
                                
                                const catGreeklish = categoryGreeklish[cat] || cat;
                                const altText = `${row.brand} - ${cat} / ${catGreeklish}${row.productCode ? ` (Code: ${row.productCode})` : ''}`;
                                const titleText = `${row.brand} antlia petrelaiou - ${cat} / ${catGreeklish}${row.productCode ? ` | Kodikos: ${row.productCode}` : ''}`;
                                
                                return isProductImage ? (
                                  // Use product image from category folder if available
                                  <img
                                    src={productImage}
                                    alt={altText}
                                    title={titleText}
                                    className={`${sizeClass} object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl`}
                                    style={
                                      isCummins && isAntliesPetrelaiou 
                                        ? { transform: "translateY(7%)" } 
                                        : isVEB && isAntliesPetrelaiou 
                                        ? { transform: "translateY(7%)" } 
                                        : undefined
                                    }
                                    loading="lazy"
                                  />
                                ) : logo ? (
                                  // Fallback to logo if no product image
                                  <img
                                    src={logo}
                                    alt={altText}
                                    title={titleText}
                                    className={`${sizeClass} object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl`}
                                    loading="lazy"
                                  />
                                ) : (
                                  // Final fallback to placeholder
                                  <img
                                    src={productImage}
                                    alt={altText}
                                    title={titleText}
                                    className={`${sizeClass} object-contain group-hover:scale-110 transition-transform duration-300 opacity-95 drop-shadow-2xl`}
                                    loading="lazy"
                                  />
                                );
                              })()}
                            </div>
                          </div>

                          {/* Product Info */}
                          <div className="flex flex-col flex-1 p-5 md:p-6 space-y-4">
                            {/* Brand Name */}
                            <div className="text-center min-h-[4rem] flex items-center justify-center">
                              <h4 className="font-bold text-lg md:text-xl text-foreground leading-tight tracking-tight">
                                {row.brand}
                              </h4>
                            </div>

                            {/* Product Code */}
                            {row.productCode !== null && (
                              <div className="text-center">
                                <span className="inline-flex items-baseline gap-1.5 px-2.5 py-1.5 rounded-md bg-muted/30 border border-border/20 text-xs">
                                  <span className="text-muted-foreground/70 font-medium uppercase tracking-wide">Κωδικοί</span>
                                  <span className="font-mono font-semibold text-foreground text-sm">{row.productCode}</span>
                                </span>
                              </div>
                            )}
                            {row.productCode === null && (
                              <div className="text-center">
                                <span className="inline-flex items-baseline gap-1.5 px-2.5 py-1.5 rounded-md bg-muted/20 border border-border/20 text-xs">
                                  <span className="text-muted-foreground/70 font-medium uppercase tracking-wide">Κωδικοί</span>
                                  <span className="font-mono text-muted-foreground/50 text-sm">—</span>
                                </span>
                              </div>
                            )}

                            {/* Availability Button */}
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full mt-auto h-11 font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] rounded-lg"
                              onClick={() => {
                                setSelectedProduct({ brand: row.brand, productCode: row.productCode });
                                setIsDialogOpen(true);
                              }}
                            >
                              <span className="text-sm md:text-base">Διαθεσιμότητα</span>
                            </Button>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <Card className="p-12 text-center border-border/50">
              <p className="text-muted-foreground">Δεν βρέθηκαν αποτελέσματα</p>
            </Card>
          )}
        </div>
      </section>

      <Footer />

      {/* Availability Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold">Διαθεσιμότητα Προϊόντος</DialogTitle>
            <DialogDescription className="text-base pt-2">
              {selectedProduct && (
                <>
                  <div className="font-semibold text-foreground mb-2">{selectedProduct.brand}</div>
                  {selectedProduct.productCode !== null && (
                    <div className="text-sm text-muted-foreground">
                      Κωδικοί: <span className="font-mono font-semibold text-foreground">{selectedProduct.productCode}</span>
                    </div>
                  )}
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              Για πληροφορίες σχετικά με τη διαθεσιμότητα αυτού του προϊόντος, παρακαλούμε επικοινωνήστε μαζί μας.
            </p>
          </div>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              className="w-full sm:w-auto"
            >
              Κλείσιμο
            </Button>
            <Button
              asChild
              className="w-full sm:w-auto font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-md hover:shadow-lg"
            >
              <a href="tel:+306937184549" className="flex items-center justify-center gap-2">
                <Phone size={18} />
                <span>Καλέστε για διαθεσιμότητα</span>
              </a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
