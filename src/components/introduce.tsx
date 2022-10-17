type IntroduceProps ={
  title: string;
  content: string;
}

function Introduce({title, content}: IntroduceProps) {
  return (
    <>
      <article className="introduce">
        <h1>{title}</h1>
        <p>{content}</p>
      </article>
    </>
  );
}

export default Introduce;
