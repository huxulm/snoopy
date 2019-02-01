import { Module } from "cerebral";
import HttpProvider from '@cerebral/http';
import JwtProvider from "./providers/Jwt";
import Api from "./providers/Api";
import BrowserProvider from "./providers/Browser";
import model from "./model";
import * as sequences from "./sequences";

import editor from "./modules/editor";

export default Module({
  model,
  state: {
    hasLoadedApp: false,
    jwt: null,
    isAuthenticating: false,
    authToken: null,
    user: null,
    currentModal: undefined,
    blogList: null,
    blogDetail: null,
    scrollTop: 0,
    notifications: [],
  },
  getters: {
  },
  computed: {
  },
  signals: {
    signInClicked: sequences.signIn,
    logOutClicked: sequences.logout,
    loadPortalPage: sequences.loadPortalPage,
    loadEditorPage: sequences.loadEditorPage,
    modalClosed: sequences.closeModal,
    modalOpened: sequences.openModal,
    queryBlogList: sequences.queryBlogListByPager,
    queryBlogDetail: sequences.queryBlogDetailById,
    onScrollChange: sequences.onScrollChange,
    notificationAdded: sequences.addNotification,
    notificationRemoved: sequences.removeNotification,
  },
  catch: [],
  modules: {
    editor,
  },
  providers: {
    http: HttpProvider(),
    jwt: JwtProvider,
    browser: BrowserProvider,
    api: Api,
  },
});
