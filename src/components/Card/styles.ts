import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
`;

export const CardContainer = styled.div`
  max-width: 700px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;
  margin: 6px 0px 0px 0px;

  border-radius: 5px;
  /* border: 1px solid #04d361; */
  border-right: 3px solid lightgray;
  border-bottom: 3px solid lightgray;
  background: #fff;

  div {
    border-radius: 0px;
    margin: 0px -1px -1px 0px;
    margin-top: 0px;
  }

  strong {
    width: 100%;
    padding: 10px;
  }

  span {
    border: 0px;
    padding: 10px;
    width: 100%;
    text-align: justify;

    max-height: 200px;
    overflow: hidden;
  }

  span:empty::before {
    content: attr(data-placeholder);
    display: inline-block;
    color: lightgray;
  }

  span:focus {
    outline: none;
  }
`;
