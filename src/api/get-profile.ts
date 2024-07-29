import { userProfilePath } from "../constants/paths";
import { api } from "../services/service";

export interface getProfileResponse {
  name: string;
}

/**
 * Função responsável por buscar os dados do usuário.
 *
 * Esta função encapsula uma chamada HTTP GET usando axios para buscar os dados do usuário.
 *
 * @param {getProfileResponse} - Interface que contém os dados do usuário.
 * @returns {Promise<getProfileResponse>} - Uma Promise que é resolvida com os dados do usuário.
 */
export async function getProfile() {
  const response = await api.get<getProfileResponse>(userProfilePath);

  return response.data;
}
