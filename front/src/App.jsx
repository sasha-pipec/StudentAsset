import React, {useEffect} from "react";
import Item from "./Item";

function App() {
  let [item, setItem] = React.useState([])
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/posts/', {
    method:'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'content-length': '518' ,
    }
  })
  .then((res)=>{
    if(res.ok){
      
      return res;
      
    }else{
      console.log('idi nah',res)
    }
  })
  .then((posts)=>{return posts.json()})
  .then(function(value){
    console.log(value.posts);
})
  },[])

    return (
     <div>
      <Item>

      </Item>
     </div>
    );
  }

export default App;
