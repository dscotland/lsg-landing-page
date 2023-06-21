import Navbar from "../../components/NavBar";
import Head from "next/head";
import {Box, Center, Stack, Heading, Text} from "@chakra-ui/react";
import { useRef } from "react";

const RealTimeTracking = () => {
    return (
        <Box bgColor="#0c0c0c" color={'white'} height={"100vh"}>
          <Head>
            <title>Las Secuelas Group Ltd.</title>
            <meta name="description" content="Generated by create-t3-app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
          <Center>
                <Stack spacing={20} width={"75%"} pb={20} pt={150} id="our-team" minH={"100vh"}>
                    <Heading textAlign={"center"} bgGradient='linear(to-b, white, gray)' bgClip='text'>
                        Real Time Tracking
                    </Heading>
                </Stack>            
            </Center>
        </Box>
      );
};

export default RealTimeTracking;
