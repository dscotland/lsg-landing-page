import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsTwitter, BsInstagram, BsPerson } from 'react-icons/bs';
  
  export default function contact() {
    return (
      <Container maxW="full" mt={20} centerContent overflow="hidden" id='contact'>
        <Heading textAlign={"center"} bgGradient='linear(to-b, white, gray)' bgClip='text'>
            Get in Touch
        </Heading>
        <Flex>
          <Box
            bgGradient='linear(to-t,#0c0c0c,#800020,#0c0c0c )'
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                      Fill out the form to contact us
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{}}
                          leftIcon={<MdPhone color="white" size="20px" />}>
                          +1876-618-7619
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{}}
                          leftIcon={<MdPhone color="white" size="20px" />}>
                          +1876-514-7906
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{}}
                          leftIcon={<MdEmail color="white" size="20px" />}>
                          lassecuelasgroupltd@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{}}
                          leftIcon={<MdLocationOn color="white" size="20px" />}>
                          Kingston, Jamaica
                        </Button>
                      </VStack>
                    </Box>
                    {/* <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsTwitter size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsInstagram size="28px" />}
                      />
                    </HStack> */}
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="black">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                            >
                                <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                            >
                                <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="Type your message here"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="outline"
                            bg="#800020"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }