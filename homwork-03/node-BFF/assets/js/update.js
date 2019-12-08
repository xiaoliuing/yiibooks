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


  $('#form-data').on('submit', function(e){
    stopDefault(e);
    const params = new URLSearchParams();
    params.append('b_name', $('#name').val());
    params.append('b_autor', $('#autor').val());
    params.append('b_price', $('#price').val());
    fetch('/update/' + $('#b_id').val(), {
      method: 'POST',
      body: params,
    })
    .then(res => res.json())
    .then(json => {
      if(json.code === 0) {
        window.location.href = '/home'
      }
    })
    .catch(err => {
      console.log('jjjjjj', err);
    })

  })
