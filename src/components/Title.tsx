import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/store';

function MainTitle() {
  const navigate = useNavigate();
  const lang = useSelector((state: RootState) => state.language.lang);

  return (
    <Title
      className="Title"
      onClick={() => {
        navigate(`/${lang}`);
      }}
    >
      My Pokemon Type
    </Title>
  );
}

export default MainTitle;

export const Title = styled.header`
  font-size: 3rem;
  font-family: 'HeliosExtBlack', sans-serif;
  color: var(--color-Title);
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 1.7rem;
  margin-bottom: 0.2rem;
  margin: 5rem 0 0.3rem;
  cursor: pointer;

  @media (min-width: 768px) and (max-width: 1181px) {
    margin: 4rem 0 0.3rem;
    font-size: 2.5rem;
  } // 태블릿

  @media (min-width: 280px) and (max-width: 767px) {
    margin: 2rem 1.2em 0.3rem; // 화면이 작기 때문에 모바일에선 margin-top이 더 높은 디자인 배제
    font-size: 1.3rem;
    text-indet: left;
  } // 모바일
`;
