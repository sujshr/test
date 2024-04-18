function ToolBar() {
  return (
    <div className="toolBarContainer">
      <div id="toolbar">
        <span>
          <button className="button ql-bold"></button>
          <button className="ql-italic"></button>
          <button className="ql-underline"></button>
          <button className="ql-strike"></button>
        </span>

        <span>
          <button className="ql-align" value=""></button>
          <button className="ql-align" value="center"></button>
          <button className="ql-align" value="right"></button>
          <button className="ql-align" value="justify"></button>
        </span>

        <select className="ql-size" defaultValue={""}>
          <option></option>
          <option value="small"></option>
          <option value="large"></option>
          <option value="huge"></option>
        </select>

        <button className="ql-clean"></button>

        {/* <span>
          <button className="ql-blockquote"></button>
          <button className="ql-code-block"></button>

          <span>
            <button className="ql-link"></button>
            <button className="ql-image"></button>
          </span>

          <span>
            <button className="ql-list" value="ordered"></button>
            <button className="ql-list" value="bullet"></button>
          </span>

          <span>
            <button className="ql-script" value="sub"></button>
            <button className="ql-script" value="super"></button>
          </span>

          <select className="ql-color">
            <option value="red"></option>
            <option value="green"></option>
            <option value="blue"></option>
          </select>

          <select className="ql-background">
            <option value="red"></option>
            <option value="green"></option>
            <option value="blue"></option>
          </select>
        </span> */}
      </div>
    </div>
  );
}

export default ToolBar;
