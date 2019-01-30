import { Module } from "cerebral";
import model from "./model";
import {
  loadSource,
  onEidtButtonClicked,
  onCancelEditing,
  onSaveEditing,
  saveContent,
  saveTitle,
  saveCreateTime,
  saveModifyTime,
  onCreatingCodeChange,
  saveCreatingCreateTime,
  saveCreatingTitle,
  saveCreatingModifyTime,
  onAddCreatingTag,
  onSaveCreating,
  loadTags,
} from "./sequences";

export default Module({
  model,
  state: {
    isLoading: true,
    currentEditing: null,
    currentCreating: {},
    currentId: null,
    author: null,
    originSource: null,
    isPreview: true,
    tags: null,
  },
  signals: {
    loadSource,
    onEidtButtonClicked,
    onCancelEditingClicked: onCancelEditing,
    onSaveEditingClicked: onSaveEditing,
    onSaveCreatingClicked: onSaveCreating,
    onCreatingCodeChange,
    saveContent,
    saveTitle,
    saveCreateTime,
    saveModifyTime,
    loadTags,
    saveCreatingTitle,
    saveCreatingModifyTime,
    saveCreatingCreateTime,
    onAddCreatingTag,
  }
});
