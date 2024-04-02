import styled from "styled-components"
import { THEME_COLOR } from "../../Theme/color"

export type ButtonParams = {
  isActive?: boolean
}

export const Button = styled.button<ButtonParams>`
  background-color: ${(props) =>
    !props.isActive ? THEME_COLOR.primary : THEME_COLOR.customGreen};
  color: ${THEME_COLOR.light};
  border: none;
  width: 100%;
  padding: 11px;
  border-radius: 4px;
  font-weight: 700;
  display: flex;
  cursor: pointer;
  justify-content: center;
`
