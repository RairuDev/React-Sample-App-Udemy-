import React from 'react';

export const ColorfulMessage = (props) => {
  // console.log("カラフル")

  const { color, children } = props;
  const contentStyle = {
    // color: color,
    color,//このように省略できる
    fontSize: '18px',
    fontWeight: props.fontWeight
  }
  return (
    <p style={contentStyle}>{children}</p>

  );
}
