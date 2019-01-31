export function getSandbox({ props, api, path }) {
  return api
    .get(`/sandboxes/${props.id}`)
    .then(data => path.success({ sandbox: data }))
    .catch(error => {
      if (error.response.status === 404) {
        return path.notFound();
      }

      return path.error({ error });
    });
}

export function signInGithub({ browser, path, props }) {
  const popup = browser.openPopup('/v1/auth/github', 'sign in');
  return browser.waitForMessage('signin').then(data => {
    const jwt = data.jwt;
    popup.close();
    if (jwt) {
      return path.success({ jwt });
    }
    return path.error();
  })
}

export function setJwtFromProps({ jwt, state, props }) {
  jwt.set(props.jwt);
  state.set('jwt', props.jwt);
}

export function setJwtFromStorage({ jwt, state }) {
  state.set('jwt', jwt.get() || null);
}

export function removeJwtFromStorage( { jwt, state } ) {
  jwt.reset();
  state.set('jwt', null);
}

export function getUser({ api, path }) {
  return api
    .get(`/users/me`)
    .then(res => {
      if (res && res.data) {
        const { _id, name, avatar, email } = res.data;
        return path.success({
          user: { avatarUrl: avatar, id: _id, name, email }
        });
      } else {
        return path.error();
      }
    })
    .catch(err => path.error());
}

export function setModal( { state, props } ) {
  state.set('currentModal', props.modal);
}

export function queryBlogByPager( { state, props, api }) {
  return api.get(`/blogs/page?page=${props.page || 1}&limit=${props.limit || 4}`).then(res => {
    state.set('blogList', res.data);
  }).catch(err => {
    console.log(err);
    state.set('blogList', null);
  });
}

export function queryBlogById({ state, props, api, path }) {
  return api
    .get(`/blogs/q?id=${props.id}`)
    .then(res => {
      state.set("blogDetail", res.data);
      if (res && res.data) {
        return path.success({ data: res.data });
      } else {
        return path.error();
      }
    })
    .catch(err => {
      console.log(err);
      state.set("blogDetail", null);
      return path.error();
    });
}