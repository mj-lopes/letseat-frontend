import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLoadingStyle } from "./style";
import { CSSTransition } from "react-transition-group";

import "./style.css";

export const Loading = ({ carregando }: { carregando: boolean }) => {
  const [montado, setMontado] = useState(carregando);
  const { classes } = useLoadingStyle();
  const body = useRef(document.querySelector("body"));

  useEffect(() => {
    setMontado(carregando);
  }, [carregando]);

  function handleTravarScroll() {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    if (body.current) body.current.style.overflowY = "hidden";
  }

  function handleLiberarScroll() {
    if (body.current) body.current.style.overflowY = "scroll";
  }

  return (
    <>
      <CSSTransition
        in={montado}
        timeout={300}
        classNames="bgvermelho"
        unmountOnExit
        mountOnEnter
        onExited={handleLiberarScroll}
        onEntering={handleTravarScroll}
      >
        <div className={classes.BgVermelho}></div>
      </CSSTransition>
      <CSSTransition
        in={montado}
        timeout={300}
        classNames="bgazul"
        unmountOnExit
        mountOnEnter
      >
        <div className={classes.BgAzul}></div>
      </CSSTransition>
      <CSSTransition
        in={montado}
        timeout={300}
        classNames="bgbege"
        unmountOnExit
        mountOnEnter
      >
        <div className={classes.BgBage}></div>
      </CSSTransition>
    </>
  );
};
