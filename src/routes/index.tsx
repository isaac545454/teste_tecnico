import { createBrowserRouter } from "react-router-dom"
import { Home } from "../Pages/Home"
import { PATH } from "./path"
import { Cart } from "../Pages/Cart"
import { Layout } from "../layout"

export const routes = createBrowserRouter([
  {
    path: PATH.HOME,
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: PATH.CART,
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
])
