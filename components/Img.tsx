import styled from 'styled-components';
import { FC, ImgHTMLAttributes } from 'react';

const StyleImg = styled.img`
  width: 308px;
  height: 288px;
  margin: 20px auto 0 auto;
  display: block;
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const Img: FC<ImgHTMLAttributes<HTMLImageElement>> = props => {
  return <StyleImg {...props} />;
};

export default Img;
