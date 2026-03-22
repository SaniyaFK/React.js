function Msg ({userName, textColor}) {
  let design;
  return(
    <h2 style={{color: textColor, fontWeight: 300}}>Hello {userName}</h2>
  );
}

export default Msg;
