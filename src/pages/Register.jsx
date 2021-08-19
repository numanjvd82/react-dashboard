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

const Register = () => {
  // ** initializing hooks
  const toast = useToast();
  const history = useHistory();

  // ** getting signup function from auth context
  const { signUp, loading, setLoading } = useAuth();

  // ** refs for the form inputs
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();

  // ** this function is called when the user clicks the submit button which checks that the input are not empty and the password match
  const handleSubmit = async () => {
    if (!emailRef.current.value || !passwordRef.current.value || !repeatPasswordRef.current.value) {
      toast({
        title: 'Cannot Register User!',
        description: 'These fields cannot be empty!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else if (passwordRef.current.value !== repeatPasswordRef.current.value) {
      return toast({
        title: 'Cannot Register User!',
        description: 'Passwords do not match!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      // ** this signUp function is called from the auth context which creates a account in the firebase database and then redirects to the login page.
      setLoading(true);
      try {
        await signUp(emailRef.current.value, passwordRef.current.value);
        history.push('/login');
      } catch (error) {
        toast({
          title: 'Failed to register an account ',
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

  /*eslint-disable */
  return (
    <>
      <Container alignItems="center" centerContent>
        <Heading size="2xl">Register User</Heading>
        <FormControl m={2} id="email">
          <FormLabel>Email address</FormLabel>
          <Input ref={emailRef} type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl m={2} id="password">
          <FormLabel>Password</FormLabel>
          <Input ref={passwordRef} type="password" />
        </FormControl>
        <FormControl m={2} id="repeat-password">
          <FormLabel>Repeat Password</FormLabel>
          <Input ref={repeatPasswordRef} type="password" />
        </FormControl>
        <Button
          colorScheme="teal"
          isDisabled={loading}
          onClick={() => handleSubmit()}
          m={2}
          type="submit"
        >
          Register
        </Button>
        <Text mt={2} fontSize="xl">
          Already have an account?
          <Link to="/login">
            <Badge
              px={2}
              borderRadius="5px"
              ml={2}
              fontSize="1.1rem"
              variant="subtle"
              colorScheme="green"
            >
              Log In
            </Badge>
          </Link>
        </Text>
      </Container>
    </>
  );
};

export default Register;
