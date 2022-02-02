import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text
} from '@chakra-ui/react';

type DeleteAppointmentModalProps = {
  isOpen: boolean,
  onClose: () => void
};

const DeleteAppointmentModal = ({ isOpen, onClose }: DeleteAppointmentModalProps ) => {
  return (
    <Modal isOpen={ isOpen } onClose={ onClose }>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{ 'delete appt' }</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={ 2 }>{ 'are you sure you want to delete this appointment?' }</Text> 
        </ModalBody>
        <ModalFooter>
          <Button mr={ 3 } onClick={ onClose }>
            { 'close' }
          </Button>
          <Button colorScheme={ 'red' }>
            { 'delete appt' }
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

};

export default DeleteAppointmentModal;