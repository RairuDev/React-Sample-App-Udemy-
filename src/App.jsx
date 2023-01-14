import React, { useEffect, useState } from "react";
import { ColorfulMessage } from './components/ColorfulMessage';

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFacaShowFlag] = useState(false);
  console.log("faceShowFlag" + faceShowFlag)//false

  const onClickCountUp = () => {
    setNum(num + 1)
  }

  // ON/OFFのボタンを押したら
  const onClickSwitchShowFlag = () => {
    setFacaShowFlag(!faceShowFlag);
  }

  console.log("numの値を確認" + num)
  // からの配列を設定することで画面を表示する1回のみ処理が通るようになる
  useEffect(() => {
    console.log("useEffect!!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFacaShowFlag(true)
      } else {
        faceShowFlag && setFacaShowFlag(false)
      }
    }
  }, [num])


  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColorfulMessage color="blue" fontWeight="bold">お元気ですか？?</ColorfulMessage>
      <ColorfulMessage color="pink" fontWeight="bold">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />

      <button onClick={onClickSwitchShowFlag}>on/off</button>

      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}

    </>
  );
};

export default App;
