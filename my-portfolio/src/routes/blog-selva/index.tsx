import React from 'react'
import {Banner} from './banner/Banner';
import { Miolo } from './Miolo/Miolo';
import {Cards} from './cards/Cards';
import {Footer} from './footer/Footer';

export const BlogSelva = () => {
  return (
    <div>
      <Banner />
      <Miolo />
      <Cards />
      <Footer />
    </div>
  )
}
