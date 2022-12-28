import { ILink } from "../mock/ILink";
import ListGroup from "react-bootstrap/ListGroup";
import ListItem from "../style/componets/list";

type Props = {
  list: ILink[];
};

function Link({ list }: Props) {
  return (
    <>
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
    </>
  );
}

export default Link;
