const API_URL = "https://lets-eat-apii.herokuapp.com/";

export function pegarTodasReceitas() {
  return {
    url: API_URL,
    options: {
      method: "GET",
    },
  };
}
