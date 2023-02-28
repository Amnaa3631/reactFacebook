import React from 'react';
import AppNavbar from '../../components/AppNavbar';
import UserDetails from '../../components/UserDetails';
import CardList from './CardList';

export default function Home() {
  return (
    <>
      <UserDetails />
      <AppNavbar />
      <CardList />
    </>
  )
}
