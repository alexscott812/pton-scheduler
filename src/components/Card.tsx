import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

type CardProps = {
  children?: React.ReactNode;
  mb?: number;
};

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