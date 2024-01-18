export const ContributionsLevels = () => {
   return (
      <div className="cotribution_levels">
         <span style={{marginRight: 10}}>Меньше</span> 
            <div className="level_zero"><span className="tooltip_graph_item">No contribution</span>
         </div>
         <div className="level_one"><span className="tooltip_graph_item">1-9 contribution</span>
         </div>
         <div className="level_two"><span className="tooltip_graph_item">10-19 contribution</span>
         </div>
         <div className="level_three"><span className="tooltip_graph_item">19-30 contribution</span>
         </div>
         <div className="level_four"><span className="tooltip_graph_item">30+ contribution</span>
         </div>   
         <span style={{marginLeft: 10}}>Больше</span> 
         </div>
   );
};