import { Box, Container, Flex, Heading } from '@chakra-ui/react';

const Todos = () => {
  const history = '';

  return (
    <Container maxW="container.lg">
      <Heading>Todos</Heading>
      <Box>
        <Flex direction={['column', 'row']}>
          <Box width="30%" bgColor="red">
            Todo Option
          </Box>
          <Box width="70%" bgColor="blue">
            Todos Itself
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Todos;
