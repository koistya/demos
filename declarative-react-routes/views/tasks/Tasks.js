/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

import React from 'react';
import Layout from '../../components/Layout';
import Container from '../../components/Container';

function Tasks() {
  return (
    <Layout>
      <Container>
        <h1 className="mdl-typography--title">Tasks</h1>
        <p className="mdl-typography--body-1">Some tasks...</p>
      </Container>
    </Layout>
  )
}

export default Tasks;
