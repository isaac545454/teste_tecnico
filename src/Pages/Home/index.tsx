import { CardProduct } from "../../components/CardProduct"
import { Search } from "../../components/Search"
import { Spinner } from "../../components/Sprinner"

import * as S from "./style"
import { useHome } from "./HomeModel"

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
  if (ProductsError) return <p>Ops... houve um imprevisto</p>

  return (
    <>
      <Search
        placeholder="Buscar filme pelo nome"
        onClick={() => ProductsRefetch()}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {isLoadingProducts && <Spinner />}
      {dataProducts && dataProducts?.length === 0 ? (
        <S.NotItens>
          <p>Nenhum item encontrado com o filtro fornecido.</p>
        </S.NotItens>
      ) : (
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
      )}
    </>
  )
}
