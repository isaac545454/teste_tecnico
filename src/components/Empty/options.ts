import ImageSucess from "/sucesso.svg"

import ImageEmpity from "/Group.svg"

export type TypeEmpity = keyof typeof optionsEmpty

export const optionsEmpty = {
  sucess: {
    textButton: "VOLTAR",
    title: "Compra realizada com sucesso!",
    img: ImageSucess,
  },
  back: {
    textButton: "Recarregar página",
    title: "Parece que não há nada por aqui :(",
    img: ImageEmpity,
  },
}
