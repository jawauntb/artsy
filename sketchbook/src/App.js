import {cityMaker} from './sketches/sketch';
import { useEffect, useRef, useState } from 'react';
import {p5} from 'p5';

const App = () => {
   const myRef = useRef();
   let mySketch = cityMaker;
   const aRef = useRef<any>();

  useEffect(() => {
    new p5(mySketch, aRef.current)
  }, [mySketch])
  return (
    <div ref={aRef}>

    </div>
  )
}