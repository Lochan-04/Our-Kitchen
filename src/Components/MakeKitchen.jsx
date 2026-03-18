import React from 'react';
import styles from './MakeKitchen.module.css';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import  img3 from '../assets/img3.jpg';

import view from '../assets/view.png'; 
import comment from '../assets/comment.png'; 
import { Navigate, useNavigate } from 'react-router-dom';



const MakeKitchen = () => {
  const blogPosts = [
    {
      id: 1,
      date: "Jan 2, 2025",
      readTime: "1 min read",
      title: "THE BENEFITS OF PLANTS-BASED EATING",
      description: "Discover how shifting toward whole, plant-derived foods can boost your energy levels, improve heart health, and reduce your environmental footprint without sacrificing flavor.",
      image: img1
    },
    {
      id: 2,
      date: "Jan 20, 2025",
      readTime: "1 min read",
      title: "MEAL PREP FOR BEGINNERS: TIPS AND TRICKS",
      description: "Master the basics of batch cooking. We cover everything from essential kitchen tools to the best ingredients for long-term storage, helping you save time and money.",
      image: img2
    },
    {
      id: 3,
      date: "Feb 1, 2025 ",
      readTime: "1 min read",
      title: "QUICK AND HEALTHY BREAKFAST IDEAS",
      description: "Use this space to promote the business, its products or its services. Use this space to promote the business, its products or its services.",
      image: img3
    }
  ];
    
   const navigate = useNavigate();

   const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };


  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1>Make Our Kitchen Your Own</h1>
          <p className={styles.subtitle}>TIPS, RECIPES AND STORIES</p>
        </div>
        <button onClick={() => navigate('/blog')} className={styles.readMoreBtn}>Read More</button>
      </div>

      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.card}>
            <div onClick={() => handleCardClick(post.id)} className={styles.imageWrapper}>
              <img src={post.image} alt={post.title}  className={styles.blogImg} />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.meta}>{post.date} • {post.readTime}</span>
              <div className='clickableText' onClick={() => handleCardClick(post.id)}
              >
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardDescription}>{post.description}</p>
              </div>
              
              <div className={styles.cardFooter}>
                <div className={styles.stats}>
                  <div className={styles.statItem}>
                    <img src={view} alt="views" className={styles.icon} />
                    <span>0</span>
                  </div>
                  <div className={styles.statItem}>
                    <img src={comment} alt="comments" className={styles.icon} />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MakeKitchen;