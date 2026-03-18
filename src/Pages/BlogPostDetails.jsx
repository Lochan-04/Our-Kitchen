import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../Data/BlogData';
import styles from './BlogPostDetails.module.css';
import view from '../assets/view.png'
import comment from '../assets/comment.png';

const BlogPostDetails = () => {
  const [commentText, setCommentText] = useState("");
  const { id } = useParams();

  
  const post = blogPosts.find((p) => p.id === parseInt(id));

  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Our Kitchen`;
    }
  }, [post]);

  if (!post) return <div>Post not found!</div>;

  
  const handlePublish = (e) => {
    e.preventDefault();
    if (commentText.trim() === "") return;
    setCommentText(""); 
    alert("Comment published!");
  };

  const calculateReadTime = (contentData) => {
    const wordsPerMinute = 200;
    const text = Array.isArray(contentData) ? contentData.join(" ") : contentData;
    if (!text) return "0 min read";
    const numberOfWords = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(numberOfWords / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.detailContainer}>
        <header className={styles.header}>
          <p className={styles.meta}>{post.date} • {calculateReadTime(post.content)}</p>
          <h1 className='heading'>{post.title}</h1>
          <p className={styles.intro}>{post.description}</p>
        </header>

        <img src={post.image} alt={post.title} className={styles.mainImg} />

        <div className={styles.content}>
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <hr className={styles.divider} />
        <div className={styles.footerStats}>
          <span>0 views</span>
          <span>0 comments</span>
        </div>
      </div>

      <section className={styles.recentSection}>
        <div className={styles.recentHeader}>
          <h3>Recent Posts</h3>
          <Link to="/blog" className={styles.seeAll}>See All</Link>
        </div>
        <div className={styles.recentGrid}>
          {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(recent => (
            <Link key={recent.id} to={`/blog/${recent.id}`} className={styles.smallCard}>
              <img src={recent.image} alt={recent.title} />
              <h4>{recent.title}</h4>
              <div className={styles.smallStats}>
                <div className={styles.statItem}>
                  <img src={view} alt="views" className={styles.statIcon} />
                  <span>0</span>
                </div>
                <div className={styles.statItem}>
                  <img src={comment} alt="comments" className={styles.statIcon} />
                  <span>0</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.commentSection}>
        <h3 className='commentword'>Comments</h3>
        <hr className={styles.divider} />
        <div className={styles.commentInputWrapper}>
          <textarea 
            className={styles.commentArea} 
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..." 
          />
          <div className={styles.commentActions}>
            <div className={styles.commentIcons}>
              <span>😊</span> <span>🖼️</span> <span>🎬</span> <span>🎥</span>
            </div>
            <div className={styles.commentButtons}>
              <button onClick={() => setCommentText("")} className={styles.cancelBtn}>Cancel</button>
              <button onClick={handlePublish} className={styles.publishBtn}>Publish</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostDetails;