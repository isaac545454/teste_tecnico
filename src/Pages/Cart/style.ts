import styled from "styled-components"
import { THEME_COLOR } from "../../Theme/color"
import { DEVICES } from "../../Theme/devices"

export const Container = styled.div`
  background-color: ${THEME_COLOR.light};
  border-radius: 4px;
  padding: 24px;

  @media (max-width: ${DEVICES.MOBILE}) {
    width: 80%;
    margin: 0 auto;
  }
`

export const Line = styled.div`
  border-top: 1px solid ${THEME_COLOR.secondary};
  margin-bottom: 24px;
`

export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${DEVICES.MOBILE}) {
    flex-direction: column-reverse;
  }
`

export const ContainerButton = styled.div`
  width: 173px;
  @media (max-width: ${DEVICES.MOBILE}) {
    margin-top: 16px;
    width: 100%;
  }
`
export const ContainerTotalPrice = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media (max-width: ${DEVICES.MOBILE}) {
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;
  }
`

export const ValueTotalPrice = styled.p`
  color: ${THEME_COLOR.dark};
  font-weight: 700;
  font-size: 24px;
  margin-left: 20px;
`

export const TextTotalPrice = styled.p`
  color: ${THEME_COLOR.secondary};
  font-weight: 700;
  font-size: 14px;
`

export const GridHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: ${DEVICES.MOBILE}) {
    display: none;
  }
`
