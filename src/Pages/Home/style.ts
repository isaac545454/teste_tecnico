import styled from "styled-components"
import { DEVICES } from "../../Theme/devices"
import { THEME_COLOR } from "../../Theme/color"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(338px, 1fr));
  gap: 20px;
  margin-top: 24px;

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
  justify-content: center;
  color: ${THEME_COLOR.light};
  margin-top: 24px;
`
