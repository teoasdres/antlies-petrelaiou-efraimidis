// Brand logo mapping utility
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

// Map brand names to their logo images
const brandLogoMap: Record<string, string> = {
  "BOSCH": boschLogo,
  "DELPHI": delphiLogo,
  "DENSO": densoLogo,
  "SIEMENS": siemensLogo,
  "IVECO": ivecoLogo,
  "BMW": bmwLogo,
  "FIAT": fiatLogo,
  "ISUZU": isuzuLogo,
  "FORD": fordLogo,
  "HYUNDAI": hyundaiLogo,
  "DAIHATSU": daihatsuLogo,
  "MAZDA": mazdaLogo,
  "MERCEDES BENZ": mercedesLogo,
  "MITSUBISHI": mitsubishiLogo,
  "NISSAN": nissanLogo,
  "OPEL": opelLogo,
  "VOLVO": volvoLogo,
  // Handle variations
  "FIAT OM": fiatLogo,
  "FIAT/IVECO": fiatLogo,
  "IVECO/FIAT": ivecoLogo,
  "IVECO ENASA": ivecoLogo,
  "IVECO/FAIT": ivecoLogo,
};

/**
 * Get logo image for a brand name
 * @param brandName - The brand name to get logo for
 * @returns The logo image path or null if not found
 */
export const getBrandLogo = (brandName: string): string | null => {
  const normalizedBrand = brandName.toUpperCase().trim();
  return brandLogoMap[normalizedBrand] || null;
};

