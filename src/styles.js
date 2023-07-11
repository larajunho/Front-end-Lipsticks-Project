import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	min-height: 100vh;
	background-image: url(https://wallpapercg.com/media/ts_orig/13768.webp);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const Header = styled.span`
	font-size: 28px;
	color: #dc1ac0;
	font-weight: 400;
	background-color: #f3c6ed;
	padding: 10px;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(220, 26, 192, 0.5);
	margin-bottom: 25px;
	margin-top: 20px;
`;

export const ListContent = styled.div`
    display: flex;
	justify-content: center;

`
export const Div = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-right: 20px;
	width: 100px;
`
export const Span = styled.span`
    justify-content: center;
	font-weight: 600;
	color: #cf309c;
`
export const SpanProduct = styled.span`
    justify-content: center;
	color:#ac55e6;
	font-weight: 400;
`
export const Form = styled.form`
    display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Input = styled.input`
    height: 30px;
    min-width: 400px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: none;
    color: #dc1ac0; 
    padding-left: 15px;
   ::placeholder {
      color:  #f3c6ed; 
   }
   :focus {
      color:#dc1ac0; 
      border: 2px solid #dc1ac0; 
	  outline: none;
   }
`


