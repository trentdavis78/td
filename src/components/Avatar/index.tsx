import Avatar from "../Avatar";

const LoginComponent = (props: any) => {
  const { data, actor, logout, login } = props;

  return (
    <>
      <nav
        style={{
          backgroundColor: "#111111",
          bottom: "0",
          boxShadow: "0 -1px 2px #111111",
          height: "45px",
          left: "0",
          position: "fixed",
          width: "100%",
          zIndex: "100000",
        }}
      >
        <h2
          style={{
            color: "#EEEEEE",
            fontSize: "14px",
            fontWeight: "normal",
            left: "50%",
            marginLeft: "-400px",
            padding: "13px 0 0",
            position: "absolute",
            width: "540px",
          }}
        >
          <i style={{ fontStyle: "normal", color: "#888" }}>Your Footer Text Here</i>
        </h2>
        <a
          className="tzine"
          href="#"
          style={{
            color: "#999999",
            fontSize: "12px",
            left: "50%",
            margin: "16px 0 0 110px",
            position: "absolute",
            textDecoration: "none",
            top: "0",
          }}
        >
          <i style={{ color: "#ccc", fontStyle: "normal" }}>
            <b style={{ color: "#c92020", fontWeight: "normal" }}>Your Link Text Here</b>
          </i>
        </a>
      </nav>

      <div
        id="colorNav"
        style={{
          width: "450px",
          margin: "0 auto",
        }}
      >
        <ul>
          <li style={{ listStyle: "none", boxShadow: "0 0 10px rgba(15, 23, 42, 1) inset,1px 1px 1px #CCC", display: "inline-block", lineHeight: "1", margin: "1px", borderRadius: "3px" }}>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none !important",
                fontSize: "24px",
                padding: "25px",
              }}
            >
              Your Link Text Here
            </a>
            <ul
              style={{
                position: "absolute",
                right: "0",
                margin: "20px",
                listStyle: "none",
                textAlign: "center",
                width: "180px",
                top: "52px",
                font: "bold 12px 'Open Sans Condensed', sans-serif",
                maxHeight: "0px",
                overflow: "hidden",
                WebkitTransition: "max-height 0.4s linear",
                MozTransition: "max-height 0.4s linear",
                transition: "max-height 0.4s linear",
              }}
            >
              <li style={{ backgroundColor: "rgba(15, 23, 42, 1)" }}>
                <a
                  href="#"
                  style={{
                    padding: "12px",
                    color: "rgb(240 253 250) !important",
                    textDecoration: "none !important",
                    display: "block",
                  }}
                >
                  Dropdown Item 1
                </a>
              </li>
              <li style={{ backgroundColor: "rgba(15, 23, 42, 0.678)" }}>
                <a
                  href="#"
                  style={{
                    padding: "12px",
                    color: "rgb(240 253 250) !important",
                    textDecoration: "none !important",
                    display: "block",
                  }}
                >
                  Dropdown Item 2
                </a>
              </li>
              {/* Add more dropdown items as needed */}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LoginComponent;
