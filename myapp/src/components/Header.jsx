import { HStack ,Button} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'}>
        <Button variant={'solid'} p={'4'} >
            <Link to="/">Home</Link>
        </Button>
        <Button variant={'solid'} p={'4'}>
            <Link to="/coins">Coins</Link>
        </Button>
        <Button variant={'solid'} p={'4'}>
            <Link to="/exchanges">Exchanges</Link>
        </Button>
    </HStack>
  )
}

export default Header
