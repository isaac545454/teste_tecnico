import { useNavigate } from "react-router-dom"
import { Empty } from "../../components/Empty"
import { PATH } from "../../routes/path"

export const PurchaseMade = () => {
  const navigate = useNavigate()
  return <Empty type="sucess" onClick={() => navigate(PATH.HOME)} />
}
