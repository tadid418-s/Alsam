import { Box, Image } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Logo = ({ disableLink, ...props }) => {
  const logoImg = (
    <Box display="flex" alignItems="center" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none' } }} {...props}>
      <Image src="/static/favicons/ALsam_Transparent.png" alt="AL-SAM logo" height="40px" width="auto" />
    </Box>
  );
  if (disableLink) return logoImg;
  return (
    <NextLink href="/" passHref legacyBehavior>
      <Box as="a" display="flex" alignItems="center" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none' } }}>
        <Image src="/static/favicons/ALsam_Transparent.png" alt="AL-SAM logo" height="40px" width="auto" />
      </Box>
    </NextLink>
  );
}
