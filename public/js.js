if(document.getElementsByClassName('addUser').length > 0){
  document.getElementById('myForm').onsubmit=(e)=>{
     var data = new URLSearchParams();
      for (const pair of new FormData(e.target)) {
         if(pair[1]){
          data.append(pair[0], pair[1])
         }
         else{
             console.log('Enter an item')
             return 
         }
      }
      console.log('post', data)
      fetch('/sent', {
              method: "post",
              body: data
          })
          .then(res => res.json())
          .then(res2 => {
            //location.reload();
          });
  }}


if(document.getElementsByClassName('editUser').length > 0){
  document.getElementById('updateForm').onsubmit=(e)=>{
     var data = new URLSearchParams();
      for (const pair of new FormData(e.target)) {
         if(pair[1]){
          data.append(pair[0], pair[1])
         }
         else{
             return 
         }
      }
      console.log(data)
      fetch('/update', {
              method: "put",
              body: data
          })
          .then(res => res.json())
          .then(res2 => {
            location.reload();
          });
    }}
   




function deleteMe(item){
    fetch('/remove/'+item,{
    method:"delete"
    }).then(res => res)
    .then(res2 => {
        location.reload();
    });
}