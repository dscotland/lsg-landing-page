import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';

  import {
    FcSearch,
    FcPhone,
    FcInTransit,
    FcPackage
  } from 'react-icons/fc';
  
  interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
  }
  
  const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
      <Box
        //maxW={{ base: 'full', md: '275px' }}
        w={'300px'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function gridListWith() {
    return (
      <Box p={4} mt={12} id="services">
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Services
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Las Secuelas Group Ltd will offer the following services for businesses Island wide:
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={'Phone Support'}
              icon={<Icon as={FcPhone} w={10} h={10} />}
              description={
                'Phone support for all customer questions, delivery changes, and scheduling'
              }
              href={'#'}
            />
            <Card
              heading={'Real Time Tracking'}
              icon={<Icon as={FcSearch} w={10} h={10} />}
              description={
                'Real time tracking information detailing the location of all GPS-tagged trucks and the status of deliveries, including expected arrival times for pick-up or delivery'
              }
              href={'#'}
            />
            <Card
              heading={'Pickup & Delivery'}
              icon={<Icon as={FcInTransit} w={10} h={10} />}
              description={
                `Pick-up and delivery of goods with a minimum per-delivery weight of 3,000 - 30,000 
                lbs from and to locations in its geographic range by varying truck sizes (based on load size)`
              }
              href={'#'}
            />
            <Card
              heading={'Temperature-controlled Shipping'}
              icon={<Icon as={FcPackage} w={10} h={10} />}
              description={
                'Description of temperature-controlled shipping to go here.'
              }
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    );
  }