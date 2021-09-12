import Toolbar from "../../components/toolbar";
import styles from "../../styles/Home.module.css";

export const Feed = ({ pageNumber, articles }) => {
  console.log(articles, pageNumber);
  return (
    <div className="page-container">
      {/* Toolbar */}
      <Toolbar />

      {/* Home Page Content */}
      <div className={styles.main}>
        <h1>Headlines</h1>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  // Getting page number
  const pageNumber = pageContext.query.pageID;

  //   Checking if page number exists and limits
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  // Fetching Data
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEWS_API}`,
      },
    }
  );

  //   const api
  const newsData = await apiResponse.json();

  //   Destructuring Received Data
  const { articles } = newsData;

  //   Return
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
