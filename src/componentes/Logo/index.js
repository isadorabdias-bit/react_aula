import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 100px;
  margin-right: 10px;
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt='logo' />

            <p><strong>SENAI Books</strong></p>
        </LogoContainer>
    )
}

export default Logo