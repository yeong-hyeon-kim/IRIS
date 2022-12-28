import IntroduceArticle from "../style/componets/introduce";

type IntroduceProps = {
  title: string;
  content: string;
};

function Introduce({ title, content }: IntroduceProps) {
  return (
    <>
      <IntroduceArticle>
          <h1>{title}</h1>
          <p>{content}</p>
      </IntroduceArticle>
    </>
  );
}

export default Introduce;
