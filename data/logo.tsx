import { Box, Image, Text, Link } from '@chakra-ui/react'

export const Logo = (props) => (
  <Link
    href="/"
    display="inline-block"
    sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none' } }}
  >
    <Box display="flex" alignItems="center" {...props}>
      <Image src="/static/favicons/ALsam_Transparent.png" alt="AL-SAM logo" height="40px" width="auto" />
    </Box>
  </Link>
)
