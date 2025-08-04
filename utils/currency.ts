export type CurrencyCode = 'KES' | 'USD' | 'EUR' | 'GBP';

interface CurrencyFormat {
  code: CurrencyCode;
  symbol: string;
  position: 'before' | 'after';
  space: boolean;
}

const CURRENCY_FORMATS: Record<CurrencyCode, CurrencyFormat> = {
  KES: {
    code: 'KES',
    symbol: 'Ksh',
    position: 'before',
    space: true
  },
  USD: {
    code: 'USD',
    symbol: '$',
    position: 'before',
    space: false
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    position: 'before',
    space: true
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    position: 'before',
    space: false
  }
};

export function formatPrice(amount: number, currencyCode: CurrencyCode = 'KES'): string {
  const format = CURRENCY_FORMATS[currencyCode];
  
  // Format the number with appropriate decimal places
  const formattedAmount = amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  // Construct the price string based on format
  if (format.position === 'before') {
    return `${format.symbol}${format.space ? ' ' : ''}${formattedAmount}`;
  } else {
    return `${formattedAmount}${format.space ? ' ' : ''}${format.symbol}`;
  }
}

// Exchange rates (you might want to fetch these from an API in a real application)
const EXCHANGE_RATES: Record<CurrencyCode, number> = {
  KES: 1,      // Base currency
  USD: 0.0070, // 1 KES = 0.0070 USD (example rate)
  EUR: 0.0064, // 1 KES = 0.0064 EUR (example rate)
  GBP: 0.0055  // 1 KES = 0.0055 GBP (example rate)
};

export function convertPrice(amount: number, fromCurrency: CurrencyCode, toCurrency: CurrencyCode): number {
  if (fromCurrency === toCurrency) return amount;
  
  // Convert to base currency (KES) first if needed
  const amountInKES = fromCurrency === 'KES' 
    ? amount 
    : amount / EXCHANGE_RATES[fromCurrency];
  
  // Convert from KES to target currency
  return amountInKES * EXCHANGE_RATES[toCurrency];
}
