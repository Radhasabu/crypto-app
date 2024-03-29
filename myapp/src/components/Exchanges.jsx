import React, { useEffect, useState } from 'react'
import axios from "axios"
import {server} from "../index";
import { Container, HStack ,VStack ,Image,Heading,Text} from '@chakra-ui/react';
import Loader from "./Loader";
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

    const [exchanges,setExchanges]= useState([]);
    const [loading, setLoading]= useState(true);
    const [error,setError]=useState(false);

  useEffect(()=>{
    const fetchExchanges = async()=>{
       try{
        const {data} =await axios.get(`${server}/exchanges`);

        console.log(data);
        setExchanges(data);
        setLoading(false);
       }
       catch{
        setLoading(false);
        setError(true);

       }
    }; 
    fetchExchanges();
  },[]);
  if (error) return <ErrorComponent message="Error while fetching exchanges"/>
  return <Container maxW={'container.xl'}>
    {loading ? <Loader/> : <>
            <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
              { 
                exchanges.map((i)=>(
                  <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
                ))
              }
            </HStack>
    </>}
  </Container>
}

export default Exchanges

const ExchangeCard=({name,img,rank,url})=>(
  <a href={url} target='blank'>
    <VStack w={'52'} shadow={'base'} p={'8'} borderRadius={'lg'} transition={"all 0.3s"} m={'4'} css={{
      "&:hover":{
        transform:"scale(1.1)"
      }
    }}>
      <Image src={img} h={'10'} w={'10'} objectFit={'contain'} alt='Exchanges' />
      <Heading fontSize={'md'} noOfLines={1}>
        {rank}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
)
