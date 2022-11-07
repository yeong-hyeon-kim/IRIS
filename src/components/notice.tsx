type Props = {
  id: string;
  title: string;
  content: string;
  createDt: string;
};

function Notice({ id, title, content, createDt }: Props) {
  return (
    <>
      <div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <h2>{title}</h2>
          </div>
          <p>{content}</p>
          <p>{createDt}</p>
        </div>
      </div>
    </>
  );
}

export default Notice;
