import React from 'react';
import styles from './Blog.module.css';
import { blogPosts } from '../Data/BlogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <header className={styles.blogHeader}>
        <h1>Make Our Kitchen Your Own</h1>
        <p>Tips, Recipes, and Stories</p>
      </header>

    <div className={styles.masonryGrid}>
  {blogPosts.map((post) => (
    
    <Link key={post.id} to={`/blog/${post.id}`} className={styles.postCard}>
      <div className={styles.imageWrapper}>
        <img src={post.image} alt={post.title} />
      </div>
      
      <div className={styles.textWrapper}>
        <div className={styles.metaInfo}>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.description}>{post.description}</p>
        <div className={styles.cardFooter}>
          <span>0 views</span>
          <span>0 comments</span>
        </div>
      </div>
    </Link>
  ))}
</div>
    </div>
  );
};

export default Blog;