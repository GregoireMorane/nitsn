import { ChairActions } from './constants';

const initialState = {
  assiseColor: "#B0E0E6",
  dossierColor: "#B0E0E6",
  dossierLatColor: "#B0E0E6",
  initialAssiseColor: "#B0E0E6",
  initialDossierColor: "#B0E0E6",
  initialDossierLatColor: "#B0E0E6",
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ChairActions.SetAssiseColor:
      return { ...state, assiseColor: action.payload.color };
    case ChairActions.SetDossierColor:
      return { ...state, dossierColor: action.payload.color };
    case ChairActions.SetDossierLatColor:
      return { ...state, dossierLatColor: action.payload.color };
    case ChairActions.SetInitialAssiseColor:
      return { ...state, initialAssiseColor: action.payload.color };
    case ChairActions.SetInitialDossierColor:
      return { ...state, initialDossierColor: action.payload.color };
    case ChairActions.SetInitialDossierLatColor:
      return { ...state, initialDossierLatColor: action.payload.color };
    default:
      return state;
  }
}