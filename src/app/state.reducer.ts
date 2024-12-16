import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { State } from './state.model';
import { StateActions } from './state.actions';

export const statesFeatureKey = 'states';

export interface State extends EntityState<State> {
  // additional entities state properties
}

export const adapter: EntityAdapter<State> = createEntityAdapter<State>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(StateActions.addState,
    (state, action) => adapter.addOne(action.state, state)
  ),
  on(StateActions.upsertState,
    (state, action) => adapter.upsertOne(action.state, state)
  ),
  on(StateActions.addStates,
    (state, action) => adapter.addMany(action.states, state)
  ),
  on(StateActions.upsertStates,
    (state, action) => adapter.upsertMany(action.states, state)
  ),
  on(StateActions.updateState,
    (state, action) => adapter.updateOne(action.state, state)
  ),
  on(StateActions.updateStates,
    (state, action) => adapter.updateMany(action.states, state)
  ),
  on(StateActions.deleteState,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(StateActions.deleteStates,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(StateActions.loadStates,
    (state, action) => adapter.setAll(action.states, state)
  ),
  on(StateActions.clearStates,
    state => adapter.removeAll(state)
  ),
);

export const statesFeature = createFeature({
  name: statesFeatureKey,
  reducer,
  extraSelectors: ({ selectStatesState }) => ({
    ...adapter.getSelectors(selectStatesState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = statesFeature;
