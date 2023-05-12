const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {

      degree: 'masters',
      

    
    }
  };
  
  // Destructure the degree key from the education object
  const { education: { degree } } = user;
  
  console.log(degree); 
  