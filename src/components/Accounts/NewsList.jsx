import React from 'react';
import {
  NewsContainer,
  NewsDescription,
  NewsHeaderLine,
  NewsSource,
  NewsSubTextBox,
  NewsTextBox,
  NewsThumbnailSection,
  Newspublished,
} from '../AccountsStyle';

const NewsList = ({ newsData, id }) => {
  return (
    <>
      <NewsContainer>
        <NewsThumbnailSection newsThumbnail={newsData[id]?.urlToImage} />
        <NewsTextBox>
          <NewsHeaderLine>
            {newsData[id]?.title.length > 10
              ? newsData[id]?.title.substring(0, 21) + '...'
              : newsData[id]?.title}
          </NewsHeaderLine>
          <NewsDescription>
            {newsData[id]?.description.length > 10
              ? newsData[id]?.description.substring(0, 22) + '...'
              : newsData[id]?.description}{' '}
          </NewsDescription>
          <NewsSubTextBox>
            <NewsSource>{newsData[id]?.source.name} </NewsSource>
            <Newspublished>
              {newsData[id]?.publishedAt.slice(0, 10)}
            </Newspublished>
          </NewsSubTextBox>
        </NewsTextBox>
      </NewsContainer>
    </>
  );
};

export default NewsList;
