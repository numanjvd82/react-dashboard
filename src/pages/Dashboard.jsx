import { Button, Heading, useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  // ** getting functions from auth context
  const { currentUser, logout } = useAuth();

  // ** initializing hooks
  const toast = useToast();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      toast({
        title: 'Failed to Sign Out ',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <h1>Yolo</h1>
      <h1>{`logged In user email: ${currentUser?.email}`}</h1>
      <Heading size="2xl">Dashboard</Heading>
      <Button colorScheme="teal" onClick={() => handleLogout()} m={2} type="submit">
        Sign Out
      </Button>
    </>
  );
};

export default Dashboard;
