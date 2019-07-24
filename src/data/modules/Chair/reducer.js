import { ChairActions } from './constants';

const initialState = {
  assiseColor: "#B0E0E6",
  dossierColor: "#B0E0E6",
  dossierLatColor: "#B0E0E6",
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ChairActions.SetAssiseColor:
      return { ...state, assiseColor: action.payload.color };
    case ChairActions.SetDossierColor:
      return { ...state, dossierColor: action.payload.color };
    case ChairActions.SetDossierLatColor:
      return { ...state, dossierLatColor: action.payload.color };
    default:
      return state;
  }
}