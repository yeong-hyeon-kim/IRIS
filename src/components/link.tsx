import { ILink } from "../mock/ILink";
import ListGroup from "react-bootstrap/ListGroup";

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
            <div className="ms-2 me-auto">
              <div>{data.title}</div>
              <a href={data.content}>{data.content}</a>
              <p>{data.id}</p>
            </div>
            <hr></hr>
          </ListGroup.Item>
        ))}
      </div>
    </>
  );
}

export default Link;
