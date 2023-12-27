import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  font-family: "RobotoRegular";
  color: #fff;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainSearch = styled.div`
  font-family: "RobotoRegular";
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: center;
  max-width: 1178px;
  padding: 31px 10px 0px;
`;

export const SearchForm = styled.form`
  // margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  @media screen and (max-width: 590px) {
    margin-left: 10px;
    max-width: 1044px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
`;

export const SearchText = styled.input`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: #fff;
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const SearchTextMob = styled.input`
  display: none;
  @media screen and (max-width: 590px) {
    display: inline-block;
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 30px;
    background-color: #ffffff;
    padding: 5px 17px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    ::-webkit-input-placeholder {
      background-color: transparent;
      color: #b3b3b3;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
    :-ms-input-placeholder {
      background-color: transparent;
      color: #b3b3b3;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
    ::-ms-input-placeholder {
      background-color: transparent;
      color: #b3b3b3;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
    ::placeholder {
      background-color: transparent;
      color: #b3b3b3;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const Button2 = styled(Button)`
  :hover {
    background-color: #ff00ff;
  }
`;

export const SearchButton = styled(Button2)`
  font-family: "RobotoRegular";
  margin-left: 10px;
  width: 158px;
  height: 50px;
  background-color: #ff00ff;
  border: 1px solid #ff00ff;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  max-width: 1178px;
  width: 100%;
  // margin: 0 auto;
  padding: 52px 10px 37px;
  @media screen and (max-width: 590px) {
    padding: 85px 10px 84px;
  }
`;
export const MainTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #fff;
  margin-bottom: 30px;
  font-family: "RobotoRegular";

  :hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
  @media screen and (max-width: 590px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
    text-align: center;
    position: relative;
    ::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 13px;
      cursor: pointer;
    }
  }
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 590px) {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    right: 0;
    left: 0;
    top: 134px;
  }
`;

export const Users = styled.div`
  width: 100%;
  display: flex;
  font-family: "RobotoRegular";
  grid-gap: 40px;
  flex-direction: column;
  -webkit-box-pack: center;
  // -ms-flex-pack: center;
  // justify-content: center;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;

  @media screen and (max-width: 590px) {
    grid-gap: 10px;
    // -webkit-box-pack: center;
    // -ms-flex-pack: center;
    // justify-content: center;
  }
`;
