
import  { useEffect} from 'react';
const uniqueId = "1699540946719-xbwogb";

export default function fetchData() {
  fetch('/api/retrieveData')
    .then((res) => res.json())
    .then((data) => {
      console.log('Retrieved data:', data);
    });
}


  fetchData();


export { uniqueId };
