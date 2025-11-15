export type InventoryItem = {
  brand: string;
  productCode: number | null; // null = "-"
  category: string; // π.χ. "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ", "ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ", "ΑΝΤΛΙΕΣ ΥΨΗΛΗΣ ΠΙΕΣΗΣ", "ΑΝΤΛΙΕΣ ΜΕ ΜΠΕΚ"
};

// Σύντομο, επεκτάσιμο dataset. Μπορείτε να προσθέσετε/επεξεργαστείτε εύκολα.
// Αντιστοιχεί στο format του φύλλου: BRAND, ΚΩΔΙΚΟΣ, ΚΑΤΗΓΟΡΙΑ
export const inventory: InventoryItem[] = [
  { brand: "AEC", productCode: 2, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "BARKAS", productCode: 2, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "BAUDOUIN", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "BMW", productCode: 10, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "BOSCH", productCode: 292, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "CASE", productCode: 4, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "CHRYSLER", productCode: 5, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "CHRYSLER/VM", productCode: 2, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "CUMMINS", productCode: 286, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "DAF", productCode: 56, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "DAIHATSU", productCode: 2, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "DELPHI", productCode: 20, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "DENSO", productCode: 4, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "DORMAN", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "FARYMANN", productCode: 3, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "FIAT", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "FIAT OM", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "FIAT/IVECO", productCode: 4, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "FORD", productCode: 73, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "FORD NEW HOLLAND", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "GULDNER", productCode: 18, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "HANOMAG", productCode: 31, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "HATZ", productCode: 17, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "HOLDER", productCode: 4, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "HYUNDAI", productCode: 5, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "IHC", productCode: 114, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "ISUZU", productCode: 9, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "IVECO", productCode: 257, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "IVECO ENASA", productCode: 2, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "IVECO/FAIT", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "IVECO/FIAT", productCode: 51, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "JOHN DEERE", productCode: 47, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "KHD", productCode: 297, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "KHD/MICO", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "KHD MWM FENDT", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "KHD/ MWN", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "KIA", productCode: 4, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "KIA/HYUNDAI", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "KOMATSU", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "KUBOTA", productCode: 2, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "LAMBORGHINI", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "LIEBHERR", productCode: 33, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "LAMBARDINI", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "LUCAS", productCode: 3, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "MAN", productCode: 253, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "MAZDA", productCode: 5, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "MERCEDES BENZ", productCode: 510, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "MITSUBISHI", productCode: 11, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "MWM", productCode: 11, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "MWM/FENDT", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "NAVISTAR", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "NEW HOLLAND", productCode: 30, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "NISSAN", productCode: 39, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "OPEL", productCode: 29, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "PEGASO", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "PERKINS", productCode: 141, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "PEUGEOT", productCode: 79, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "PRESSUMPE", productCode: 4, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "RENAULT", productCode: 130, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "ROTODIESEL", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "ROVER", productCode: 8, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "SAD", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "SAME", productCode: 2, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "SCANIA", productCode: 81, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "SCHANZLIN", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "STANADYNE", productCode: 7, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "STEYR", productCode: 24, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "TOYOTA", productCode: 10, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "VDO", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "VEB - BARKAS - WERKE", productCode: 3, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "VEB - EINSPRITZGERAETEWERK", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "VM", productCode: 23, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "VOLVO", productCode: 204, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "VW", productCode: 93, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "ZEXEL", productCode: 1, category: "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ" },

  // ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ
  { brand: "BOSCH", productCode: null, category: "ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "SIEMENS", productCode: null, category: "ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "VDO", productCode: null, category: "ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "DELPHI", productCode: null, category: "ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "DENSO", productCode: null, category: "ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ" },
  { brand: "MANNOL", productCode: null, category: "ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ" },

  // ΑΝΤΛΙΕΣ ΜΕ ΜΠΕΚ
  { brand: "BOSCH", productCode: 16, category: "ΑΝΤΛΙΕΣ ΜΕ ΜΠΕΚ" },
  { brand: "DELPHI", productCode: 1, category: "ΑΝΤΛΙΕΣ ΜΕ ΜΠΕΚ" },

  // ΑΝΤΛΙΕΣ ΥΨΗΛΗΣ ΠΙΕΣΗΣ
  { brand: "BOSCH", productCode: null, category: "ΑΝΤΛΙΕΣ ΥΨΗΛΗΣ ΠΙΕΣΗΣ" },
  { brand: "CUMMINS", productCode: null, category: "ΑΝΤΛΙΕΣ ΥΨΗΛΗΣ ΠΙΕΣΗΣ" },
  { brand: "DELPHI", productCode: null, category: "ΑΝΤΛΙΕΣ ΥΨΗΛΗΣ ΠΙΕΣΗΣ" },
];

export const categories = Array.from(
  new Set(inventory.map((i) => i.category))
).sort();


