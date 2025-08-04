'use client'

import React from 'react'
import { useCurrency } from '@/contexts/CurrencyContext'
import { CurrencyCode } from '@/utils/currency'

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency()

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
      className="text-sm bg-transparent border border-gray-300 rounded px-2 py-1 hover:border-black focus:border-black focus:outline-none transition-colors"
      aria-label="Select currency"
    >
      <option value="KES">KES</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
    </select>
  )
}
