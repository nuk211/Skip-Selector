// Helper function to calculate total price including VAT
export const calculateTotalPrice = (priceBeforeVat, vat) => {
  const total = priceBeforeVat + (priceBeforeVat * vat / 100);
  return Math.round(total);
};

// Helper function to get skip description based on size
export const getSkipDescription = (size) => {
  const descriptions = {
    4: 'Perfect for small home clearances and garden projects',
    6: 'Ideal for bathroom/kitchen renovations',
    8: 'Great for larger garden projects and DIY work',
    10: 'Suitable for house clearances and renovations',
    12: 'Perfect for construction and large clearance jobs',
    14: 'Ideal for commercial and construction projects',
    16: 'Large renovation and construction projects',
    20: 'Major construction and commercial work',
    40: 'Industrial and large-scale commercial use'
  };
  return descriptions[size] || 'Versatile waste solution for your project';
};

// Helper function to format currency
export const formatCurrency = (amount) => {
  return `£${amount.toLocaleString()}`;
};

// Helper function to get skip capacity in relatable terms
export const getSkipCapacity = (size) => {
  const capacities = {
    4: 'Fits approximately 40 bin bags',
    6: 'Fits approximately 60 bin bags',
    8: 'Fits approximately 80 bin bags',
    10: 'Fits approximately 100 bin bags',
    12: 'Fits approximately 120 bin bags',
    14: 'Fits approximately 140 bin bags',
    16: 'Fits approximately 160 bin bags',
    20: 'Fits approximately 200 bin bags',
    40: 'Large commercial capacity'
  };
  return capacities[size] || `${size} cubic yards capacity`;
};