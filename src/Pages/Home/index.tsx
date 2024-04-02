import { CardProduct } from "../../components/CardProduct"
import { Search } from "../../components/Search"
import { Spinner } from "../../components/Sprinner"
import ImageEmpity from "/Group.svg"
import * as S from "./style"
import { useHome } from "./HomeModel"
import { Button } from "../../components/Button"

export const Home = () => {
  const {
    AddItemCart,
    ProductsError,
    ProductsRefetch,
    dataProducts,
    filter,
    isLoadingProducts,
    setFilter,
    verifyCount,
  } = useHome()

  if (isLoadingProducts) return <Spinner />
  if (ProductsError) {
    return (
      <S.NotItens>
        <S.TextMessage>Parece que não há nada por aqui :(</S.TextMessage>
        <img src={ImageEmpity} alt="estado de empity" />
        <S.ContainerButton>
          <Button onClick={() => ProductsRefetch()}>Recarregar página</Button>
        </S.ContainerButton>
      </S.NotItens>
    )
  }
  return (
    <>
      <Search
        placeholder="Buscar filme pelo nome"
        onClick={() => ProductsRefetch()}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <S.Grid>
        {dataProducts?.map((item) => (
          <CardProduct
            {...item}
            key={item.id}
            countItens={verifyCount(item)}
            onClick={(item) => AddItemCart(item)}
          />
        ))}
      </S.Grid>
    </>
  )
}
