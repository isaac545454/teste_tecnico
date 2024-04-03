export const formatPrice = (value: number) => {
  return value.toFixed(2).toString().replace(".", ",")
}
