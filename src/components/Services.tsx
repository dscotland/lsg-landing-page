import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    CardHeader,
    Card,
    CardBody,
    CardFooter,
    SimpleGrid,
    Center,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState} from 'react';
  import ServiceCard from './ServiceCard'

  
  const Services = () => {
    const [services, setServices] = useState([
        {
            serviceLink: "https://google.com",
            serviceTitle: "Real Time Tracking",
            serviceDescription : "Real time tracking information detailing the location of all GPS-tagged trucks and the status of deliveries, including expected arrival times for pick-up or delivery",
        },
        {
            serviceLink: "https://google.com",
            serviceTitle: "Phone Support",
            serviceDescription : "Phone support for all customer questions, delivery changes, and scheduling",
        },
        {
            serviceLink: "https://google.com",
            serviceTitle: "Pickup & Delivery",
            serviceDescription : "Pick-up and delivery of goods with a minimum per-delivery weight of 3,000 - 30,000 lbs from and to locations in its geographic range by varying truck sizes (based on load size)",
        },
    ]);

    return (
        <Center>
        <Stack spacing={4} width={"75%"} pb={20} id="services">
        <Heading textAlign={"center"} bgGradient='linear(to-b, white, gray)' bgClip='text'>
            Services
        </Heading>
        <Text textAlign={"center"}> 
            Las Secuelas Group Ltd will offer the following services for businesses Island wide: 
        </Text>
        <SimpleGrid columns={{ sm: 1, md: 1, lg: 2, xl: 3 }}>
            {services.map((service, index)=>{
                return (
                    <ServiceCard 
                        key={index}
                        serviceDescription={service.serviceDescription} 
                        serviceLink={service.serviceLink} 
                        serviceTitle={service.serviceTitle}
                    />
                )
            })}
        
      </SimpleGrid>
      </Stack>
      </Center>
    );
  }

  export default Services;