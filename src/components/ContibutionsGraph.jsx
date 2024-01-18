import { useCallback, useEffect, useState } from "react";
import { GraphItem } from "./GraphItem";
import {ContributionsLevels} from './ContributionsLevels'
import { DaysNames } from './DaysNames'

export const СontibutionsGraph = () => {
   const [arrayDays, setArrayDays] = useState([])

   const calc_date = useCallback((day) => {
         let currentDay = new Date();
         currentDay.setUTCDate(currentDay.getDate() + day)
         return currentDay.toDateString();
   }, [])

   useEffect(() => {
      let daysOnYear = [];
      for(let i = 0; i <= 353; i++) {
         let day = calc_date(-i);
         daysOnYear.unshift({ date: day, value: 0 });
      }
      setArrayDays(daysOnYear);
   }, [])


   return (
      <div className="main_wrapper">
        <div className='container'>
         <DaysNames />
         <GraphItem graphsItems={arrayDays}/>
         <ContributionsLevels />
      </div> 
      </div>
      
   );
};