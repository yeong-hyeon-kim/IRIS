type Props = {
  id: string;
  title: string;
  content: string;
  createDt: string;
};

function Notice({ id, title, content, createDt }: Props) {
  console.log(id, title, content, createDt);
  return (
    <>
      <div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">{title}</div>
          <a href={content}>{content}</a>
          <p>{id}</p>
        </div>
      </div>
    </>
  );
}

export default Notice;
