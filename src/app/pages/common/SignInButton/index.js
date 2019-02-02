import * as React from "react";
import { inject, observer } from "mobx-react";
import GoPlus from "react-icons/lib/go/plus";
import Row from "common/components/flex/Row";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 5%;
  width: auto;
  margin-right: 1rem;
  margin-left: 1rem;
  background: white;
  border: none;
  padding: .2rem;
  :hover {
    background: rgba(255, 255, 255, .8);
    transform: scale(1.1);
  }
`;

function SignInButton(props) {
  const { signals } = props;

  return (
    <Button
      small
      onClick={() => {
        signals.modalOpened({ modal: "siginChoose" });
      }}
      {...props}
    >
      <GoPlus size="1.2rem" color="#3B68B8" />登入
    </Button>
  );
}

export default inject("store", "signals")(observer(SignInButton));
