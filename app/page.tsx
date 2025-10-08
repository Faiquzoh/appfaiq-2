import CommunitySection from '@/components/content-6'
import FeaturesSection from '@/components/features-8'
import HeroSection from '@/components/hero-section'
import IntegrationsSection from '@/components/integrations-7'
import StatsSection from '@/components/stats-3'
import Testimonials from '@/components/testimonials'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <IntegrationsSection />
      <StatsSection />
      <Testimonials />

    </div>
  )
}
