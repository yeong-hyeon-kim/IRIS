import { ITestData } from "../mock/ITestData";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

type Props = {
  list: ITestData[];
};

function Link({ list }: Props) {
  return (
    <>
      <div className="List">
        {list.map((data) => (
          <ListGroup variant="flush">
            <ListGroup.Item>
              <div className="ms-2 me-auto">
                <div className="fw-bold">{data.title}</div>
                <a href={data.content}>{data.content}</a>
                <p>{data.id}</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    </>
  );
}

export default Link;
