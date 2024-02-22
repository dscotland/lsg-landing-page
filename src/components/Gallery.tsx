import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center,
  Image,
  HStack
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

const TestimonialCarousel = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // Image list
  const cards = [
    {
        url: "/truck1.jpg"
    },
    {
        url: "/truck2.jpg"
    },
    {
        url: "/truck3.jpg"
    },
    {
        url: "/truck4.jpg"
    },
    {
        url: "/truck5.jpg"
    },
    {
        url: "/truck6.jpg"
    },
    {
        url: "/truck7.jpg"
    },
    {
        url: "/truck8.jpg"
    },
    {
        url: "/truck9.jpg"
    },
    {
        url: "/truck10.jpg"
    },
    {
        url: "/truck11.jpg"
    },
    {
        url: "/truck12.jpg"
    },
    {
        url: "/truck13.jpg"
    },
    {
        url: "/truck14.jpg"
    },
    {
        url: "/truck15.jpg"
    },
    {
        url: "/truck16.jpg"
    },
  ];

  return (
    <Center>
    <Box
      id="gallery"
      position={'relative'}
      height={'fit-content'}
      width={"6xl"}
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
            Gallery
        </Heading>
        <Text textAlign={"center"} p={6}> 
            We have state of the art equipment to suit your needs
        </Text>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
            <Box
                key={index}
            >
            <Container pb={20}>
                <Center>
                    <Box p={1} borderRadius={"12px"} bgColor="GrayText">
                        <Image src={card.url} borderRadius={"12px"}/>
                    </Box>
                </Center>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
    </Center>
  );
}

export default TestimonialCarousel;