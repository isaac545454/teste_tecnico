import styled from "styled-components"
import { DEVICES } from "../../../Theme/devices"
import { THEME_COLOR } from "../../../Theme/color"

export const Container = styled.div`
  display: none;

  @media (max-width: ${DEVICES.MOBILE}) {
    display: flex;
    margin-bottom: 21px;
  }
`
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Image = styled.img`
  width: 64px;
  height: 82px;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
`

export const ContainerTilte = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 16px;
`

export const Button = styled.button`
  border: none;
  background: transparent;
  align-items: center;
  margin-left: 14px;
  cursor: pointer;
`
export const Subtitle = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: ${THEME_COLOR.secondary};
`

export const Price = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${THEME_COLOR.dark};
`
export const ContainerPrice = styled.div`
  margin-right: 10px;
`
