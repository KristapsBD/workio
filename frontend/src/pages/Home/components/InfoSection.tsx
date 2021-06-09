import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { StyledObject } from '@/types';
import { Container, Button } from '@/styles';

const S: StyledObject = {};

export interface InfoSectionStyleProps {
  reverse?: boolean;
  lightMode?: boolean;
  imageAlign?: 'row' | 'row-reverse';
}

S.Section = styled.div<InfoSectionStyleProps>`
  color: #fff;
  padding: 160px 0;

  background: #fff;

  ${({ lightMode }) =>
    lightMode &&
    css`
      background: #2214a7;
    `}
`;

S.Row = styled.div<InfoSectionStyleProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row-reverse;

  margin: 0 -15px -15px -15px;

  ${({ reverse }) =>
    reverse &&
    css`
      flex-direction: row;
    `}
`;

S.Col = styled.div`
  flex: 1;
  flex-basis: 50%;
  max-width: 50%;

  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;

    display: flex;
    justify-content: center;
  }
`;

S.TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
  max-width: 540px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

S.ImageWrapper = styled.div<InfoSectionStyleProps>`
  max-width: 555px;
  display: flex;
  justify-content: flex-start;

  ${({ reverse }) =>
    reverse &&
    css`
      justify-content: flex-end;
    `}
`;

S.TopLine = styled.div<InfoSectionStyleProps>`
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;

  color: #4b59f7;

  ${({ lightMode }) =>
    lightMode &&
    css`
      color: #e9e9e9;
    `}
`;

S.Image = styled.img`
  display: inline-block;

  vertical-align: middle;

  max-width: 100%;
  max-height: 500px;

  border: 0;
  padding-right: 0;
`;

S.Heading = styled.h1<InfoSectionStyleProps>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;

  color: #1c2237;

  ${({ lightMode }) =>
    lightMode &&
    css`
      color: #f7f8fa;
    `}
`;

S.Subtitle = styled.p<InfoSectionStyleProps>`
  font-size: 18px;
  line-height: 24px;

  max-width: 440px;
  margin-bottom: 35px;

  color: #1c2237;

  ${({ lightMode }) =>
    lightMode &&
    css`
      color: #f1f1f1;
    `}
`;

export interface InfoSectionProps {
  primary: boolean;
  reverse: boolean;
  lightMode: boolean;

  buttonLabel: string;
  topLineText: string;
  headingText: string;
  subtitleText: string;

  imageUrl: string;
  imageAlt: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  primary,
  buttonLabel,
  topLineText,
  headingText,
  subtitleText,
  imageUrl,
  imageAlt,
  ...props
}) => {
  return (
    <S.Section {...props}>
      <Container>
        <S.Row {...props}>
          <S.Col>
            <S.TextWrapper>
              <S.TopLine {...props}>{topLineText}</S.TopLine>
              <S.Heading {...props}>{headingText}</S.Heading>
              <S.Subtitle {...props}>{subtitleText}</S.Subtitle>
              <Link to='/sign-up'>
                <Button large primary={primary}>
                  {buttonLabel}
                </Button>
              </Link>
            </S.TextWrapper>
          </S.Col>
          <S.Col>
            <S.ImageWrapper>
              <S.Image src={imageUrl} alt={imageAlt} />
            </S.ImageWrapper>
          </S.Col>
        </S.Row>
      </Container>
    </S.Section>
  );
};

export default InfoSection;
