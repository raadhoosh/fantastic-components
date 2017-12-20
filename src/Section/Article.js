/**
 * Created by Programmer1 on 12/12/2017.
 */
/**
 * Created by Programmer1 on 12/12/2017.
 */
import React from 'react';
import ArticleStyled from './style/ArticleStyled';

class Article extends React.Component {
  render() {
    const { children } = this.props;

    return (<ArticleStyled {...this.props}>{children}</ArticleStyled>);
  }
}

export default Article;
