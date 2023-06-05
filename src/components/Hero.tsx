import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'50vh'}
        backgroundImage={
          'truck_interior_stock.jpg'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          backgroundColor={"black"}
          opacity={"0.5"}
          //bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
          >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Driving business towards the future
            </Text>
            <Text color={'white'} fontWeight={700}
              lineHeight={1.2} maxW={'3xl'}>
                Providing the best transportation system in Jamaica for both users and operators.
            </Text>
            <Stack direction={'row'}>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Learn more
            </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }