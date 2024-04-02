import styled from "styled-components"
import { THEME_COLOR } from "../../Theme/color"
import { DEVICES } from "../../Theme/devices"

export const Container = styled.div`
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`
export const Title = styled.h2`
  color: ${THEME_COLOR.light};
  cursor: pointer;
`
export const ContainerCard = styled.div`
  display: flex;
  height: 38px;
  align-items: center;
  cursor: pointer;
`
export const ContentCard = styled.button`
  margin-right: 8px;
  text-align: end;
  border: none;
  background: transparent;
  cursor: pointer;
`

export const Mycart = styled.p`
  color: ${THEME_COLOR.light};
  margin: 1px;
  @media (max-width: ${DEVICES.MOBILE}) {
    display: none;
  }
`
export const CartItems = styled.span`
  color: ${THEME_COLOR.secondary};
`
