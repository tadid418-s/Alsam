import {
  Box,
  BoxProps,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Divider,
  IconButton,
  VisuallyHidden,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { Link, LinkProps } from '@saas-ui/react'
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import siteConfig from '#data/config'
import { Logo } from './logo'

export interface FooterProps extends BoxProps {
  columns?: number
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 4, ...rest } = props

  const navColumns = [
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Media', href: '/media' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      heading: 'Solutions',
      links: [
        { label: 'Business Divisions', href: '/business-divisions' },
        { label: 'Services', href: '/services' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: siteConfig.privacyUrl || '#' },
        { label: 'Terms & Conditions', href: siteConfig.termsUrl || '#' },
      ],
    },
  ]

  const socials = [
    { label: 'Twitter / X', icon: FaTwitter, href: 'https://twitter.com/saas_js' },
    { label: 'GitHub', icon: FaGithub, href: 'https://github.com/saas-js/saas-ui' },
    { label: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com' },
    { label: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com' },
  ]

  return (
    <Box bg="white" _dark={{ bg: 'gray.900' }} {...rest}>
      <Container maxW="container.2xl" px={{ base: 6, md: 8 }} py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: columns }} spacing={{ base: 12, md: 8 }}>
          <Stack spacing={6} maxW="sm">
            <Flex>
              <Logo disableLink />
            </Flex>
            <Text fontSize="sm" color="muted">
              Our mission is to empower organizations with innovative, reliable, and sustainable digital solutions that accelerate growth and create lasting impact.
            </Text>
            <HStack spacing={2}>
              {socials.map((s) => (
                <IconButton
                  key={s.label}
                  as={ChakraLink}
                  href={s.href}
                  aria-label={s.label}
                  icon={<s.icon fontSize="1.1rem" />}
                  variant="ghost"
                  size="sm"
                  isRound
                />
              ))}
            </HStack>
          </Stack>

          {navColumns.map((col) => (
            <Stack key={col.heading} spacing={4} fontSize="sm">
              <Text fontWeight="semibold" fontSize="sm" color="fg.subtle">
                {col.heading}
              </Text>
              <Stack spacing={2} align="flex-start">
                {col.links.map((l) => (
                  <FooterLink key={l.href} href={l.href}>
                    {l.label}
                  </FooterLink>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
        <Divider my={10} opacity={0.2} />
        <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'flex-start', md: 'center' }} justify="space-between" gap={4}>
          <Copyright>
            &copy; {new Date().getFullYear()} Alsam. All rights reserved.
          </Copyright>
          <HStack spacing={4} wrap="wrap">
            {siteConfig.footer?.links?.map(({ href, label }) => (
              <FooterLink key={href} href={href}>
                {label}
              </FooterLink>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export interface CopyrightProps {
  title?: React.ReactNode
  children: React.ReactNode
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`
  }
  return (
    <Text color="muted" fontSize="sm">
      {content || children}
    </Text>
  )
}

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Link
      color="muted"
      fontSize="sm"
      textDecoration="none"
      _hover={{
        color: 'white',
        transition: 'color .2s ease-in',
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}
