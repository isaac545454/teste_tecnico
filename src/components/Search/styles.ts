import styled from "styled-components"
import { CiSearch } from "react-icons/ci"
import { DEVICES } from "../../Theme/devices"
import { THEME_COLOR } from "../../Theme/color"

export const Icon = styled(CiSearch)`
  position: absolute;
  top: 16px;
  right: 19px;
  color: ${THEME_COLOR.terceary};

  @media (max-width: ${DEVICES.MOBILE}) {
    right: 28px;
  }
`

export const Container = styled.form`
  display: flex;
  justify-content: center;
  position: relative;

  &:focus-within ${Icon} {
    color: ${THEME_COLOR.dark};
  }
`

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  height: 56px;
  padding-left: 16px;
  font-size: 16px;
  border: none;

  ::placeholder {
    color: ${THEME_COLOR.quaternary};
  }

  &:focus {
    border: 2px solid ${THEME_COLOR.primary};
    outline: none;
    height: 52px;
  }

  @media (max-width: ${DEVICES.MOBILE}) {
    margin: 0 16px;
  }
`
