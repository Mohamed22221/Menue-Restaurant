import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderMeal from '../components/menue/HeaderMeal'
import RevAndDes from '../components/menue/mealDetails/review/RevAndDes'
import MealName from '../components/menue/MealName'

const OneMeal = () => {
   // params id 
   const Params = useParams()
   const ParamsId = `${Params.mealId}`

  return (
    <div>
     <HeaderMeal />
     <MealName ParamsId={ParamsId} />
     <RevAndDes ParamsId={ParamsId}/>
    </div>
  )
}

export default OneMeal