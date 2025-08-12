import styled from "styled-components";

export const FooterBg = styled.div`
  width: 100%;
  border-top: 1px solid #c9c9c9;
`;
export const FooterBox = styled.div`
  width: 100%;
  max-width: 1920px;
`;

export const LogoImg = styled.img`
  width: 100px;
  margin-top: 20px;
`;

export const FooterGnb = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px;
  font-size: 0.9rem;
  margin-top: 10px;
  cursor: pointer;

  @media ${({ theme }) => theme.device.xs} {
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

export const FooterText = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px;
  font-size: 0.9rem;

  @media ${({ theme }) => theme.device.ms} {
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  @media ${({ theme }) => theme.device.xs} {
    justify-content: center;
    gap: 40px;

    p:nth-child(4),
    p:nth-child(5),
    p:nth-child(6),
    p:nth-child(7) {
      display: none;
    }
  }
`;

export const FooterCopy = styled.div`
  color: #c9c9c9;
  margin: 10px 0;
  font-size: 0.9rem;
    @media ${({ theme }) => theme.device.xs} {
    text-align: center;
`;
