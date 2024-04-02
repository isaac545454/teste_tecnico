import styled from "styled-components"
import { DEVICES } from "../../Theme/devices"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(338px, 1fr));
  gap: 20px;

  @media (max-width: ${DEVICES.MOBILE}) {
    grid-template-columns: 1fr;
    padding: 0 16px;
    margin-bottom: 50px;
  }
`
