import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "./index.css"
import { Home } from "../Pages/Home"
import { Header } from "../components/Header"
import CartProvider from "../context/cartContext"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Home />
      </QueryClientProvider>
    </CartProvider>
  </React.StrictMode>
)
