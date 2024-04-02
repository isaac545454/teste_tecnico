import styled from "styled-components"
import { THEME_COLOR } from "../../Theme/color"

export const Button = styled.button`
  background-color: ${THEME_COLOR.primary};
  color: ${THEME_COLOR.light};
  border: none;
  width: 100%;
  padding: 11px;
  border-radius: 4px;
  font-weight: 700;
  display: flex;
  justify-content: center;
`
