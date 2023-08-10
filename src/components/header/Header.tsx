'use client'
import "./header.css"
import Link from 'next/link';
import { Avatar, Stack } from '@chakra-ui/react';


export default function Header() {
  return (
    <header className="header">
      <h1>Novos/Seminovos</h1>
      <Link href={`/home`}>Automóveis</Link>
      <div className="container-welcome-user">
        <Stack direction='row'>
          <Avatar src='https://bit.ly/broken-link' backgroundColor={"#4a5a11"}/>
        </Stack>
        <div>
          <p> Olá, Visitante </p>
          <p>Entre</p>
        </div>
      </div>
    </header>
  );
};