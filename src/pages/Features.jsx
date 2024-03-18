import React from 'react'
import Frequently from '../components/frequently/Frequently'
import Benefits from '../components/benefits/Benefits'
import Allthefeatures from '../components/allthefeatures/Allthefeatures'
import Useclient from '../components/useclients/Useclient'
import Revission from '../components/revission/Revission'
import Support from '../components/support/Support'
import Delivery from '../components/delivery/Delivery'

const Features = () => {
  return (
    <>
    <Allthefeatures/>
    <Benefits/>
    <Useclient/>
    <Revission/>
    <Support/>
    <Delivery/>
    <Frequently/>
    </>
  )
}

export default Features