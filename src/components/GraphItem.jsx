import { useEffect, useState } from 'react';
import { GetContributionsGraph } from '../hooks/GetContributionsGraph/GetContributionsGraph.js';
import { getLevelGraph } from '../helpers/getLevelGraph/getLevelGraph.js';


export const GraphItem = ({ graphsItems }) => {
   const [contributionsArr, setContributionsArr] = useState();
   const getContributions = GetContributionsGraph;

   useEffect(() => {
      async function fetchData() {
         const data = await getContributions();
         setContributionsArr(data);
      }
      fetchData();
    }, [graphsItems]);

    if(contributionsArr) {
      graphsItems.forEach(day => {
         let dayNum = new Date(day.date).toJSON().replaceAll('-', '');
         for (let [key, value] of Object.entries(contributionsArr)) {
            let keyNum = key.replaceAll('-', '')
            if(parseInt(keyNum) === (parseInt(dayNum) + 1)) {
              day.value = value;
            } 
        }
      })
    }

   return (
      <div>
         <div className='wrapper_graph_items'> 
         { graphsItems.map(graph => <div className={getLevelGraph(graph.value)} key={graph.date}>
            <span className='tooltip_graph_item'> {graph.value !== 0 ? graph.value : 'No'} contribution<br /> {graph.date} </span>
         </div>) }
      </div>
      </div>
      
   );
};