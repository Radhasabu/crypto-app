import React, { useEffect, useState } from 'react'
import axios from "axios"
import {server} from "../index";
import { Container, HStack ,VStack ,Image,Heading,Text, Button, RadioGroup, Radio} from '@chakra-ui/react';
import Loader from "./Loader";
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';

const Coins = () => {

    const [coins,setCoins]= useState([]);
    const [loading, setLoading]= useState(true);
    const [error,setError]=useState(false);
    const [page,setPage]=useState(1);
    const [currency,setCurrency]=useState("inr");

    const currencySymbol = currency==="inr"?"₹":currency==="eur"?"€":"$";

    const changePage =(page)=>{
        setPage(page);
        setLoading(true);
    }

    const btns  = new Array(132).fill(1);

    useEffect(()=>{
    const fetchCoins = async()=>{
       try{
        const {data} =await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);

        console.log(data);
        setCoins(data);
        setLoading(false);
       }
       catch{
        setLoading(false);
        setError(true);

       }
    }; 
    fetchCoins();
  },[currency,page]);
  if (error) return <ErrorComponent message="Error While fetching coins"/>


  return <Container maxW={'container.xl'}>
    {loading ? <Loader/> : <>

            <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
              <HStack spacing={'4'}>
                <Radio value="inr">INR</Radio>
                <Radio value="usd">USD</Radio>
                <Radio value="eur">EUR</Radio>
              </HStack>
            </RadioGroup>
            <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
              { 
                coins.map((i)=>(
                  <CoinCard key={i.id} name={i.name} img={i.image} symbol={i.symbol} price={i.current_price} currencySymbol={currencySymbol}/>
                ))
              }
            </HStack>
            <HStack w={'full'} overflowX={'scroll'} p={'8'}>
              {
                btns.map((item,index)=>(
                  <Button key={index} bgColor={'blackAlpha.900'} color={'white'} onClick={()=>changePage(index+1)}>
                    {index+1}
                  </Button>
                ))
              }
            </HStack>
    </>}
  </Container>
}

export default Coins

// const ExchangeCard=({name,img,rank,url})=>(
//   <a href={url} target='blank'>
//     <VStack w={'52'} shadow={'base'} p={'8'} borderRadius={'lg'} transition={"all 0.3s"} m={'4'} css={{
//       "&:hover":{
//         transform:"scale(1.1)"
//       }
//     }}>
//       <Image src={img} h={'10'} w={'10'} objectFit={'contain'} alt='Exchanges' />
//       <Heading fontSize={'md'} noOfLines={1}>
//         {rank}
//       </Heading>
//       <Text noOfLines={1}>{name}</Text>
//     </VStack>
//   </a>
// )