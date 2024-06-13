// src/hooks/useAuth.ts
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { createAccount, login } from "../api/api";
import { AuthenticationResponse, UserCredentials } from "../types/user";

export const useCreateAccount = (options?: UseMutationOptions<AuthenticationResponse, Error, UserCredentials, unknown>) => {
  return useMutation<AuthenticationResponse, Error, UserCredentials>({
    mutationFn: createAccount,
    ...options,
    onError: (error, variables, context) => {
      console.error("Error creating account:", error);
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
  });
};

export const useLogin = (options?: UseMutationOptions<AuthenticationResponse, Error, UserCredentials, unknown>) => {
  return useMutation<AuthenticationResponse, Error, UserCredentials>({
    mutationFn: login,
    ...options,
    onError: (error, variables, context) => {
      console.error("Error logging in:", error);
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
  });
};
