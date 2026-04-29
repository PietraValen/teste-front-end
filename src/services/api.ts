// Substitua axios por fetch se preferir, ou configure o client aqui
export const api = {
  get: async (endpoint: string) => {
    // Configuração base da API
    const response = await fetch(`http://localhost:3333${endpoint}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return { data: await response.json() };
  }
};
