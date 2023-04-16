import styled from "styled-components";
// import colors from "../../../../styles/colors";
// import { fadeIn } from "../../../../utils/styleEffects";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 2s;
  
`;

export const Title = styled.div`
  display: flex;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;
  align-items: center;
  text-align: center;
  color: #e26e26;
`;

export const SubTitle = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
  /* identical to box height, or 133% */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.18px;
  color: #000000;
`;

export const ErrorMessage = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  /* identical to box height, or 133% */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.18px;
  color: #000000;
`;
