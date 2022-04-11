export function createUser(text,email,password)
{    
    var users = JSON.parse(localStorage.getItem('users'));
    if(users == null){users = [];}
    else{
      for(var i = 0; i < users.length; i++) //check if email already exists
      {
        if(users[i].email === email){
          alert( 'O email já existe!');
        }
      }
    }

    //verify if email is valid
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
      return alert('Email invalido!');
    }
    

    if(users.length != 0){
      var lastId = users[users.length -1].id + 1;
    }else{
      var lastId = 0;
    }

    //add user to array
    users.push({id:lastId, text: text, email: email, password: password});

    //save array to local storage
    localStorage.setItem('users', JSON.stringify(users));

    //return integer and string as object
    return alert( 'Contra criada com sucesso!');
}

export function loginUser(email,password)
{
  

  var users = JSON.parse(localStorage.getItem('users'));
  
  if(users == null){ return  {status: 0, message: 'Não existe nenhuma conta!'};}

  for(var i = 0; i < users.length; i++) //check if email already exists
  {
    if(users[i].email === email && users[i].password === password)
    {
      var user = {Email: email, password: password};
      localStorage.setItem('sessionUser', JSON.stringify(user));
      return {status: 1, message: 'Login efetuado com sucesso!'};
    }
  }

  return  {status: 0, message: 'Email ou Palavra-Passe Incorreta!'};
}




export function isLoggedIn()
{
  var user = localStorage.getItem('sessionUser');
  if(user == null)
  {return 0;}
  return 1;
}