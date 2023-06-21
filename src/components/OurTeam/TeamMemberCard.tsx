import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Flex,
    Avatar,
    Image,
    Heading,
    Box,
    Text,
    IconButton,
    Button,
    Center
} from '@chakra-ui/react'

interface Props {
    name: string;
    image: string;
    jobTitle: string;
}

const TeamMemberCard=({
    name,
    image,
    jobTitle,
  }: Props)=>{
    return(
        <Flex>
        <Flex 
            flex='1' 
            gap='4' 
            alignItems='center' 
            flexWrap='wrap' 
            justifyContent={"center"} 
            textAlign={{base:"center",sm:"center",md:"left",lg:"left"}}
        >
            <Avatar name='Segun Adebayo' src={image} size={"2xl"} />
            <Box maxW={"300px"}>
            <Heading 
                wordBreak={"break-word"} 
                size='lg' 
                bgGradient='linear(to-l, white, #800020)' 
                bgClip='text'
                maxW={"250px"}
            >
                {name}
            </Heading>
            <Text wordBreak={"break-word"} maxW={"250px"}>{jobTitle}</Text>           
            </Box>
        </Flex>
        </Flex>
    )
}

export default TeamMemberCard