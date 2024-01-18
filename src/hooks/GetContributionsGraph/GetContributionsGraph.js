import axios from 'axios';

export const GetContributionsGraph = async () => {
 try {
   const respone = await axios.get('https://dpg.gg/test/calendar.json');
   return respone.data
 } catch (e) {
   console.log(e)
 }
}