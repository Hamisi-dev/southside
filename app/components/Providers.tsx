'use client'

import { CurrencyProvider } from "@/contexts/CurrencyContext"
import { ThemeProvider } from "@/contexts/ThemeContext"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        {children}
      </CurrencyProvider>
    </ThemeProvider>
  )
}
