﻿/// <reference path="../interfaces/index" />

import { ActionTypes } from '../actions/index';
import PT from '../interfaces/index'

enum Gender {
  Male,
  Female
}

const initialState = {
  run: 0,
  pushups: 0,
  situps: 0,
  age: 0,
  gender: Gender.Male,
  branch: 'Army',
  scoreTotal: 0
}

export function apft(state: PT.ApftEvents, action) {

  console.log(state)
  state = state || initialState;

  switch (action.type) {
    case ActionTypes.EDIT_PT_EVENT:
      return action.event;
    case ActionTypes.CALC_APFT_SCORE:
      return Object.assign({}, state, { scoreTotal: action.scoreTotal });
    case ActionTypes.RESET_PT_SHEET:
      return state;
    case ActionTypes.GET_CSV_DATA:
      return Object.assign({}, state, action.csvData)
    default:
      return state;
  }
   
}