import {
  Button,
  IconButton,
  Container,
  Flex,
  Box,
  Text,
  Heading,
  Divider,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import {
  AddIcon,
  SunIcon,
  MoonIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@chakra-ui/icons';
import Card from './Card';
import Appointments from './Appointments';

const Main = () => {

  const date = new Date();

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
    start_time: '7:00 am',
    end_time: '7:30 am'
  }, {
    id: '2',
    name: 'erik',
    start_time: '8:00 am',
    end_time: '8:30 am'
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
        <Flex align={ 'center' } justify={ 'center' } mb={ 4 }>
          <IconButton
            aria-label={ 'decrease-date-by-day' }
            icon={ <ChevronLeftIcon /> }
          />
          <Box flexGrow={1}>
            <Text align={ 'center' } fontWeight={ 'bold' }>
              { date.toLocaleDateString() }
            </Text>
          </Box>
          <IconButton
            aria-label={ 'increase-date-by-day' }
            icon={ <ChevronRightIcon /> }
          />
        </Flex>
        <Button
          isFullWidth
          colorScheme={ 'green' }
          leftIcon={ <AddIcon /> }
          mb={ 4 }
        >
          { 'add appt' }
        </Button>
        <Appointments data={ appointmentsData } />
      </Card>
    </Container>
  );
};

export default Main;