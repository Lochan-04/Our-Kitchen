import React from 'react';
import reviewsData from '../Data/Reviews';
import styles from './ReviewCard.module.css';
import orange from '../assets/orange.png';

const ReviewItem = ({ name, text, rating }) => {
  const safeRating = Math.min(Math.max(parseInt(rating, 10) || 5, 1), 5);

  return (
    <div className={styles.card}>
      <div className={styles.rating}>
        {[...Array(safeRating)].map((_, index) => (
          <img
            key={index}
            src={orange}
            alt="rating star"
            className={styles.ratingIcon}
          />
        ))}
      </div>
      <h3 className={styles.clientName}>{name}</h3>
      <p className={styles.reviewText}>{text}</p>
    </div>
  );
};

const ReviewCard = () => {
  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.title}>
        Real Reviews From Satisfied
        <br />
        Clients
      </h2>

      <div className={styles.cardsContainer}>
        {reviewsData.map((review) => (
          <ReviewItem
            key={review.id}
            name={review.name}
            text={review.text}
            rating={review.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewCard;
