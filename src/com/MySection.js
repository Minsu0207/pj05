import "../styles/My.css";
import "../styles/main.css";

import imgHtml from "../images/html.png";
import imgCss from "../images/css.png";
import imgJava from "../images/js.png";
import imgReact from "../images/react.png";

const MySection = (probs) => {
  /*probs에 따라  if문장으로 구분*/
  let imgName = null;
  if (probs.h1 === "Html") imgName = imgHtml;
  else if (probs.h1 === "Css") imgName = imgCss;
  else if (probs.h1 === "JavaScript") imgName = imgJava;
  else if (probs.h1 === "React") imgName = imgReact;

  /*probs에 따라 object로 구분 */
  const pContent = {
    Html: "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용",
    Css: "Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어",
    JavaScript:
      " 웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원",
    React: "사용자 인터페이스를 만들기 위한 JavaScript 라이브러리",
  };

  return (
    <section>
      <span>
        <img src={imgName} alt="Html" />
      </span>
      <div className="content">
        <h1> {probs.h1} </h1>
        <p> {pContent[probs.h1]}</p>
      </div>
    </section>
  );
};

export default MySection;
