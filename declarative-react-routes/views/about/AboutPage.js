/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

import React from 'react';
import Layout from '../../components/Layout';
import Container from '../../components/Container';

const title = 'About Us';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <Container>
          <h1 className="mdl-typography--title">{title}</h1>
          <p className="mdl-typography--body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
            lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. </p>
          <p className="mdl-typography--body-1">Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. <i>Lorem
            ipsum dolor sit amet, consectetur adipiscing elit</i>. Curabitur tortor. Pellentesque nibh. Aenean quam. In
            scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. <i>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit</i>. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
            vel, suscipit quis, luctus non, massa. <b>Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos</b>. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. <b>Curabitur
              sodales ligula in libero</b>. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque
            volutpat condimentum velit. </p>
          <p className="mdl-typography--body-1">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nam nec ante. <b>Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa</b>.
            Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla
            facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum
            sapien. Proin quam. <b>Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum
              ante quis turpis</b>. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer
            euismod lacus luctus magna. </p>
          <p className="mdl-typography--body-1">Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at
            interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue
            congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit
            vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. <i>Nunc feugiat mi
              a tellus consequat imperdiet</i>. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.
            Nulla facilisi. </p>
          <p className="mdl-typography--body-1">Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a
            tortor. Integer id quam. Morbi mi. <b>Morbi in dui quis est pulvinar ullamcorper</b>. Quisque nisl felis,
            venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam.
            Aenean laoreet. <b>Curabitur sit amet mauris</b>. Vestibulum nisi lectus, commodo ac, facilisis ac,
            ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit
            orci. <b>Integer id quam</b>. Ut eu diam at pede suscipit sodales. <b>Quisque nisl felis, venenatis
              tristique, dignissim in, ultrices sit amet, augue</b>. Aenean lectus elit, fermentum non, convallis id,
            sagittis at, neque. </p>
          <p className="mdl-typography--body-1">Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. <b>Morbi
            mi</b>. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer
            risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Ut eu diam at pede suscipit
              sodales</b>. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
            nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. </p>
          <p className="mdl-typography--body-1">Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
            lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque
            nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. <b>Fusce nec tellus sed augue semper
              porta</b>. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. </p>
          <p className="mdl-typography--body-1"><b>Curabitur sodales ligula in libero</b>. Morbi lectus risus, iaculis
            vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla
            metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed
            lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. <i>Pellentesque
              nibh</i>. Nulla facilisi. <b>Sed convallis tristique sem</b>. Ut fringilla. Suspendisse potenti. Nunc
            feugiat mi a tellus consequat imperdiet. <i>Aenean quam</i>. Vestibulum sapien. </p>
          <p className="mdl-typography--body-1">Proin quam. Etiam ultrices. <b>Nulla facilisi</b>. Suspendisse in justo
            eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. <b>Nam nec ante</b>. Quisque
            cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.
            Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet
            pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt
            malesuada tellus. </p>
          <p className="mdl-typography--body-1">Ut ultrices ultrices enim. <b>Quisque cursus, metus vitae pharetra
            auctor, sem massa mattis sem, at interdum magna augue eget diam</b>. Curabitur sit amet mauris. Morbi in dui
            quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet
            risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices
            sit amet, augue. Proin sodales libero eget ante. </p>
        </Container>
      </Layout>
    );
  }
}

export default AboutPage;
