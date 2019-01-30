import moment from "moment";

export function setIsLoading({ state }) {
  state.set('editor.isLoading', true);
}

export function setLoadingSuccess({ state }) {
  state.set('editor.isLoading', false);
}

export function setOriginSourceAfterLoaded({ state, props }) {
  state.set('editor.originSource', props.data);
  state.set('editor.currentEditing', props.data);
}

export function setTags({ state, props }) {
  state.set('editor.tags', props.tags);
}

export function setIsEditing({ state }) {
  state.set('editor.isPreview', false);
}

export function setIsPreview({ state }) {
  state.set('editor.isPreview', true);
}

export function setTitle({ state, props }) {
  state.set('editor.currentEditing.title', props.title);
}

export function setCreateTime({ state, props }) {
  state.set('editor.currentEditing.createTime', props.createTime);
}

export function setModifyTime({ state, props }) {
  state.set('editor.currentEditing.modifyTime', props.modifyTime);
}

export function setCreatingTags({ state, props }) {
  state.set("editor.currentCreating.tags", [props.tag.name]);
}

export function setCreatingTitle({ state, props }) {
  state.set('editor.currentCreating.title', props.title);
}

export function setCreatingCreateTime({ state, props }) {
  state.set('editor.currentCreating.createTime', props.createTime);
}

export function setCreatingModifyTime({ state, props }) {
  state.set('editor.currentCreating.modifyTime', props.modifyTime);
}

export function setCurrentEditingMdContent( { state, props } ) {
  state.set('editor.currentEditing.mdContent', props.mdContent);
  state.set('editor.currentEditing.modifyTime', moment(Date.now()).toISOString());
}

export function saveCurrent({ api, state, path }) {
  return api.post(`/blogs/modify`, state.get('editor.currentEditing')).then(res => {
    if (res && res.data) {
      return path.success({ id: res.data });
    } else {
      return path.error({ msg: '失败' });
    }
  }).catch(err => path.error({ msg: err }));
}

export function saveCreating({ api, state, path }) {
  return api.post(`/blogs/add`, state.get('editor.currentCreating')).then(res => {
    if (res && res.data) {
      return path.success({ id: res.data });
    } else {
      return path.error({ msg: '失败' });
    }
  }).catch(err => path.error({ msg: err }));
}

export function getTags({ api, state, path }) {
  return api.get(`/blogs/tags`).then(res => {
    if (res && res.data) {
      return path.success({ tags: res.data });
    } else {
      return path.error({ msg: '失败' });
    }
  }).catch(err => path.error({ msg: err }));
}


export function alert( { props } ) {
  window.alert(props.msg || 'Unknown.');
}

export function changeCodeOnCreating({ props, state }) {
  state.set('editor.currentCreating.mdContent', props.code);
}