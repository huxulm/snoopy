import { set } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';

import { queryBlogById } from "../../actions";
import * as actions from "./actions";

export const loadSource = [
  set(state`editor.isLoading`, true),
  queryBlogById,
  {
    success: [
      actions.setOriginSourceAfterLoaded,
    ],
    error: [
      set(state`editor.originSource`, null),
      set(state`editor.currentEditing`, null),
    ],
  },
  set(state`editor.isLoading`, false),
];

export const loadTags = [
  actions.getTags,
  {
    success: [
      actions.setTags,
    ],
    error: [
    ],
  },
];

export const onEidtButtonClicked = [
  actions.setIsEditing,
];

export const onCancelEditing = [
  actions.setIsPreview,
]

export const onSaveEditing = [
  // TODO request save...
  actions.setCurrentEditingMdContent,
  actions.saveCurrent,
  {
    success: [
      actions.setIsPreview,
      actions.alert,
      ...loadSource,
    ],
    error: [
      actions.alert,
    ],
  }
]

export const saveContent = [
  actions.setCurrentEditingMdContent,
]

export const saveTitle = [
  actions.setTitle,
]

export const saveCreateTime = [
  actions.setCreateTime,
]

export const saveModifyTime = [
  actions.setModifyTime,
]

export const saveCreatingTitle = [
  actions.setCreatingTitle,
]

export const saveCreatingCreateTime = [
  actions.setCreatingCreateTime,
]

export const saveCreatingModifyTime = [
  actions.setCreatingModifyTime,
]

export const onCreatingCodeChange = [
  actions.changeCodeOnCreating
]

export const onAddCreatingTag = [
  // actions.setCreatingTags
]

export const onSaveCreating = [
  // TODO request save...
  // actions.setCurrentEditingMdContent,
  actions.saveCreating,
  {
    success: [
      actions.alert,
    ],
    error: [
      actions.alert,
    ],
  }
]
