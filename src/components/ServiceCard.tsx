import {
    Card,
    CardBody,
    Text,
    Link,
    Stack,
    Center,
    Box,
    CardHeader,
    useColorModeValue
  } from "@chakra-ui/react";
  import { useRouter } from "next/router";
  import { FaTruck, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
  
  interface Props {
    serviceTitle: string;
    serviceDescription: string;
    serviceLink?: string;
  }
  
  const ServiceCard = ({
    serviceTitle,
    serviceDescription,
    serviceLink,
  }: Props) => {
    const router = useRouter();
    return (
      <Card
        variant={"elevated"}
        direction={{ base: "column", sm: "row" }}
        size={"lg"}
        bgColor="#0c0c0c"
        color="white"
      >
  
        <Stack
          w={"100%"}
          textAlign={{
            base: "center",
            sm: "left",
            md: "left",
            lg: "left",
            xl: "left",
          }}
        >
          <CardBody>
            <CardHeader fontWeight={"bold"} pl={0} textAlign={"center"}>
                {serviceTitle}
            </CardHeader>

            <Center>  
            { 
                serviceTitle === "Phone Support" ?
                    <FaPhoneAlt size={50}/> :
                serviceTitle === "Pickup & Delivery" ?
                    <FaTruck size={50}/> : 
                serviceTitle === "Real Time Tracking" ?
                    <FaSearchLocation size={50}/> : 
                null
            }
            </Center>
  
            <Box pt={5} pb={5}>
              <Text overflow={"scroll"} color={useColorModeValue('white', 'gray.800')}>
                {serviceDescription}
              </Text>
            </Box>
  
            <Link isExternal href={serviceLink} w={"100%"}>
                Learn More
            </Link>
          </CardBody>
        </Stack>
      </Card>
    );
  };
  
  export default ServiceCard;
  