import {
  SELECT_CARD_ACTION,
  DESELECT_CARD_ACTION,
  DELETE_SINGLE_CARD_ACTION,
  DELETE_BULK_CARD_ACTION,
  SET_INIT_DATA,
} from "../actions/restorentSearchAction";
import _ from "lodash";

const getInitState = {
  restaurantListVisible: [], // visible in ui
  currentSelectedList: [], // list of id of current selected restaurant
};

const deleteOneRestaurantFromList = (state, id) => {
  const cpyState = _.cloneDeep(state);
  const index = cpyState.restaurantListVisible.findIndex(
    ({ restaurant }) => restaurant.id === id
  );
  if (index >= 0) {
    cpyState.restaurantListVisible.splice(index, 1);
  }
  const indexSelected = cpyState.currentSelectedList.findIndex(
    ({ restaurant }) => restaurant.id === id
  );
  if (indexSelected >= 0) {
    cpyState.currentSelectedList.splice(indexSelected, 1);
  }
  return cpyState;
};

const deleteBulRestaurantFromList = (state) => {
  const cpyState = _.cloneDeep(state);
  const idMap = {};
  cpyState.currentSelectedList.forEach((id) => {
    idMap[id] = true;
  });
  const newList = cpyState.restaurantListVisible.filter(
    ({ restaurant }) => !!idMap[restaurant.id]
  );
  cpyState.restaurantListVisible = newList;
  cpyState.currentSelectedList = [];
  return cpyState;
};

const selectCard = (state, id) => {
  const cpyState = _.cloneDeep(state);
  console.log(cpyState);
  const indexSelected = cpyState.currentSelectedList.findIndex(
    (restaurantId) => {
      return restaurantId === id;
    }
  );
  if (indexSelected < 0) {
    cpyState.currentSelectedList.push(id);
  }
  return cpyState;
};

const deselectCard = (state, id) => {
  const cpyState = _.cloneDeep(state);
  const indexSelected = cpyState.currentSelectedList.findIndex(
    (restaurantId) => {
      return restaurantId === id;
    }
  );
  if (indexSelected >= 0) {
    cpyState.currentSelectedList.splice(indexSelected, 1);
  }
  return cpyState;
};

export const navbarReducer = (state = getInitState, action) => {
  switch (action.type) {
    case SELECT_CARD_ACTION:
      return selectCard(state, action.payload);
    case DESELECT_CARD_ACTION:
      return deselectCard(state, action.payload);
    case DELETE_SINGLE_CARD_ACTION:
      return deleteOneRestaurantFromList(state, action.payload);
    case DELETE_BULK_CARD_ACTION:
      return deleteBulRestaurantFromList(state);
    case SET_INIT_DATA:
      return {
        restaurantListVisible: action.payload.map((restaurant) => {
          restaurant.restaurant.isSelected = false;
          return restaurant;
        }),
        currentSelectedList: [],
      };
    default:
      return state;
  }
};
