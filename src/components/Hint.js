import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const HIntContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 12px;
`;

const HintInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #757575;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const PopupCnontainer = styled.div`
  position: absolute;
  left: 94%;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 9px;
  width: 130px;
`;

const Hint = () => {
  const [showPopup, SetshowPopup] = useState(false);

  const firstref = useRef(null);

  useEffect(() => {
    if (firstref.current) firstref.current.focus();
  });

  return (
    <HIntContainer>
      <HintInner
        onClick={() => {
          SetshowPopup(true);
        }}
      >
        ?
      </HintInner>
      {showPopup && (
        <PopupCnontainer
          ref={firstref}
          onBlur={() => {
            SetshowPopup(false);
          }}
          tabIndex={0}
        >
          言語の名前が入ります
        </PopupCnontainer>
      )}
    </HIntContainer>
  );
};

export default Hint;
