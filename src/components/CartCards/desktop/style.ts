import styled from "styled-components"
import { DEVICES } from "../../../Theme/devices"
import { THEME_COLOR } from "../../../Theme/color"

export const GridDesktop = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 0fr; /* Três colunas iguais e a última ocupando 0.5 partes */
  gap: 20px; /* Adiciona espaço entre as colunas */
  margin-bottom: 24px;

  @media (max-width: ${DEVICES.MOBILE}) {
    display: none;
  }
`
export const ItemGrid = styled.div`
  display: flex;
  justify-content: start;
`

export const Image = styled.img`
  width: 91px;
  height: 114px;
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 14px;
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
  gap: 8px;
`
export const ContainerCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 10px;

  @media (max-width: ${DEVICES.MOBILE}) {
    margin-left: 0px;
  }
`
export const Count = styled.p`
  height: 26px;
  width: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${THEME_COLOR.customGray};
  border-radius: 4px;
  margin: 0 11px;

  @media (max-width: ${DEVICES.MOBILE}) {
    width: 59x;
  }
`

export const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`
