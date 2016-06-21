/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

import React from 'react';
import Layout from '../../components/Layout';
import Container from '../../components/Container';

const s = {
  list: {
    paddingLeft: 0,
    listStyleType: 'none',
  },
};

function HomePage({ title, commits }) {
  return (
    <Layout>
      <Container>
        <h1 className="mdl-typography--title">{title}</h1>
        <p className="mdl-typography--body-1">This is a demo page showing the latest commits from <a href="https://github.com/kriasoft/react-starter-kit">React Starter Kit</a> repository:</p>
        <ul style={s.list}>
          {
            commits.map(x => (
              <li key={x.sha}>
                [<a href={x.url}>{x.sha.substr(0, 5)}</a>] {x.commit.message} by
                <a href={`https://github.com/${x.author.login}`}>{x.author.login}</a>
              </li>
            ))
          }
        </ul>
      </Container>
    </Layout>
  )
}

export default HomePage;
