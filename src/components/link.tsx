import { ITestData } from "../mock/ITestData";
import ListGroup from "react-bootstrap/ListGroup";

type Props = {
  list: ITestData[];
};

function Link({ list }: Props) {
  return (
    <>
      <div className="List">
        <ListGroup variant="flush" key="KEY">
          {list.map((data) => (
            <ListGroup.Item key={data.id.toString()}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">{data.title}</div>
                <a href={data.content}>{data.content}</a>
                <p>{data.id}</p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}

export default Link;
