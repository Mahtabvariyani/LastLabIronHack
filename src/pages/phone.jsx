import React from 'react'
import PhoneCard from '../components/Phone/phoneCard'
import PhonesData from "../phones-data.json"
import PhoneCardDetail from '../components/Phone/PhoneCardDetail'
function phone() {
  return (
    <div>
      <PhoneCard  phones={PhonesData}  />
      <PhoneCardDetail />
    </div>
  )
}

export default phone
