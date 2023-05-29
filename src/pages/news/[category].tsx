import { GetServerSidePropsContext } from "next";

interface Props {
  articles: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  category: string;
}

export default function ArticlesWithCategory({ articles, category }: Props) {
  return (
    <>
      <p>Showing the articles of {category}</p>
      {articles.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} {item.description}
          </p>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params, req, res, query } = context;

  console.log(req.headers.cookie);
  console.log(query);
  res.setHeader("Set-Cookie", ["name=Nadeem"]);

  const response = await fetch(
    `http://localhost:3030/news?category=${params?.category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category: params?.category,
    },
  };
}
