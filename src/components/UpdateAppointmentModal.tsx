import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Input,
  Select,
  Box,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from '@chakra-ui/react';
import Appointment from '../types/Appointment';

interface UpdateAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointmentToUpdate: Appointment | null;
};

const UpdateAppointmentModal = ({
  isOpen,
  onClose,
  appointmentToUpdate
}: UpdateAppointmentModalProps ) => {
  return (
    <Modal isOpen={ isOpen } onClose={ onClose }>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{ 'update appt' }</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <Text mb={ 2 }>{ 'name' }</Text>
          <Input variant={ 'filled' } placeholder={ 'name' } mb={ 4 } />
          <Text mb={ 2 }>{ 'start time' }</Text>
          <Select variant={ 'filled' } mb={ 4 } >

          </Select>
          <Text mb={ 2 }>{ 'appt length' }</Text>
          <Box px={ 4 } mb={ 4 }>
            <Slider defaultValue={ 30 } min={ 10 } max={ 60 } step={ 5 }>
              <SliderMark value={10} ml={ -3 } mt={ 2 } fontSize={ 'sm' }>{ '10m' }</SliderMark>
              <SliderMark value={20} ml={ -3 } mt={ 2 } fontSize={ 'sm' }>{ '20m' }</SliderMark>
              <SliderMark value={30} ml={ -3 } mt={ 2 } fontSize={ 'sm' }>{ '30m' }</SliderMark>
              <SliderMark value={40} ml={ -3 } mt={ 2 } fontSize={ 'sm' }>{ '40m' }</SliderMark>
              <SliderMark value={50} ml={ -3 } mt={ 2 } fontSize={ 'sm' }>{ '50m' }</SliderMark>
              <SliderMark value={60} ml={ -3 } mt={ 2 } fontSize={ 'sm' }>{ '60m' }</SliderMark>
              <SliderTrack bg={ 'green.100' }>
                {/* <Box position='relative' right={10} /> */}
                <SliderFilledTrack bg={ 'green.500' } />
              </SliderTrack>
              <SliderThumb boxSize={ 4 }/>
            </Slider>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button mr={ 3 } onClick={ onClose }>
            { 'close' }
          </Button>
          <Button colorScheme={ 'green' }>
            { 'update appt' }
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateAppointmentModal;