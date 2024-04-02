import { useNavigate } from "react-router-dom"
import ImageSucess from "/sucesso.svg"
import { PATH } from "../../routes/path"
import { Empty } from "../../components/Empty"

export const PurchaseMade = () => {
  const navigate = useNavigate()

  return (
    <Empty
      img={ImageSucess}
      onClick={() => navigate(PATH.HOME)}
      textButton="VOLTAR"
      title="Compra realizada com sucesso!"
    />
  )
}
