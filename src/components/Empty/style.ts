import styled from "styled-components"
import { DEVICES } from "../../Theme/devices"
import { THEME_COLOR } from "../../Theme/color"

export const NotItens = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${THEME_COLOR.light};
  background-color: ${THEME_COLOR.light};
  height: 596px;
  border-radius: 4px;
  margin-bottom: 50px;

  @media (max-width: ${DEVICES.MOBILE}) {
    padding-left: 16px;
    padding-right: 16px;
    margin: 0 auto;
    margin-bottom: 50px;
    width: 82%;
    height: 516px;
  }
`

export const TextMessage = styled.p`
  color: ${THEME_COLOR.dark};
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 24px;
  text-align: center;
  width: 70%;
`
export const ContainerButton = styled.div`
  padding: 24px;
  width: 173px;
`
