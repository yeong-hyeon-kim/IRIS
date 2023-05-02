import IntroduceArticle from "../style/componets/introduce";
import { ITheme } from "../style/componets/theme";

type IntroduceProps = {
  title: string;
  content: string;
  theme_container: ITheme;
};

function Introduce({ title, content, theme_container }: IntroduceProps) {
  return (
    <>
      <div style={theme_container.style}>
        <IntroduceArticle>
          <h1>{title}</h1>
          <p>{content}</p>
        </IntroduceArticle>
        <footer>
          <div className="Copylight">
            <hr></hr>
            Copyright (c) {new Date().getFullYear()} IRIS.
          </div>
        </footer>
      </div>
    </>
  );
}

export default Introduce;
