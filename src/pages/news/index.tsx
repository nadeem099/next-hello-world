interface Props {
  news: Array<{
    id: string;
    title: string;
    category: string;
  }>;
}

export default function NewsArticles({ news }: Props) {
  return news.map((item) => (
    <div key={item.id}>
      {item.title} {item.category}
    </div>
  ));
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3030/news");
  const data = await response.json();
  return {
    props: {
      news: data,
    },
  };
}
