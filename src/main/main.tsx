import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "./index.css"

import CartProvider from "../context/cartContext"
import { Container } from "../components/Container"
import { RouterProvider } from "react-router-dom"
import { routes } from "../routes"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <Container>
          <>
            <RouterProvider router={routes} />
          </>
        </Container>
      </QueryClientProvider>
    </CartProvider>
  </React.StrictMode>
)
