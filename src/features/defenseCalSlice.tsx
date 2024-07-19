import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeValue, TypeName } from './types';

export type defenseCalState = {
  result: { [key: string]: string[] };
  defenseType1: string | undefined;
  defenseType2: string | undefined;
};

export const defenseCalSlice = createSlice({
  name: 'defenseCal',
  initialState: {
    result: {},
    defenseType1: undefined as string | undefined,
    defenseType2: undefined as string | undefined,
  },
  reducers: {
    defenseCal: (
      state,
      action: PayloadAction<{
        defenseType1?: string;
        defenseType2?: string;
        type?: string;
      }>
    ) => {
      //const { type } = action.payload;
      //const typeIndex = TypeName.indexOf(type as any);
      const { defenseType1, defenseType2 } = action.payload;

      // 각 효과의 수치를 키로 갖는 빈 배열 설정
      type Effectiveness = {
        [key in number | string]: string[];
      };

      let effectiveness: Effectiveness = {
        '4': [],
        '2': [],
        '1': [],
        '0.5': [],
        '0.25': [],
        '0': [],
      };

      // TypeValue 배열 및 타입을 선택하지 않았을 경우에는 모든 타입에 대한 효과를 1배로 반환
      function allTypes1x(type?: string): readonly number[] {
        return type && type in TypeValue
          ? TypeValue[type as keyof typeof TypeValue]
          : new Array(18).fill(1);
      }

      if (!defenseType1 && !defenseType2) {
        TypeName.forEach(typeName => {
          effectiveness['1'].push(typeName);
          allTypes1x();
        });

        state.result = effectiveness;
        // 한 개의 타입을 선택했을 경우
      } else if (defenseType1 && !defenseType2) {
        // 18개의 TypeValue 배열에서 defenseType1의 인덱스에 해당하는 모든 요소를 하나의 배열로 반환
        const typeArr1 = TypeName.indexOf(defenseType1 as any);
        const defenseArray = Object.values(TypeValue).map(
          typeArray => typeArray[typeArr1]
        );

        // defenseArray를 effectiveness 객체에 매핑
        defenseArray.forEach((value, index) => {
          const key = value.toString();
          if (key in effectiveness) {
            effectiveness[key].push(TypeName[index]);
          }
        });

        state.result = effectiveness;
        state.defenseType1 = defenseType1;
        // 두 개의 타입을 선택했을 경우
      } else if (defenseType1 && defenseType2) {
        // 18개의 TypeValue 배열에서 defenseType1, defenseType2의 인덱스에 해당하는 모든 요소를 각각 하나씩 배열로 반환
        const typeArr1 = TypeName.indexOf(defenseType1 as any);
        const defenseArray1 = Object.values(TypeValue).map(
          typeArray => typeArray[typeArr1]
        );
        const typeArr2 = TypeName.indexOf(defenseType2 as any);
        const defenseArray2 = Object.values(TypeValue).map(
          typeArray => typeArray[typeArr2]
        );
        console.log(defenseType1, defenseArray1, defenseType2, defenseArray2);
        // defenseArray1, defenseArray2를 비교해서 새로운 1개의 배열 반환
        const combinedDefenseArray = defenseArray1.map((value1, index) => {
          const value2 = defenseArray2[index];
          if (value1 === 2 && value2 === 2) {
            return 4; // 두 값이 모두 2일 경우 4를 반환합니다.
          } else if (value1 > 1 || value2 > 1) {
            return Math.max(value1, value2); // 더 큰 값이 1보다 크면 그 값을 선택합니다.
          } else {
            return Math.min(value1, value2); // 더 작은 값이 1보다 작으면 그 값을 선택합니다.
            // TODO 새로운 조건 추가
            // [ ] 0.5와 2를 비교하면 1을 출력
            // [ ] 0.5와 0.5를 비교하면 0.25를 출력
          }
        });

        // combinedDefenseArray를 effectiveness 객체에 매핑합니다.
        combinedDefenseArray.forEach((value, index) => {
          const key = value.toString();
          if (key in effectiveness) {
            effectiveness[key].push(TypeName[index]);
          }
        });

        state.result = effectiveness;
        state.defenseType1 = defenseType1;
        state.defenseType2 = defenseType2;
      }
    },
  },
});
export const { defenseCal } = defenseCalSlice.actions;
export default defenseCalSlice.reducer;
