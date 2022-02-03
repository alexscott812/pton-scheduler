import { useState } from 'react';
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
  useDisclosure,
  UseDisclosureProps
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
import Appointment from '../types/Appointment';
import CreateAppointmentModal from './CreateAppointmentModal';
import UpdateAppointmentModal from './UpdateAppointmentModal';
import DeleteAppointmentModal from './DeleteAppointmentModal';

const Main = () => {

  const date = new Date();

  type UseColorModeProps = {
    colorMode: 'light' | 'dark';
    toggleColorMode: () => void;
  };

  const {
    colorMode,
    toggleColorMode
  }: UseColorModeProps = useColorMode();

  const {
    isOpen: isCreateAppointmentModalOpen,
    onOpen: onCreateAppointmentModalOpen,
    onClose: onCreateAppointmentModalClose
  }: UseDisclosureProps = useDisclosure();
  const {
    isOpen: isUpdateAppointmentModalOpen,
    onOpen: onUpdateAppointmentModalOpen,
    onClose: onUpdateAppointmentModalClose
  }: UseDisclosureProps = useDisclosure();
  const {
    isOpen: isDeleteAppointmentModalOpen,
    onOpen: onDeleteAppointmentModalOpen,
    onClose: onDeleteAppointmentModalClose
  }: UseDisclosureProps = useDisclosure();

  const appointmentsData: Appointment[] = [{
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

  const [appointmentToCreate, setAppointmentToCreate] = useState<Appointment | null>(null);
  const [appointmentToUpdate, setAppointmentToUpdate] = useState<Appointment | null>(null);
  const [appointmentToDelete, setAppointmentToDelete] = useState<Appointment | null>(null);

  return (
    <>
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
            <Box flexGrow={ 1 }>
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
            onClick={ onCreateAppointmentModalOpen }
            mb={ 4 }
          >
            { 'add appt' }
          </Button>
          <Appointments
            data={ appointmentsData } 
            onUpdateButtonClick={ onUpdateAppointmentModalOpen }
            onDeleteButtonClick={ onDeleteAppointmentModalOpen }
          />
        </Card>
      </Container>
      <CreateAppointmentModal 
        isOpen={ isCreateAppointmentModalOpen }
        onClose={ onCreateAppointmentModalClose }
        appointmentToCreate={ appointmentToCreate }
      />
      <UpdateAppointmentModal 
        isOpen={ isUpdateAppointmentModalOpen }
        onClose={ onUpdateAppointmentModalClose }
        appointmentToUpdate={ appointmentToUpdate }
      />
      <DeleteAppointmentModal 
        isOpen={ isDeleteAppointmentModalOpen }
        onClose={ onDeleteAppointmentModalClose }
        appointmentToDelete={ appointmentToDelete }
      />
    </>
  );
};

export default Main;