import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Auth } from '@/components/auth'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
import { db } from '@/config/firebase'
import { getDocs, collection } from "firebase/firestore"

export default function Home() {
const [lists,setLists]=useState([]);
const collectio = collection(db,"sutters")
useEffect(()=>
{
   const getlist= async ()=>
   {
      try{
        const data= await getDocs(collectio);
        console.log(data);
      }catch(err){
        console.log(err);
      }

   };
   getlist();
},[]);

  return (
    <>
    <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQs-UH3h80G4dwE5JNwuv9aAKZpUJXMFE&libraries=places"></script>

      <Auth/>
      
    </>
  )
}
