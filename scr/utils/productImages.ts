// Product image utility - loads images from category folders
import productPlaceholder from "@/assets/products/product-placeholder.png";
import productPlaceholder2 from "@/assets/products/test2.png";

// Map categories to folder names
const categoryFolderMap: Record<string, string> = {
  "ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ": "injector_diesel",
  "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ": "diesel_pumps",
  "ΑΝΤΛΙΕΣ ΜΕ ΜΠΕΚ": "pumps_injectors",
  "ΑΝΤΛΙΕΣ ΥΨΗΛΗΣ ΠΙΕΣΗΣ": "high_pressure_pumps",
};

// Pre-load all product images using Vite's glob import
// This will automatically include all images from the category folders
const productImages = import.meta.glob<{ default: string }>(
  "@/assets/products/**/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

/**
 * Normalize brand name to match filename pattern
 */
const normalizeBrandName = (brand: string): string => {
  return brand
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "_")
    .replace(/\//g, "_")
    .replace(/\s+/g, "_");
};

/**
 * Get product image for a brand in a specific category
 * Tries to load from category folder, falls back to placeholders
 * Returns the image path and a flag indicating if it's a real product image
 */
export const getProductImageSync = (
  brand: string,
  category: string,
  index: number
): { image: string; isProductImage: boolean } => {
  const folder = categoryFolderMap[category];
  if (!folder) {
    const placeholder = index % 2 === 0 ? productPlaceholder : productPlaceholder2;
    return { image: placeholder, isProductImage: false };
  }

  // Normalize brand name
  const normalizedBrand = normalizeBrandName(brand);
  
  // Create a version of normalized brand with single underscores for matching
  // This handles cases like "KHD/ MWN" -> "khd__mwn" matching "khd_mwn_pump"
  const normalizedBrandSingleUnderscore = normalizedBrand.replace(/_+/g, '_');

  // Try to find the image in the productImages glob
  // Search through all loaded images
  // Collect all potential matches with their filenames
  const matches: Array<{ image: string; isProductImage: boolean; fileName: string }> = [];
  
  for (const [path, module] of Object.entries(productImages)) {
    // Check if path matches the folder and brand
    if (path.includes(`/${folder}/`)) {
      // Extract filename from path (e.g., "bosch_injector.png" -> "bosch_injector")
      const fileName = path.split('/').pop()?.toLowerCase().replace(/\.(png|jpg|jpeg|webp)$/, '') || '';
      
      const imagePath = (module as { default: string }).default;
      // Make sure it's not a placeholder
      if (imagePath === productPlaceholder || imagePath === productPlaceholder2) {
        continue;
      }
      
      // Exact match (highest priority)
      if (fileName === normalizedBrand || fileName === normalizedBrandSingleUnderscore) {
        return { image: imagePath, isProductImage: true };
      }
      
      // Check if filename starts with normalized brand name (with single or multiple underscores)
      // This handles cases like "fiat_pump.png" matching "fiat" or "khd_mwn_pump" matching "khd__mwn"
      if (fileName.startsWith(normalizedBrand + '_') || fileName.startsWith(normalizedBrandSingleUnderscore + '_')) {
        matches.push({ image: imagePath, isProductImage: true, fileName });
      }
      
      // Also check if filename starts with the single underscore version
      // This handles "khd_mwn_pump" matching "khd__mwn" (KHD/ MWN)
      const fileNameParts = fileName.split('_');
      const brandParts = normalizedBrandSingleUnderscore.split('_').filter(p => p.length > 0);
      if (brandParts.length > 0 && fileNameParts.length >= brandParts.length) {
        const matchesBrand = brandParts.every((part, idx) => fileNameParts[idx] === part);
        if (matchesBrand) {
          matches.push({ image: imagePath, isProductImage: true, fileName });
        }
      }
      
      // Fallback: check if filename includes the normalized brand with underscores
      if (fileName.includes(`_${normalizedBrand}_`) || fileName.endsWith(`_${normalizedBrand}`) ||
          fileName.includes(`_${normalizedBrandSingleUnderscore}_`) || fileName.endsWith(`_${normalizedBrandSingleUnderscore}`)) {
        matches.push({ image: imagePath, isProductImage: true, fileName });
      }
    }
  }
  
  // If we have matches, find the most specific one
  if (matches.length > 0) {
    // First, try to find exact matches with common suffixes (highest priority)
    const commonSuffixes = ['_pump', '_injector', '_diesel'];
    for (const suffix of commonSuffixes) {
      const exactMatch = matches.find(m => m.fileName === normalizedBrand + suffix);
      if (exactMatch) {
        return { image: exactMatch.image, isProductImage: true };
      }
    }
    
    // If no exact match with common suffix, check if filename equals normalizedBrand exactly
    // This handles cases like "fiat_om.png" for brand "fiat_om"
    const exactBrandMatch = matches.find(m => m.fileName === normalizedBrand);
    if (exactBrandMatch) {
      return { image: exactBrandMatch.image, isProductImage: true };
    }
    
    // Sort by filename length (longer = more specific) and then alphabetically
    matches.sort((a, b) => {
      if (b.fileName.length !== a.fileName.length) {
        return b.fileName.length - a.fileName.length;
      }
      return a.fileName.localeCompare(b.fileName);
    });
    
    // Return the first (most specific) match
    return { image: matches[0].image, isProductImage: true };
  }

  // Fallback to placeholders
  const placeholder = index % 2 === 0 ? productPlaceholder : productPlaceholder2;
  return { image: placeholder, isProductImage: false };
};

