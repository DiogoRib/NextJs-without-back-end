export function createcomponent(text,stock,preco)
{    
    var component = JSON.parse(localStorage.getItem('component'));
    if(component == null){component = [];}
    else{
      for(var i = 0; i < component.length; i++) //check if email already exists
      {
        if(component[i].text === text){
          return  alert( 'O componente já existe!');
        }
      }
    }
    

    if(component.length != 0){
      var lastId = component[component.length -1].id + 1;
    }else{
      var lastId = 0;
    }

    //add user to array
    component.push({id:lastId, text: text, stock: stock, preco: preco});

    //save array to local storage
    localStorage.setItem('component', JSON.stringify(component));
    

    //return integer and string as object
    return alert('Componente criado com sucesso!');

    
}


export function Deletecomponent(id){
  var compo =  JSON.parse(localStorage.getItem('component'));
  if(compo == null){return;}
  for(var i = 0; i < compo.length; i++)
  {
    if(compo[i].id === id){
      compo.splice(i,1);
    }
  }
  
  localStorage.setItem('component', JSON.stringify(compo));
}

export function Updatecomponent(id,text,stock,preco)
{
  var compo =  JSON.parse(localStorage.getItem('component'));
  if(compo == null){return;}
  for(var i = 0; i < compo.length; i++)
  {
    if(compo[i].id == id)
    {
      compo[i].text = text;
      compo[i].stock = stock;
      compo[i].preco = preco;
    }
  }
  
  localStorage.setItem('component', JSON.stringify(compo));
}

export function postmodelGetById(id){
  var compo = JSON.parse(localStorage.getItem('component'));
  if(compo == null){return null;}
  if(compo.length == 0){return null;}
  for(var i = 0; i < compo.length; i++)
  {
    if(compo[i].id == id){
      return compo[i];
    }
  }
}
