import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <Alert status='error' bottom={'4'} position={'fixed'} left={'50%'} transform={'translateX(-50%)'} w={'container.lg'} justifyContent={'center'}>
      <AlertIcon/>
      {message}
    </Alert>
  )
}

export default ErrorComponent
