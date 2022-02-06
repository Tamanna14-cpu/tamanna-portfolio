import { Box, Container, Heading, Image, useColorModeValue } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} textAlign="center">
        Hello, I&apos;m a frontend developer based in Bangladesh!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box >
          <Heading as="h2" variant="page-title">
            Tamanna Akter
          </Heading>
          <p>Digital Craftsman ( Developer / Designer / Barista )</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >

          <Image

            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            display="inline-block"
            style={{ width: '104px', height: '110px', borderRadius: '50%' }}
            src="/images/profile.jpg"
            alt="Profile image"

          ></Image>

        </Box>

      </Box>
    </Container>
  )
}
