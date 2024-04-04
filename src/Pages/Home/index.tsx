import { CardProduct } from "../../components/CardProduct"
import { Search } from "../../components/Search"
import { Spinner } from "../../components/Sprinner"
import * as S from "./style"
import { useHome } from "./HomeModel"
import { Empty } from "../../components/Empty"

export const Home = () => {
  const {
    AddItemCart,
    ProductsError,
    ProductsRefetch,
    dataProducts,
    filter,
    setFilter,
    isLoadingProducts,
    verifyCount,
    handleReloadProducts,
    InputRef,
  } = useHome()

  if (ProductsError || (dataProducts && dataProducts.length === 0)) {
    return <Empty onClick={handleReloadProducts} type="back" />
  }

  return (
    <>
      <Search
        placeholder="Buscar filme pelo nome"
        onClick={() => {
          ProductsRefetch()
          InputRef.current?.blur()
        }}
        ref={InputRef}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {isLoadingProducts && <Spinner />}
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
