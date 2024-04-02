import { Header } from "../components/Header"

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
