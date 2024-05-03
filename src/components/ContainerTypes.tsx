import styled from 'styled-components';
import { useState } from 'react';
import { PokemonType } from './PokemonType';
import { TypeName } from 'features/types';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';

const ContainerTypes = () => {
  const [activeTypes, setActiveTypes] = useState<string[]>([]);
  const isDarkMode = useSelector((state: RootState) => state.darkMode.theme === 'dark');
  const translate = useSelector((state: RootState) => state.language.translations);

  const upToTwo = (clickedType: string) => {
    if (activeTypes.includes(clickedType)) {
      setActiveTypes(activeTypes.filter(t => t !== clickedType));
    } else if (activeTypes.length < 2) {
      setActiveTypes([...activeTypes, clickedType]);
    } else {
      setActiveTypes([activeTypes[1], clickedType]);
    }
  }; // 두 개 이상의 타입을 클릭하면 가장 나중에 클릭한 타입을 클릭 해제

  return (
    <Container>
      {TypeName.map((type: (typeof TypeName)[number]) => (
        <PokemonType
          key={String(type)}
          text={translate.TypeName[type]}
          borderColor={`var(--${type})`}
          onClick={() => upToTwo(type)} // upTotwo 함수를 호출해서 클릭한 타입을 상태에 반영
          isDarkMode={isDarkMode}
          isActive={activeTypes.includes(type)} // 각 pokemonType 요소가 활성 상태인지 불리언 값으로 알려줘서 UI에 보여줌
        />
      ))}
    </Container>
  );
};

/**
 * TODO
 * [x] typeCalculator TypesName의 타입 고쳐서 여기에 import하기
 */

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  align-items: center;
  margin: 2rem 1rem;
  gap: 1rem 1.5rem;
  justify-items: center;

  @media (max-width: 767px) {
    gap: 1rem;
  }
`;

export default ContainerTypes;
