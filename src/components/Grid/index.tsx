import styled from "styled-components";

export const Container = styled.div`
  max-width: 1360px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  &:before, &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  &:before, &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
`
function getWidth(value){
    if (!value)return;
    let w = value/12 * 100;
    return `width: ${w}%;`;
}

export const Col = styled.div`
  float: left;
  min-height: 1px;
  box-sizing: border-box;
  
  @media only screen and (max-width: 768px){
    ${({mobile}) => mobile && getWidth(mobile)}
  }
  @media only screen and (min-width: 768px){
    ${({tablet}) => tablet && getWidth(tablet)}
  }
  @media only screen and (min-width: 1000px){
    ${({desktop}) => desktop && getWidth(desktop)}
  }
`

