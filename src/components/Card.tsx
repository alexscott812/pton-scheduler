import {
  Box,
  BoxProps,
  useColorModeValue
} from '@chakra-ui/react';

interface CardProps extends BoxProps {};

const Card = ({
  children,
  mb
}: CardProps ) => {
  return (
    <Box
      bg={ useColorModeValue('white', 'gray.800') }
      borderRadius={ 'lg' }
      borderWidth={ 1 }
      p={ 4 }
      mb={ mb }
    >
      { children }
    </Box>
  )
};

export default Card;