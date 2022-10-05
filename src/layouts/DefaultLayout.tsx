import { Box, Flex } from '@chakra-ui/react';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Box position="relative" minW="100vw" minH="100vh" bg="blackAlpha.900">
      <Flex justify="center" align="center" direction="column">
        {children}
      </Flex>
    </Box>
  );
};

export { DefaultLayout };
