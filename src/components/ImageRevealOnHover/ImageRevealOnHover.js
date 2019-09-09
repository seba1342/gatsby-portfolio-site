import React from 'react';
import { Link } from 'gatsby';

import './styles.css';

export default class ImageRevealOnHover extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mouseX: 0, mouseY: 0 };

    this.revealImage = this.revealImage.bind(this);
    this.hideImage = this.hideImage.bind(this);

    this.imageElementRef = React.createRef();
    this.linkDivRef = React.createRef();
  }

  revealImage(e) {
    this.setState({ mouseX: e.clientX, mouseY: e.clientY });

    const { mouseX, mouseY } = this.state;

    // had to include this check to avoid it moving the image to the original state x and y (0,0)
    if (mouseX !== 0 && mouseY !== 0) {
      this.imageElementRef.current.style.position = 'absolute';
      this.imageElementRef.current.style.display = 'block';
      this.imageElementRef.current.style.left = (mouseX + 10) + 'px';
      this.imageElementRef.current.style.top = (mouseY + 20) + 'px';
    }

  }

  hideImage() {
    this.imageElementRef.current.style.display = 'none';
    this.imageElementRef.current.style.left = '0px';
    this.imageElementRef.current.style.top = '0px';
  }

  render() {
    const { imgSrc, frontmatter } = this.props;
    return (
      <Link
        to={frontmatter.path}
        ref={this.linkDivRef}
        className="project__item"
        onMouseMove={this.revealImage}
        onMouseOut={this.hideImage}>

        <div className="project__title">{frontmatter.title}</div>
        <p className="project__excerpt">{frontmatter.excerpt}</p>

        <img ref={this.imageElementRef} src={imgSrc} alt="Hover" className="project__image" />
      </Link>
    );
  }
}
