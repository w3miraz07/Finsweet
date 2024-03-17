import React from 'react'
import Banner from '../components/banner/Banner'
import Work from '../components/work/Work'
import Project from '../components/project/Project'
import Features from '../components/features/Features'
import Clients from '../components/clients/Clients'
import Frequently from '../components/frequently/Frequently'
import Building from '../components/building/Building'
import Ourblog from '../components/ourblog/Ourblog'

const Home = () => {
  return (
    <>
    <Banner/>
    <Work/>
    <Project/>
    <Features/>
    <Clients/>
    <Frequently/>
    <Building/>
    <Ourblog/>
    </>
  )
}

export default Home