import styled from "styled-components"
import { DEVICES } from "../../Theme/devices"
import { THEME_COLOR } from "../../Theme/color"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(338px, 1fr));
  gap: 20px;
  margin-top: 24px;
  padding-bottom: 50px;

  @media (max-width: ${DEVICES.MOBILE}) {
    grid-template-columns: 1fr;
    padding: 0 16px;
    margin-bottom: 50px;
    margin-top: 16px;
    justify-content: center;
  }
`

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

  @media (max-width: ${DEVICES.MOBILE}) {
    padding-left: 16px;
    padding-right: 16px;
    margin: 0 auto;
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

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
export const FilterText = styled.p`
  color: ${THEME_COLOR.light};
`
