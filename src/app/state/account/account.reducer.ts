import { buildState } from '@briebug/ngrx-auto-entity';
import { Action } from '@ngrx/store';

import { Account } from 'models/account.model';
import { IAccountEntityState } from 'state/account/account.state';

const { initialState, selectors } = buildState(Account);

export const {
  selectAll: selectAllAccounts,
  selectEntities: selectAccountEntities,
  selectIds: selectAccountIds,
  selectTotal: selectTotalAccounts
} = selectors;

export function accountReducer(state: IAccountEntityState = initialState, action: Action): IAccountEntityState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
