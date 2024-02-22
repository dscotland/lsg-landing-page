import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Center,
    Image
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    
  } from '@chakra-ui/icons';
import { useState } from 'react';
  
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 20) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeNavbarColor);
    }

    return (
      <Box>
        <Flex
          bgGradient={!colorChange ? "linear(to-b, #0c0c0c)" : ""}
          bgColor={colorChange? "#0c0c0c" : ""}
          //color="white"
          position="fixed"
          zIndex={200}
          w="100%"
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
                <MobileNav/>
          </Flex>
          <Flex>
            {/* <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color="white">
              Logo Here
            </Text> */}
            {/* <Image src='/white-logo.png' alt='logo' boxSize={{base:'75px', sm:'10px', md:'1px', lg:'1px'}} /> */}
            
            <Link href="/">
                <Image src='/white-logo.png' alt='logo' boxSize={{base:'60px', sm:'75px', md:'75px', lg:'75px'}} float={{base:'right'}}/>
            </Link>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = "white";
    const popOverLinkColor = "#f6003d"
    const linkHoverColor = "#f6003d";
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4} p={6}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'md'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        color={'black'}
        p={2}
        rounded={'md'}
        _hover={{ bg: '#800020' }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'white' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'white'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                color="white"
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='unstyled'
            />
            <MenuList bgColor="white" color="black">
                {NAV_ITEMS.map((item,index)=>{
                    return (
                        <MenuItem key={index} bgColor="inherit">
                            <MobileNavItem key={index} {...item} />
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Menu>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Our Team',
      href: '/our-team',
    //   children: [
    //     {
    //       label: 'Explore Design Work',
    //       subLabel: 'Trending Design to inspire you',
    //       href: '#',
    //     },
    //     {
    //       label: 'New & Noteworthy',
    //       subLabel: 'Up-and-coming Designers',
    //       href: '#',
    //     },
    //   ],
    },
    {
      label: 'Services',
      href: '/#services',
      children: [
        {
          label: 'Realtime Tracking',
          href: '/services/real-time-tracking',
        },
        {
            label: 'Pickup & Delivery',
            href: '/services/pickup-and-delivery',
        },
        {
            label: 'Phone Support',
            href: '/services/phone-support',
        },
      ],
    },
    {
      label: 'Gallery',
      href: '/#gallery',
    },
    {
      label: 'Testimonials',
      href: '/#testimonials',
    },
    {
      label: 'Contact',
      href: '/#contact',
    },
  ];