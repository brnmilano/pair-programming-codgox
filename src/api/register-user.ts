import { registerUserPath } from "../constants/paths";
import { api } from "../services/service";

export interface postRegisterUserRequest {
  name: string;
}

/**
 * Função responsável por cadastrar um usuário.
 *
 * Esta função encapsula uma chamada HTTP POST usando axios para cadastrar um usuário.
 *
 * @param {postRegisterUserRequest} - Interface que contém os dados do usuário.
 * @returns {Promise<postRegisterUserRequest>} - Uma Promise que é resolvida com os dados do usuário.
 */
export async function registerUser({ name }: postRegisterUserRequest) {
  await api.post<postRegisterUserRequest>(registerUserPath, { name });
}
