import styled from "styled-components"
import { THEME_COLOR } from "../../Theme/color"

export const Container = styled.div`
  background-color: ${THEME_COLOR.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(328px - 16px);
  /* height: calc(324px - 16px); */
  justify-content: space-between;
  border-radius: 4px;
  padding: 16px;
`

export const Image = styled.img`
  width: 147px;
  height: 188px;
`

export const Title = styled.p`
  font-weight: bold;
  font-size: 12px;
  margin-top: 8px;
`
export const Price = styled.p`
  font-weight: bold;
  margin: 8px 0;
  font-size: 16px;
`
export const TextButton = styled.div`
  margin-right: 11px;
`
export const ImageButton = styled.img`
  margin-right: 4px;
`
