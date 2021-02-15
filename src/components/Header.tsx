import styled from 'styled-components';

const HeaderBody = styled.header`
    background-color: var(--main-color);
	width: 100%;
	height: 4em;
	display: flex;
	align-items: center;
	position: absolute;
	top: 0;
`

const Header = () => (
    <HeaderBody>
        <h1>Movies Finder</h1>
    </HeaderBody>
)

export default Header;