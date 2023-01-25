import styled from "styled-components";

export const Container = styled.div`
  background-color: #0f6cde;
  width: 100%;
  height: 100%;
  position: absolute;
  margin-bottom: 20px;
`;
export const InfoContainer = styled.div`
  background: #eae7dd;
  width: 600px;
  height: 700px;
  position: absolute;
  left: 73px;
  top: 45px;
  padding: 40px;
`;
export const Img = styled.img`
  width: 970px;
  height: 720px;
  position: absolute;
  left: 500px;
`;
export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
`;
export const Text = styled.p`
  font-size: 20px;
`;
export const Button = styled.button`
  position: relative;
  width: 200px;
  padding: 15px 0;
  font-weight: 600;
  border: 2px solid #000000;
  background-color: #000000;
  border-radius: 30px;
  color: #ffffff;
  border-width: 3px;

  &:hover {
    color: #000000;
    border: 3px solid #ffffff;
    background-color: #ffffff;
    border-color: #000000;
  }
`;
