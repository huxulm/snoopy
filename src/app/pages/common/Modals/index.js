import React from "react";
import Modal from "app/components/Modal";
import { inject, observer } from "mobx-react";
import GithubIcon from "react-icons/lib/go/mark-github";
import Weibo from "../../../components/Icons/weibo";
import SignInChoose from "./SignInChoose";

const modals = {
  default: {
    Component: GithubIcon,
    width: 400,
  },
  weibo: {
    Component: Weibo,
    width: 400,
  },
  siginChoose: {
    Component: SignInChoose,
    width: 400,
  }
}

function Modals({ store, signals }) {
  const modal = store.currentModal && modals[store.currentModal];
  return (
    <Modal
      isOpen={Boolean(modal)}
      width={modal && modal.width}
      onClose={(isKeyDown) => signals.modalClosed({ isKeyDown })}
    >
      {
        modal? React.createElement(modal.Component, {
          closeModal: () => signals.modalClosed({ isKeyDown: false })
        }) : null
      }
    </Modal>
  )
}

export default inject('store', 'signals')(observer(Modals));