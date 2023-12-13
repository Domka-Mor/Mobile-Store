import styled from 'styled-components';



export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
border-radius:0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:focus{
	outline:none;
}
${prop => {
    if (prop.cart) {
      return `
        border-color: ${'var(--mainYellow)'};
        color: ${'var(--mainYellow)'};
        &:hover{
			background: ${'var(--mainYellow)'};
			color:(--mainBlue);
		}
    `
    } else if (prop.fav) {
      return `
        border-color: ${'var(--mainDark)'};
        color: ${'var(--mainDark)'};
        &:hover{
			background: ${'var(--mainDark)'};
			color:(--mainWhite);
		}
    `
    } else {
      return `
        border-color: ${'var(--lightBlue)'};
        color: ${'var(--lightBlue)'};
        &:hover{
			background: ${'var(--lightBlue)'};
			color:(--mainBlue);
		}
    `
    }
  }}
`;