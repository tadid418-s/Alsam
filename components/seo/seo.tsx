// @ts-ignore - optional dependency: if next-seo is installed it will be used at runtime
import { NextSeo } from 'next-seo'

import React from 'react'

import siteConfig from '#data/config'

export type SEOProps = any

export const SEO = ({ title, description, ...props }: SEOProps) => (
  // @ts-ignore allow runtime use when package is present
  <NextSeo
    title={title}
    description={description}
    openGraph={{ ...((siteConfig.seo as any).openGraph || {}), title, description }}
    titleTemplate={(siteConfig.seo as any).titleTemplate}
    twitter={(siteConfig.seo as any).twitter}
    {...props}
  />
)
