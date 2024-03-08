import {
  Box,
  Heading,
  Tooltip,
  Flex,
  Spacer,
  Text,
  useBreakpointValue,
  // Table,
  // Tr,
  // Thead,
  // Th,
  // Tbody,
  // Td,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
// import { BiVector } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
// import { FaPython } from "react-icons/fa";
import type { IconType } from "react-icons/lib";
// import {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   SiPypi,
//   SiJavascript,
//   SiTypescript,
//   SiRust,
//   SiAmazonaws,
//   SiDeno,
//   SiDocker,
//   SiKubernetes,
//   SiGithubactions,
//   SiTravisci,
//   SiDatadog,
//   SiSolidity,
//   SiStripe,
//   SiCloudflare,
//   SiGnubash,
//   SiGrafana,
//   SiLinux,
//   SiNetlify,
//   SiPaypal,
//   SiPostgresql,
//   SiPrometheus,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   SiPypy,
//   SiRedis,
//   SiVercel,
//   SiMongodb,
//   SiIbmwatson,
//   SiGooglecloud,
//   SiFirebase,
//   SiGit,
//   SiRailway,
//   SiOpenai,
// } from "react-icons/si";

import FeaturedProject from "components/FeaturedProject";
import ImageBox from "components/ImageBox";
import SomeText from "components/SomeText";
import ThemedButton from "components/ThemedButton";
import FeaturedProjectList from "data/featured_projects";

interface IconWrapperProps {
  icon: IconType;
  text: string;
}

const Home = () => {
  const isSmall = useBreakpointValue({ base: true, md: false });
  const bl = useColorModeValue("brand.400", "brand.600");
  const textc = useColorModeValue("brand.800", "brand.200");

  const paatern = useColorModeValue("/Clarence.svg", "/Taieri.svg");
  return (
    <Box>
      <Box
        height={{ base: "auto", md: "500px" }}
        position="relative"
        backgroundImage={isSmall ? "" : paatern}
        marginY={8}
      >
        <Box
          backgroundColor={useColorModeValue("bgwhite.100", "bgblack.100")}
          height={{ base: "auto", md: "100%" }}
          borderTopRightRadius={{ base: 0, md: "100%" }}
          width={{ base: "100%", md: "75%", lg: "65%", xl: "50%" }}
        >
          <SomeText />
        </Box>
      </Box>
      <Flex
        p={{ base: 5, xl: 20 }}
        marginY={10}
        flexDirection={{ base: "column", md: "row-reverse" }}
      >
        <Box
          width={{ base: "100%", xl: "70%" }}
          p={{ base: 0, md: 8 }}
          textAlign={{ base: "left", md: "left" }}
        >
          <Heading as="h2" size="2xl">
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: "full",
                height: "25%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: bl,
                zIndex: -1,
              }}
            >
              About Me
            </Text>
          </Heading>
          <Text marginTop={{ base: 3, md: 5 }} fontSize="xl">
            Hi I&apos;m Joshua Cancio, a George Mason Student and an aspiring ACS major.
          </Text>
          <Text marginTop={{ base: 1, md: 3 }} fontSize="xl">
            I mainly started programming as a hobby but after making projects
            and learning through youtube, I&apos;ve grown to adore it!
          </Text>
          <Text marginTop={{ base: 1, md: 3 }} fontSize="xl">
            I&apos;m passionate about Financial Technology, Cryptocurrency, AI 
            Research, PC Hardware, Web Development and
            Music!
          </Text>
          <Text marginTop={{ base: 1, md: 3 }} fontSize="xl">
            At home I love playing basketball and volleyball, playing piano and saxophone, cooking, and spending time with family.
          </Text>
          <Link href="/about" passHref>
            <ThemedButton top={3}>Read More</ThemedButton>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <ImageBox
            image="/IMG_5425.png"
            height={512}
            width={512}
            alt="Vercel Logo"
          />
        </Box>
      </Flex>
      <Flex direction="column" p={{ base: 1, md: 10, xl: 20 }} marginTop={10}>
        <Heading as="h2" size="2xl">
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: "full",
              height: "25%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: bl,
              zIndex: -1,
            }}
          >
            Featured Projects
          </Text>
        </Heading>
        {FeaturedProjectList.map((value) => (
          <FeaturedProject
            name={value.name}
            description={value.description}
            textc={textc}
            images={[value.images[0], value.images[1]]}
            key={value.id}
            tags={value.tags}
            link_icons={value.icons}
            height={value.height}
            width={value.width}
            alt={value.alt}
            reversed={value.reversed}
          />
        ))}
      </Flex>
      <Flex
        bg={bl}
        mb={5}
        p={{ base: 0, md: 10 }}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Flex justify="center" w="full">
          <Box
            w={{ base: "full", md: "100%", lg: "50%" }}
            px={4}
            py={10}
            textAlign={{ base: "left", md: "center" }}
          >
            <Box
              fontSize={{ base: "4xl", sm: "6xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              color="white"
              lineHeight="shorter"
              mb={{ base: 6, md: 3 }}
            >
              <Text display="block">Want to see more?</Text>
            </Box>{" "}
            <Link href="/projects" passHref>
              <ThemedButton
                bg="#ffffff"
                color="rgb(17, 17, 17)"
                marginX={5}
                paddingX={{ base: 5, md: 10 }}
              >
                View All Projects
              </ThemedButton>
            </Link>
          </Box>
        </Flex>
      </Flex>
      <Flex
        color="white"
        bg={bl}
        alignItems="center"
        textAlign={{ base: "center", md: "left" }}
        p={{ base: 2, md: 10 }}
        mt={10}
        rounded="lg"
      >
        <Flex direction="column">
          <Heading marginBottom={5} as="h2" size="2xl">
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: "full",
                height: "25%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: bl,
                zIndex: -1,
              }}
            >
              Contact Me
            </Text>
            <Text mt={3} fontSize={{ base: "sm", md: "md" }}>
              View all contact options
            </Text>
          </Heading>
        </Flex>
        <Spacer />
        <Link href="/contact" passHref>
          <ThemedButton
            bg="#ffffff"
            color="rgb(17, 17, 17)"
            marginX={5}
            rightIcon={<BsArrowRight />}
            paddingX={{ base: 5, md: 10 }}
          >
            Contact
          </ThemedButton>
        </Link>
        {/* <Box justifyContent="center" textAlign="center" fontSize="xl">
          <Flex>
            <IconWrapper icon={SiSublimetext} text="Sublime Text" />
            <IconWrapper icon={SiMacos} text="macos" />
            <IconWrapper icon={BsGithub} text="github" />
          </Flex>
        </Box> */}
      </Flex>
    </Box>
  );
};

export default Home;
