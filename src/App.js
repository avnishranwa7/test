import database from './firebase';
import SearchAppBar from './search';
import MediaCard from './Card';
import React, {useState, useEffect} from 'react';

function App(){
  const [details, setDetails] = useState([]);
  database.collection("details")
  .get()
  .then(querySnapshot => {
  const data = querySnapshot.docs.map(doc => doc.data());
  setDetails(data); // array of cities objects
});
  
  return(
        <div>
            {details.map(user => (
              <MediaCard name={user.Name} email={user.Email} image={user.Image}/>
              
            ))}
        </div>
        
    
);
}

export default App;
