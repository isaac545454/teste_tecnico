import { MutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import {
  FinalizePurchaseParams,
  FinalizePurchase,
} from "../http/FinalizePurchase"

export type MutationProps<TResponse, TError, TParams> = Omit<
  MutationOptions<TResponse, TError, TParams>,
  "mutationFn"
>

export const useMutationFinalizePurchase = ({
  ...rest
}: MutationProps<unknown, AxiosError, FinalizePurchaseParams> = {}) => {
  return useMutation<unknown, AxiosError, FinalizePurchaseParams>({
    mutationFn: (data) => FinalizePurchase(data),
    ...rest,
  })
}
