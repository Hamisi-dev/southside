'use client'

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { CurrencyCode, convertPrice, formatPrice } from '@/utils/currency';

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  format: (amount: number) => string;
  convert: (amount: number, fromCurrency: CurrencyCode) => number;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'KES',
  setCurrency: () => {},
  format: () => '',
  convert: () => 0,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyCode>(() => {
    // Try to get the currency from localStorage on initial load
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferredCurrency');
      return (saved as CurrencyCode) || 'KES';
    }
    return 'KES';
  });

  // Save currency preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('preferredCurrency', currency);
  }, [currency]);

  const format = useCallback((amount: number) => {
    return formatPrice(amount, currency);
  }, [currency]);

  const convert = useCallback((amount: number, fromCurrency: CurrencyCode) => {
    return convertPrice(amount, fromCurrency, currency);
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format, convert }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
