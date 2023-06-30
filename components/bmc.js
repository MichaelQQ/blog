import { useState, useEffect } from "react";
import Script from "next/script";
import HtmlToReact from "html-to-react";

const BuyMeACoffee = () => {
  const htmlToReactParser = new HtmlToReact.Parser();

  const slug = "mstu";
  const btnColor = "#000";
  const emoji = "";
  const font = "Lato";
  const text = "Buy me a coffee";
  const outlineColor = "#fff";
  const fontColor = "#ffffff";
  const coffeeColor = "#FFDD00";
  const [bmcBtn, setbmcBtn] = useState(null);
  useEffect(() => {
    window.bmcBtnWidget &&
      setbmcBtn(
        htmlToReactParser.parse(
          window.bmcBtnWidget(
            text,
            slug,
            btnColor,
            emoji,
            font,
            fontColor,
            outlineColor,
            coffeeColor
          )
        )
      );
  }, []);

  return (
    <div id="bmc-container">
      <Script
        type="text/javascript"
        src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
        data-name="bmc-button"
        data-slug={slug}
        data-color={btnColor}
        data-emoji={emoji}
        data-font={font}
        data-text={text}
        data-outline-color={outlineColor}
        data-font-color={fontColor}
        data-coffee-color={coffeeColor}
        onLoad={() => {
          setbmcBtn(
            htmlToReactParser.parse(
              window.bmcBtnWidget(
                text,
                slug,
                btnColor,
                emoji,
                font,
                fontColor,
                outlineColor,
                coffeeColor
              )
            )
          );
        }}
      ></Script>
      {bmcBtn}
    </div>
  );
};

export default BuyMeACoffee;
