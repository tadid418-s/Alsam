'use client'

import React, { useRef, useMemo } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heading, HeadingProps } from '@chakra-ui/react'

interface ScrollShadeTextProps extends Omit<HeadingProps, 'children'> {
  text: string
  highlightWords?: string[]
  /** Scroll offset array passed to useScroll */
  offset?: [string, string]
  /** How much of the scroll progress should be used before fully shaded (0-1) */
  fillAt?: number
  /** Starting opacity for characters before they become visible */
  baseOpacity?: number
  /** Ending opacity for characters (usually 1) */
  endOpacity?: number
}

/**
 * Splits text into characters (preserving spaces/newlines) and progressively shades each
 * letter from a muted color to the final color while scrolling through the container.
 */
export const ScrollShadeText: React.FC<ScrollShadeTextProps> = ({
  text,
  highlightWords = [],
  offset = ['start 80%', 'end 10%'],
  fillAt = 1,
  baseOpacity = 0.1,
  endOpacity = 1,
  ...headingProps
}) => {
  const ref = useRef<HTMLHeadingElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset })

  const baseColor = useColorModeValue('gray.300', 'gray.600')
  const finalColor = useColorModeValue('gray.800', 'gray.100')
  const highlightColor = useColorModeValue('green.600', 'green.300')

  // Precompute which characters are part of highlight words
  const chars = useMemo(() => {
    // We'll split by characters but mark highlight membership by reconstructing words
    const words = text.split(/(\s+)/) // keep whitespace tokens
    let result: { ch: string; highlight: boolean }[] = []
    words.forEach((token) => {
      if (/^\s+$/.test(token)) {
        // whitespace
        result.push({ ch: token, highlight: false })
      } else {
        const isHighlight = highlightWords.some(
          (w) => w.toLowerCase() === token.replace(/[^A-Za-z0-9]/g, '').toLowerCase(),
        )
        // push each character separately (retain token characters)
        token.split('').forEach((c) => result.push({ ch: c, highlight: isHighlight }))
      }
    })
    return result
  }, [text, highlightWords])

  return (
    <Heading ref={ref} position="relative" {...headingProps}>
      {chars.map((c, i) => {
        const progressPoint = (i / Math.max(chars.length - 1, 1)) * fillAt
        const start = Math.max(progressPoint - 0.08, 0)
  const opacity = useTransform(scrollYProgress, [start, progressPoint], [baseOpacity, endOpacity])
        const color = useTransform(scrollYProgress, [start, progressPoint], [baseColor, c.highlight ? highlightColor : finalColor])
        return (
          <motion.span
            key={i}
            style={{
              display: 'inline-block',
              whiteSpace: 'pre',
              opacity,
              color,
              transition: 'color 0.2s linear',
            }}
          >
            {c.ch}
          </motion.span>
        )
      })}
    </Heading>
  )
}

export default ScrollShadeText
