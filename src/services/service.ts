import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

/**
 * Cria uma instância do axios com a baseURL configurada para o servidor.
 */
export const api = axios.create({
  baseURL: baseUrl,
});
