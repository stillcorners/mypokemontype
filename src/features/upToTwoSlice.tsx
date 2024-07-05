import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type upToTwoState = {
  selectTypes: string[];
  activeType: string;
};

export const initialState: upToTwoState = {
  selectTypes: [],
  activeType: '',
};

export const upToTwoSlice = createSlice({
  name: 'upToTwo',
  initialState,
  reducers: {
    add(state, action: PayloadAction<string>) {
      const type = action.payload;
      const index = state.selectTypes.indexOf(type);
      if (index === -1) {
        if (state.selectTypes.length < 2) {
          state.selectTypes.push(type);
        } else {
          state.selectTypes.shift();
          state.selectTypes.push(type);
        }
      }
      state.activeType = type;
    },
    remove(state, action: PayloadAction<string>) {
      state.selectTypes = state.selectTypes.filter(type => type !== action.payload);
      if (state.activeType === action.payload) {
        state.activeType = state.selectTypes[state.selectTypes.length - 1] || '';
      }
    },

    // upToTwo: (state, action: PayloadAction<string>) => {
    //   const activeType = action.payload;
    //   state.activeType = activeType;

    // // 🐟 아무 타입도 선택하지 않은 상태
    // if (!state.selectTypes.includes(activeType) && state.selectTypes.length === 0 && state.selectTypes[0] !== state.selectTypes[1]) {
    //   // 아무 것도 선택하지 않은 상태로 머물러 있음.. 삭제?
    //   if (state.selectTypes[0] === undefined && state.selectTypes[1] === undefined) {
    //     // state.type1 = undefined;
    //     // state.type2 = undefined;
    //   }
    //   // 아무 것도 선택하지 않은 상태에서 타입 1개를 클릭함 : type1에 할당
    //   if (state.selectTypes[0] === undefined && state.selectTypes[1] === undefined) {
    //     state.selectTypes[0] = activeType;
    //     state.selectTypes.push(activeType);
    //     // state.selectTypes[1] = undefined;
    //   }

    //   // 🐟 1개의 타입만 선택한 상태
    // } else if (
    //   (state.selectTypes[0] === activeType || state.selectTypes[1] === activeType) &&
    //   state.selectTypes.includes(activeType) &&
    //   state.selectTypes.length === 1 &&
    //   state.selectTypes[0] !== state.selectTypes[1]
    // )
    //   if (state.selectTypes[0] === activeType && state.selectTypes[1] === undefined) {
    //     // type1을 선택한 상태에서 type1 클릭 해제 : type1 해제
    //     // state.selectTypes[1] = undefined;
    //     state.selectTypes = state.selectTypes.filter(type => type !== activeType);
    //   }
    // // type1을 선택한 상태에서 type2를 선택하기: type2 할당
    // if (state.selectTypes[0] === activeType && state.selectTypes[1] === undefined) {
    //   state.selectTypes[1] = activeType;
    //   state.selectTypes.push(activeType);

    //   // 🐟 2개 타입을 다 선택한 상태
    // } else if (state.selectTypes.includes(activeType) && state.selectTypes.length === 2 && state.selectTypes[0] !== state.selectTypes[1])
    //   if (state.selectTypes[0] === undefined && state.selectTypes[1] === activeType) {
    //     // type1, type2 모두 클릭한 상태에서 type1 클릭 해제: type2 요소를 type1 요소에 할당
    //     state.selectTypes[0] = state.selectTypes[1] && state.selectTypes[1];
    //     //state.selectTypes[1] = undefined;
    //   }
    //   // type1, type2 모두 클릭한 상태에서 type2 클릭 해제: type2 요소만 삭제
    //   else if (state.selectTypes[0] === activeType && state.selectTypes[1] === undefined) {
    //     state.selectTypes = state.selectTypes.filter(type => type !== activeType);
    //   }
    //   // type1, type2 모두 클릭한 상태에서 추가로 요소 클릭: type1 해제, type2는 type1 할당, 새로운 요소가 type2에 할당
    //   else if (state.selectTypes[0] === activeType && state.selectTypes[1] === activeType) {
    //     state.selectTypes[0] = state.selectTypes[1];
    //     state.selectTypes[1] = activeType;
    //   }
  },
});

export default upToTwoSlice.reducer;
export const { add, remove } = upToTwoSlice.actions;
