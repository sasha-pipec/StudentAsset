
function App() {
// fetch('http://127.0.0.1:8000/api/posts/', {
//   mode: 'no-cors',
//   method: 'GET',
//   headers: {
//     'token':'123',
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'content-length': '518' ,
//     'cross-origin-opener-policy': 'same-origin' ,
//     'referrer-policy': 'same-origin' ,
//     'server': 'WSGIServer/0.2 CPython/3.10.9 '

//   },
// })
let responce = fetch('http://127.0.0.1:8000/api/posts/', {
  mode: 'no-cors',
  method: 'GET',
  headers: {
    'token':'123',
    'Authorization': 'any',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'content-length': '518' ,
    'cross-origin-opener-policy': 'same-origin' ,
    'referrer-policy': 'same-origin' ,
    'server': 'WSGIServer/0.2 CPython/3.10.9 '
  }
})
  .then(function(data) {
    console.log('Request successful',data);
    return data;
  })
  if(responce.ok){
    let json = responce.json();
    console.log(json)
  }
  return (
   <div className="">

   </div>
  );
}

export default App;
