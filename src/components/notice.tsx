import NoticeArticle from "../style/componets/notice";
import { ITheme } from "../style/componets/theme";

type Props = {
  id: string;
  title: string;
  content: string;
  createDt: string;
  theme_container: ITheme;
};

function Notice({ id, title, content, createDt, theme_container }: Props) {
  return (
    <>
      <div style={theme_container.style}>
        <NoticeArticle className="Introduce">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <h2>{title}</h2>
            </div>
            <p>{content}</p>
            <p>{createDt}</p>
          </div>
        </NoticeArticle>
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

export default Notice;
