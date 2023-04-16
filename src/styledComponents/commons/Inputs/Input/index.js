import styled from "styled-components";
import { StyledInput } from './styled'

const Input = ({ value, onChange, type, placeholder }) => {
  
  return <StyledInput value={value} onChange={onChange}type={type} placeholder={placeholder} />;
}

export default Input;