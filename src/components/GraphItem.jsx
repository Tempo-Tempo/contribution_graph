import { useEffect, useState } from 'react';
import { GetContributionsGraph } from '../hooks/GetContributionsGraph/GetContributionsGraph.js';
import { getLevelGraph } from '../helpers/getLevelGraph/getLevelGraph.js';
import './ContributionsGraph.css';

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
      graphsItems.map((day) => {
         const handleItem = new Date(day.date).toJSON().slice(0, 10);
         for (let [key, value] of Object.entries(contributionsArr)) {
            if(key === handleItem) {
              day.value = value;
            } 
        }
      })
    }

   return (
      <div className='wrapper_graph_items'> 
         { graphsItems.map(graph => <div className={getLevelGraph(graph.value)} key={graph.date}>
            <span className='tooltip_graph_item'> {graph.value !== 0 ? graph.value : 'No'} contribution<br /> {graph.date} </span>
         </div>) }
      </div>
   );
};