import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { State } from './state.model';

export const StateActions = createActionGroup({
  source: 'State/API',
  events: {
    'Load States': props<{ states: State[] }>(),
    'Add State': props<{ state: State }>(),
    'Upsert State': props<{ state: State }>(),
    'Add States': props<{ states: State[] }>(),
    'Upsert States': props<{ states: State[] }>(),
    'Update State': props<{ state: Update<State> }>(),
    'Update States': props<{ states: Update<State>[] }>(),
    'Delete State': props<{ id: string }>(),
    'Delete States': props<{ ids: string[] }>(),
    'Clear States': emptyProps(),
  }
});
