import { types } from 'mobx-state-tree';

const User = types.model({
  avatarUrl: types.maybeNull(types.string),
  email: types.maybeNull(types.string),
  id: types.maybeNull(types.string),
  name: types.maybeNull(types.string),
  username: types.maybeNull(types.string)
});

const Tag = types.model({
  id: types.maybeNull(types.string),
  name: types.maybeNull(types.string),
});

export const Blog = types.model({
  author: types.maybeNull(User),
  createTime: types.maybeNull(types.string),
  htmlContent: types.maybeNull(types.string),
  id: types.maybeNull(types.string),
  isDelete: types.maybeNull(types.string),
  mdContent: types.maybeNull(types.string),
  modifyTime: types.maybeNull(types.string),
  pictures: types.maybeNull(types.array(types.string)),
  tags: types.array(types.maybeNull(Tag)),
  title: types.maybeNull(types.string),
  cover: types.maybeNull(types.string),
});

export default {
  hasLoadedApp: types.boolean,
  jwt: types.maybeNull(types.string),
  isAuthenticating: types.boolean,
  authToken: types.maybeNull(types.string),
  user: types.maybeNull(
    User
  ),
  currentModal: types.maybeNull(types.string),
  blogList: types.maybeNull(
    types.model({
      pageSize: types.number,
      totalPages: types.number,
      total: types.number,
      docs: types.array(types.maybeNull(Blog)),
      pageNo: types.number
    })
  ),
  blogDetail: types.maybeNull(Blog),
  scrollTop: types.maybeNull(types.number),
};