import styled from "styled-components";

export const UserBlock = styled.div`
  width: 700px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 16px;
`;

export const UserPic = styled.img`
  width: 150px;
  height: 150px;
  display: block;
  object-fit: cover;
  background-color: #ff00ff;
`;

export const TextBlock = styled.div`
  width: 500px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  font-family: "RobotoRegular";
`;

export const TextField = styled.div`
  font-size: 17px;
`;
