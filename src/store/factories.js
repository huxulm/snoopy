import { sequence, parallel } from 'cerebral';
import { set, when } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';
import * as actions from './actions';
// import { initializeNotifications } from './modules/user-notifications/sequences';

export function addNotification(
  title,
  notificationType,
  timeAlive,
  buttons = []
) {
  // eslint-disable-next-line no-shadow
  return function addNotification({ state, resolve }) {}
}  

export function withLoadApp(continueSequence) {
  return sequence(
    'loadApp',
    [
      when(state`hasLoadedApp`),
      {
        true: continueSequence,
        false: [
          set(state`isAuthenticating`, true),
          actions.setJwtFromStorage,
          when(state`jwt`),
          {
            true: [
              parallel([
                sequence('loadUser', [
                  actions.getUser,
                  {
                    success: [
                      set(state`user`, props`user`),
                    ],
                    error: [
                      actions.removeJwtFromStorage,
                    ]
                  }
                ]),
                continueSequence,
              ])
            ],
            false: [
              actions.removeJwtFromStorage,
              continueSequence,
            ]
          },
          set(state`hasLoadedApp`, true),
          set(state`isAuthenticating`, false),
        ]
      }
    ]
  )
}