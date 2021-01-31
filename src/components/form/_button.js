import styled from 'styled-components'

const Button = styled.button`
  background: #403f3d;
  color: white;
  box-shadow: 0px 5px 15px #0000001f;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  padding: 17px 30px;
  width: ${({ width }) => width};
  height: 50px;
  margin: ${({ margin }) => margin};
  font-family: 'Pacifico', sans-serif;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }
`

export { Button }
