import React from 'react';
import { Link } from 'gatsby';

import './styles.css';

export default class ProjectItem extends React.Component {

  render() {
    const { frontmatter } = this.props;
    return (
      <div className="project__item">
        <Link
          to={frontmatter.path}
          ref={this.linkDivRef}
          className="project__link">
          <h2 className="project__item__title">{frontmatter.title}</h2>
          <p className="project__item__excerpt">{frontmatter.excerpt}</p>
        </Link>
      </div>
    );
  }
}
