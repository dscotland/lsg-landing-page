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
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import TeamMemberCard from "../components/OurTeam/TeamMemberCard";
import Head from "next/head";

const OurTeam = () => {

    const [teamMembers, setTeamMembers] = useState([
        {
            name: "Maurice Sampson",
            image: "/maurice-sampson-headshot.png",
            jobTitle: "Chief Operations Officer",
        },
        {
            name: "Marvin Burgess",
            image: "/marvin-burgess-headshot.png",
            jobTitle: "Chief Financial/Accounting Officer",
        },
        {
            name: "Shantel Coombs",
            image: "/shantel-coombs-headshot.png",
            jobTitle: "Chief Marketing and Customer Experience Officer",
        },
        {
            name: "Maria Reynolds-Sinclair",
            image: "/marcia-reynolds-sinclair-headshot.png",
            jobTitle: "Chief Business Development Officer"
        }
    ]);

    return (
        <Box bgColor="#0c0c0c" color={'white'}>
            <Head>
                <title>Las Secuelas Group Ltd.</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <Center>
                <Stack spacing={20} width={"75%"} pb={20} pt={150} id="our-team" minH={"100vh"}>
                    <Heading textAlign={"center"} bgGradient='linear(to-b, white, gray)' bgClip='text'>
                        Meet the team behind the wheel
                    </Heading>
                    <Text textAlign={"center"} fontSize={"xl"}> 
                        Interesting placeholder text about the company and the talented team of people that work for Las Secuelas Group Ltd.
                    </Text>
                    <SimpleGrid spacing={20} columns={{ sm: 1, md: 1, lg: 2, xl: 3 }}>
                        {teamMembers.map((teamMember, index)=>{
                            return (
                                <TeamMemberCard 
                                    name={teamMember.name} 
                                    image={teamMember.image} 
                                    jobTitle={teamMember.jobTitle} 
                                    key={index}
                                />
                            )
                        })}
                    </SimpleGrid>
                </Stack>            
            </Center>
            <Footer/>
        </Box>
    )
}

export default OurTeam;