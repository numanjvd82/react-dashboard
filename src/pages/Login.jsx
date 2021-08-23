// ** importing React, Chakra and Link
import {
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
  useToast,
  Heading,
  Text,
  Badge,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  // ** initializing hooks
  const toast = useToast();
  const history = useHistory();

  // ** getting required functions and const from auth context
  const { login, loading, setLoading } = useAuth();

  // ** refs for the form inputs
  const emailRef = useRef();
  const passwordRef = useRef();

  // ** this function is called when the user clicks the submit button which checks that the input are not empty and the password match
  const handleSubmit = async () => {
    console.log('yolo');
    if (!emailRef.current.value || !passwordRef.current.value) {
      toast({
        title: 'Cannot Register User!',
        description: 'These fields cannot be empty!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      // ** this login function is called from the auth context which logs you in and then redirects to the dashboard page.
      setLoading(true);
      try {
        await login(emailRef.current.value, passwordRef.current.value);
        history.push('/');
      } catch (error) {
        toast({
          title: 'Failed to Log In ',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        console.log(error);
        setLoading(false);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Container alignItems="center" centerContent>
        <Heading size="2xl">Login User</Heading>
        <FormControl m={2} id="email">
          <FormLabel>Email address</FormLabel>
          <Input ref={emailRef} type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl m={2} id="password">
          <FormLabel>Password</FormLabel>
          <Input ref={passwordRef} type="password" />
        </FormControl>
        <Button
          colorScheme="teal"
          isDisabled={loading}
          onClick={() => handleSubmit()}
          m={2}
          type="submit"
        >
          Log In
        </Button>
        <Text mt={2} fontSize="xl">
          Don't have an account?
          <Link to="/register">
            <Badge
              px={2}
              borderRadius="5px"
              ml={2}
              fontSize="1.1rem"
              variant="subtle"
              colorScheme="green"
            >
              Register
            </Badge>
          </Link>
        </Text>
      </Container>
    </>
  );
};

export default Login;
