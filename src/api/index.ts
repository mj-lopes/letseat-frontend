const API_URL = "https://lets-eat-apii.herokuapp.com";

export function pegarTodasReceitas(
  page: number,
  limite = 12,
  estrelas = 0,
  tempoMaximoPreparo = 9999,
) {
  const url = `${API_URL}/receitas?page=${page}&limite=${limite}`;
  const body = JSON.stringify({
    filtros: {
      estrelas: estrelas,
      tempoMaximoPreparo: tempoMaximoPreparo,
    },
  });

  return {
    url: url,
    options: {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    },
  };
}

export function pegarReceitaPorIngredientes(
  page: number,
  limite = 12,
  estrelas = 0,
  tempoMaximoPreparo = 9999,
  ingredientes: string[],
) {
  const url = `${API_URL}/busca/ingredientes?page=${page}&limite=${limite}`;
  const body = JSON.stringify({
    ingredientes,
    filtros: {
      estrelas: estrelas,
      tempoMaximoPreparo: tempoMaximoPreparo,
    },
  });

  return {
    url: url,
    options: {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    },
  };
}

export function pegarReceitaPorNome(
  page: number,
  limite = 12,
  estrelas = 0,
  tempoMaximoPreparo = 9999,
  nome: string,
) {
  const url = `${API_URL}/busca/${nome}?page=${page}&limite=${limite}`;
  const body = JSON.stringify({
    filtros: {
      estrelas: estrelas,
      tempoMaximoPreparo: tempoMaximoPreparo,
    },
  });

  return {
    url: url,
    options: {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    },
  };
}

export function pegarReceitaPorCategoria(
  page: number,
  limite = 12,
  estrelas = 0,
  tempoMaximoPreparo = 9999,
  categoria: string,
) {
  const url = `${API_URL}/receitas/categoria/${categoria}?page=${page}&limite=${limite}`;
  const body = JSON.stringify({
    filtros: {
      estrelas: estrelas,
      tempoMaximoPreparo: tempoMaximoPreparo,
    },
  });

  return {
    url: url,
    options: {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    },
  };
}

export function pegarReceitaPorID(receitaID: string) {
  const url = `${API_URL}/receitas/receita/${receitaID}`;

  return {
    url: url,
    options: {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    },
  };
}
