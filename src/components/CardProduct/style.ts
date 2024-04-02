import styled from "styled-components"
import { THEME_COLOR } from "../../Theme/color"

export const Container = styled.div`
  background-color: ${THEME_COLOR.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(324px - 16px);
  justify-content: center;
  border-radius: 4px;
  padding: 16px;
`

export const Image = styled.img`
  width: 147px;
`

export const Title = styled.p`
  font-weight: bold;
  font-size: 12px;
`
export const Price = styled.p`
  font-weight: bold;
`
