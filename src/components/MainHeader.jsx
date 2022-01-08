import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  z-index: 1100;
`;

const Content = styled.div`
  @media screen and (min-width: 1024px) {
    max-width: 676px;
    margin: auto;
    padding-bottom: 20px;
  }
  @media (max-width: 1023px) {
    height: 80vh;
    overflow: scroll;
  }
`;

const SearchHistory = styled.div`
  padding: 24px 0;
  width: 100%;
  @media (max-width: 1023px) {
    width: 100vw;
    left: 0px;
    padding: 24px 24px 28px;
  }
`;

const Title = styled.div`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: bold;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 70px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const RecommWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  div {
    margin-top: 8px;
    margin-right: 4px;
    font-size: 14px;
    padding: 8px 16px;
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: 25px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.7);
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

const Separator = styled.div`
  margin: 24px 0;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.03);
`;

const PstsWrapper = styled.div`
  display: flex;
  @media (max-width: 1023px) {
    display: block;
  }
`;

const Psts = styled.div`
  flex: 1 0 50%;
  @media screen and (min-width: 1024px) {
    max-width: 50%;
  }
  div {
    font-size: 14px;
    line-height: 20px;
    padding: 8px 0;
    span:first-child {
      color: #ff5600;
      margin-right: 8px;
      font-weight: bold;
    }
  }
`;

const recommendations = [
  "오늘의 특가",
  "새해 인기취미",
  "태블릿최저가",
  "새해 인기 클래스",
  "재테크 시작",
  "N잡러 준비",
  "일잘러의 비법",
  "요즘 외국어 공부",
];

const psts = [
  "아이패드",
  "뜨개질",
  "취미",
  "일러스트",
  "댄스",
  "드로잉",
  "포토샵",
  "케이크",
  "그림",
  "디지털드로잉",
];

const MainHeader = ({ onOverlayClick }) => {
  return (
    <>
      <Overlay onClick={onOverlayClick} />
      <Wrapper>
        <Content>
          <SearchHistory>
            <Title>추천 검색어</Title>
            <RecommWrapper>
              {recommendations.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </RecommWrapper>
            <Separator />
            <Title>인기 검색어</Title>
            <PstsWrapper>
              <Psts>
                {psts
                  .map((item, i) => (
                    <div key={item}>
                      <span>{i + 1}</span>
                      <span>{item}</span>
                    </div>
                  ))
                  .slice(0, 5)}
              </Psts>
              <Psts>
                {psts
                  .map((item, i) => (
                    <div key={item}>
                      <span>{i + 1}</span>
                      <span>{item}</span>
                    </div>
                  ))
                  .slice(5)}
              </Psts>
            </PstsWrapper>
          </SearchHistory>
        </Content>
      </Wrapper>
    </>
  );
};

export default MainHeader;
