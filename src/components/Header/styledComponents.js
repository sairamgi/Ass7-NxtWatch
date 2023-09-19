import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  padding-left: 30px;
  padding-right: 30px;
  height: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  margin-left: 10px;
`

export const ContentContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`

export const ContentListItem = styled.li`
  display: flex;
`

export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 8px 16px;
  color: #ffffff;
  background-color: #0967d2;
  border: none;
  cursor: pointer;
  outline: none;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`

export const WebsiteLogo = styled.img`
  width: 110px;

  @media screen and (max-width: 768px) {
    width: 165px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  width: 400px;
  border-radius: 10px;
`

export const NavbarLargeContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const NavbarSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const ProfileImg = styled.img`
  width: 40px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  color: grey;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  font-family: 'Roboto';
  margin: 12px;
  padding-right: 20px;
  padding-left: 20px;
`

export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  margin: 10px;
  color: black;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 15px;
  border: none;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
`

export const HeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`
