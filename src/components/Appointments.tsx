import {
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
  Box,
  Spacer
} from '@chakra-ui/react';
import {
  EditIcon,
  DeleteIcon
} from '@chakra-ui/icons';
import Card from './Card';
import Appointment from '../types/Appointment';

interface AppointmentsProps {
  data: Appointment[];
  onEditButtonClick: () => void;
  onDeleteButtonClick: () => void;
};

const Appointments = ({
  data,
  onEditButtonClick,
  onDeleteButtonClick
}: AppointmentsProps ) => {
  return (
    <>
      {
        data?.length
          ? <>
              {
                data.map((appt, i, arr) => (
                  <Card  
                    key={ appt.id }
                    mb={ (i !== arr.length - 1) ? 4 : 0 } 
                  >
                    <Flex align={ 'start' }>
                      <Box>
                        <Text fontWeight={ 'semibold' }>{ appt.name }</Text>
                        <Text>{ `${ appt.start_time } - ${ appt.end_time }` }</Text>
                      </Box>
                      <Spacer />
                      <Menu>
                        <MenuButton
                          as={ IconButton }
                          variant={ 'ghost' }
                          aria-label={ 'options' }
                          size={ 'xs' }
                          icon={ <Text fontWeight={ 'semibold' }>{ '···' }</Text> }
                        />
                        <MenuList>
                          <MenuItem
                            icon={ <EditIcon /> }
                            onClick={ onEditButtonClick }
                          >
                            { 'edit' }
                          </MenuItem>
                          <MenuItem
                            icon={ <DeleteIcon /> }
                            onClick={ onDeleteButtonClick }
                          >
                            { 'delete' }
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Flex>
                  </Card>
                ))
              }
            </>
          : <Text>{ 'there are no appointments yet.' }</Text>
      }
    </>
  );
};

export default Appointments;