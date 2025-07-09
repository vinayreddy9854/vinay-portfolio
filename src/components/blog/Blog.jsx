import React from 'react';
import './Blog.css';
import Image1 from '../../assets/blog-1.svg';

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
          <a href="#portfolio">
           <span className="blog__category">Projects</span>
            </a>
          <a href="#portfolio">
          <img src={Image1} alt="Blog Preview" className="blog__img" />
            </a>

          </div>

          <div className="blog__details">
            <h3 className="blog__title">
              Building a Fullstack Portfolio with React & Firebase
            </h3>
            <div className="blog__meta">
              <span>08 July, 2025</span>
              <span className="blog__dot">.</span>
              <span>Vinay Reddy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;



