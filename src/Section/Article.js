/**
 * Created by Programmer1 on 12/12/2017.
 */
/**
 * Created by Programmer1 on 12/12/2017.
 */
import React from 'react';
import { ArticleWrapper } from './style';

class Article extends React.Component {
  render() {
    const { children } = this.props;

    return (<ArticleWrapper {...this.props}>{children}</ArticleWrapper>);
  }
}

export default Article;
