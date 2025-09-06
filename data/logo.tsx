import { Box, Image } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Logo = (props) => (
  <NextLink href="/" passHref legacyBehavior>
    <Box as="a" display="flex" alignItems="center" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none' } }} {...props}>
      <Image src="/static/favicons/ALsam_Transparent.png" alt="AL-SAM logo" height="40px" width="auto" />
    </Box>
  </NextLink>
)
