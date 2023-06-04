import {
  NewsBox,
  NewsDescription,
  NewsHeaderLine,
  NewsSource,
  NewsSubTextBox,
  NewsTextBox,
  NewsThumbnailSection,
  Newspublished,
} from '../AccountsStyle';

const NewsList = ({ newsData, id }) => {
  const handleClick = () => window.open(`${newsData[id].url}`);
  return (
    <>
      <NewsBox onClick={handleClick}>
        <NewsThumbnailSection newsThumbnail={newsData[id]?.urlToImage} />
        <NewsTextBox>
          <NewsHeaderLine>
            {newsData[id]?.title.length > 10
              ? newsData[id]?.title.substring(0, 21) + '...'
              : newsData[id]?.title}
          </NewsHeaderLine>
          <NewsDescription>
            {newsData[id]?.description?.length > 10
              ? newsData[id]?.description.substring(0, 24) + '...'
              : newsData[id]?.description}{' '}
          </NewsDescription>
          <NewsSubTextBox>
            <NewsSource>
              {newsData[id]?.source.name?.length > 10
                ? newsData[id]?.source.name.substring(0, 20) + '...'
                : newsData[id]?.source.name}{' '}
            </NewsSource>
            <Newspublished>
              {newsData[id]?.publishedAt.substring(0, 10)}
            </Newspublished>
          </NewsSubTextBox>
        </NewsTextBox>
      </NewsBox>
    </>
  );
};

export default NewsList;
