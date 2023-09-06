import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  margin: auto;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  @media screen and (min-width: 992px) {
    width: 35px;
    flex-shrink: 0px;
    box-shadow: 0px 8px 40px;
    padding: 64px 48px 64px 48px;
  }
`

export const LoginWebsiteLogo = styled.img`
  width: 185px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`

export const PasswordInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const UserNameInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  color: #ff0b3f;
`

export const ShowHideContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const CheckBoxInput = styled.input`
  margin-right: 4px;
`
