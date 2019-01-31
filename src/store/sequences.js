import { set } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';


import * as actions from './actions';
import * as factories from './factories';

export const signIn = [
  set(state`isAuthenticating`, true),
  // factories.track('Sign In', {}),
  actions.signInGithub,
  {
    success: [
      actions.setJwtFromProps,
      actions.getUser,
      {
        success: [
          set(state`user`, props`user`),
        ],
        error: [
          factories.addNotification('Github authentication error!', 'error'),
        ]
      }
    ],
    error: [],
  },
  set(state`currentModal`, null),
  set(state`isAuthenticating`, false),
];

export const logout = [
  set(state`user`, null),
  actions.removeJwtFromStorage,
];

export const openModal = actions.setModal;

export const closeModal = [
  set(state`currentModal`, null)
]

export const loadPortalPage = factories.withLoadApp([]);

export const queryBlogListByPager = actions.queryBlogByPager;

export const queryBlogDetailById = [
  set(state`editor.isLoading`, true),
  actions.queryBlogById,
  {
    success: [
      set(state`editor.isLoading`, false),
    ],
    error: [
      set(state`editor.isLoading`, false),
    ]
  }
];

export const onScrollChange = [
  // set(state`scrollTop`, props.scrollTop),
  set(state`scrollTop`, props`scrollTop`),
]
