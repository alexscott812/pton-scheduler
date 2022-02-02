import {
  Text,
  IconButton
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import Card from './Card';

type Appointment = {
  id: string,
  name: string,
  start_time: string,
  end_time: string
};

type AppointmentsProps = {
  data: Appointment[],
  onUpdateButtonClick: () => void,
  onDeleteButtonClick: () => void
};

const Appointments = ({
  data,
  onUpdateButtonClick,
  onDeleteButtonClick
}: AppointmentsProps ) => {
  return (
    <>
      {
        data?.length
          ? data.map((appt, i, arr) => (
              <Card  
                key={ appt.id }
                mb={ (i !== arr.length - 1) ? 4 : 0 } 
              >
                <Text fontWeight={ 'semibold' }>{ appt.name }</Text>
                <Text>{ `${ appt.start_time } - ${ appt.end_time }` }</Text>
                <IconButton
                  aria-label={ 'edit-appt' }
                  size={ 'sm' }
                  icon={ <EditIcon /> }
                  onClick={ onUpdateButtonClick }
                />
                <IconButton
                  aria-label={ 'delete-appt' }
                  size={ 'sm' }
                  colorScheme={ 'red' }
                  icon={ <DeleteIcon /> }
                  onClick={ onDeleteButtonClick }
                />
              </Card>
            ))
          : <Text>{ 'there are no appointments yet.' }</Text>
      }
    </>
  );
};

export default Appointments;