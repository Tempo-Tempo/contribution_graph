import { useCallback, useEffect, useState } from "react";
import { GraphItem } from "./GraphItem";
import {ContributionsLevels} from './ContributionsLevels'
import { WeeksNames } from './WeeksNames'

export const СontibutionsGraph = () => {
   const [arrayDays, setArrayDays] = useState([])

   const calc_date = useCallback((day) => {
         let currentDay = new Date();
         currentDay.setUTCDate(currentDay.getDate() + day)
         const test = new Date().getDate() - 356;
         console.log(test)
         return currentDay.toDateString();
   }, [])

   useEffect(() => {
      let daysOnYear = [];
      const test = new Date().getDate() + 337;
      console.log(test)
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