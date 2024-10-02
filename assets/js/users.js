let listaUser = [
    {
      nomeCad: "Isabele",       // Nome da pessoa
      userCad: "isabele123",    // Nome de usuário
      senhaCad: "isabele123"   // Senha
    }
  ];
  
  localStorage.setItem('listaUser', JSON.stringify(listaUser));