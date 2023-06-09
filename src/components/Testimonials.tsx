import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const TestimonialCarousel = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // Testimonial list
  const cards = [
    {
        title: 'Client 1',
        text: `It really saves me time and effort. It is exactly what our business has been lacking. 
        Las Secuelas Group is the most valuable business resource we have EVER purchased.`,
    },
    {
      title: 'Client 2',
      text: `It really saves me time and effort. It is exactly what our business has been lacking. 
      Las Secuelas Group is the most valuable business resource we have EVER purchased.`,
    },
    {
        title: 'Client 3',
        text: `It really saves me time and effort. It is exactly what our business has been lacking. 
        Las Secuelas Group is the most valuable business resource we have EVER purchased.`,
    },
    {
      title: 'Client 4',
      text: `It really saves me time and effort. It is exactly what our business has been lacking. 
      Las Secuelas Group is the most valuable business resource we have EVER purchased.`,
    },
  ];

  return (
    <Center>
    <Box
      id="testimonials"
      position={'relative'}
      height={'600px'}
      width={"8xl"}
      overflow={'hidden'}>
        <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      {/* Left Icon */}
      <IconButton
        color="white"
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        color="white"
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
        <Heading textAlign={"center"} bgGradient='linear(to-b, white, gray)' bgClip='text'>
            You are in good company
        </Heading>
        <Text textAlign={"center"} p={6}> 
            Hear what our other clients have to say
        </Text>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
            <Box
                key={index}
                bgGradient='radial(circle,#800020,#0c0c0c 70%)'
            >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height={"xl"} >
              <Stack
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
    </Center>
  );
}

export default TestimonialCarousel;