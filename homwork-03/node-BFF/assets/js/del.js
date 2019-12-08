  //阻止浏览器的默认行为
  function stopDefault( e ) { 
    //阻止默认浏览器动作(W3C) 
    if ( e && e.preventDefault ) 
        e.preventDefault(); 
    //IE中阻止函数器默认动作的方式 
    else {
      window.event.returnValue = false; 
    }
  }


  $('#del').on('click', function(e){
    stopDefault(e);
    fetch('/del/' + $('#b_id').text())
    .then(res => res.json())
    .then(json => {
      if(json.code === 0) {
        window.location.reload();
      }
    })
    .catch(err => {
      console.log('jjjjjj', err);
    })

  })
