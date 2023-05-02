import { ILink } from "../mock/ILink";
import ListGroup from "react-bootstrap/ListGroup";
import ListItem from "../style/componets/list";
import { ITheme } from "../style/componets/theme";

type Props = {
  list: ILink[];
  theme_container: ITheme;
};

function Link({ list, theme_container }: Props) {
  return (
    <>
      <div style={theme_container.style}>
        <div className="List">
          <hr></hr>
          {list.map((data) => (
            <ListGroup.Item key={data.id.toString()}>
              <ListItem>
                <h4>{data.title}</h4>
                <a href={data.content}>{data.content}</a>
                <p>{data.id}</p>
              </ListItem>
              <hr></hr>
            </ListGroup.Item>
          ))}
        </div>
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

export default Link;
