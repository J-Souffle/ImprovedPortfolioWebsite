import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} - Made with ❤️ by{" "}
        <Link>Joshua</Link>
      </Text>
    </Flex>
  );
};

export default Footer;
