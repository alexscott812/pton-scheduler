import {
  Button,
  IconButton,
  Container,
  Flex,
  Heading,
  Divider,
  Spacer,
  useDisclosure,
  useColorMode,
  UseDisclosureProps
} from '@chakra-ui/react';
import {
  AddIcon,
  SunIcon,
  MoonIcon
} from '@chakra-ui/icons';
import Card from './Card';
import Appointments from './Appointments';

const Main = () => {

  const {
    colorMode,
    toggleColorMode
  }: {
    colorMode: 'light' | 'dark',
    toggleColorMode: () => void
  } = useColorMode();

  const appointmentsData = [{
    id: '1',
    name: 'alex',
    start_time: '7:00 AM',
    end_time: '7:30 AM'
  }, {
    id: '2',
    name: 'erik',
    start_time: '8:00 AM',
    end_time: '8:30 AM'
  }];

  return (
    <Container maxW={ 'container.sm' } py={ 4 }>
      <Card>
        <Flex align={ 'center' } justify={ 'center' } mb={ 4 }>
          <Heading>{ 'pton-scheduler' }</Heading>
          <Spacer />
          <IconButton
            aria-label={ 'toggle-color-mode' }
            onClick={ toggleColorMode }
            icon={ colorMode === 'light' ? <MoonIcon /> : <SunIcon /> }
          />
        </Flex>
        <Divider mb={ 4 } />
        <Button
          isFullWidth
          colorScheme={ 'green' }
          leftIcon={ <AddIcon /> }
          mb={ 4 }
        >
          { 'add appt' }
        </Button>
        <Appointments
          data={ appointmentsData }
        />
      </Card>
    </Container>
  );
};

export default Main;