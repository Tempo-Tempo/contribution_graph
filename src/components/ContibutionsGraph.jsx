import { useCallback, useEffect, useState } from "react";
import { GraphItem } from "./GraphItem";
import {ContributionsLevels} from './ContributionsLevels'
import { WeeksNames } from './WeeksNames'

export const СontibutionsGraph = () => {
   const [arrayDays, setArrayDays] = useState([])

   const calc_date = useCallback((day) => {
         let currentDay = new Date();
         currentDay.setUTCDate(currentDay.getDate() + day)
         return currentDay.toDateString();
   }, [])

   useEffect(() => {
      let daysOnYear = [];
      for(let i = 0; i <= 356; i++) {
         let day = calc_date(-i);
         daysOnYear.unshift({ date: day, value: 0 });
      }
      setArrayDays(daysOnYear);
   }, [])


   return (
      <div className="main_wrapper">
        <div className='container'>
         <WeeksNames />
         <GraphItem graphsItems={arrayDays}/>
         <ContributionsLevels />
      </div> 
      </div>
      
   );
};