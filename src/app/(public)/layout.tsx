import { SiteHeader } from '@/components/site-header'
import React from 'react'

type PublicLayoutProps = {
  children: React.ReactNode
}

export default function PulicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  )
}
