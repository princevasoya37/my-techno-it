import React from 'react';

const BlogCards = () => {
  return (
    <div className="blog-main">
      <div className="blog-container">
      <h2 className="team-text">Blog</h2>
      <p className="team-p">Lorem ipsum dolor sit amet</p>
        <div className="blog-inner-main">
          <div className="blog-item-wrapper">
          <div className="blog-item">
            <div className="blog-img">
              <img src="assets/images/blog-1.jpg" alt="blog-1" />
              <p className="blog-category">Domain & Hosting</p>
            </div>
            <div className="blog-title">
              <a href="/blog/how-to-host">How to host website on any hosting provider?</a>
            </div>
            <div className="blog-sub-title">
              <p className="blog-author">William Bla</p>
              <span className="blog-date">
                <time dateTime="2022-02-01">Feb 1, 2022</time>
              </span>
            </div>
          </div>
          </div>
          <div className="blog-item-wrapper">
          <div className="blog-item">
            <div className="blog-img">
              <img src="assets/images/blog-2.jpg" alt="blog-2" />
              <p className="blog-category">Advertisement</p>
            </div>
            <div className="blog-title">
              <a href="/blog/web-design-trends">How to create add on google adwords?</a>
            </div>
            <div className="blog-sub-title">
              <p className="blog-author">Jobi Ret</p>
              <span className="blog-date">
                <time dateTime="Oct 5, 2022">Oct 5, 2022</time>
              </span>
            </div>
          </div>
         </div>
         <div className="blog-item-wrapper">
          <div className="blog-item">
            <div className="blog-img">
              <img src="assets/images/blog-3.jpg" alt="blog-3" />
              <p className="blog-category">Marketing</p>
            </div>
            <div className="blog-title">
              <a href="/blog/seo-for-beginners">What is digital marketing and why is important?</a>
            </div>
            <div className="blog-sub-title">
              <p className="blog-author">Main Dow</p>
              <span className="blog-date">
                <time dateTime="Dec 22, 2022">Dec 22, 2022</time>
              </span>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogCards;
