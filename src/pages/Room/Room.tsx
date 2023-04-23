import { useLoaderData } from "react-router-dom"
import styles from './Room.module.scss'
// import { getRoom } from "../../mock/hotels"
import { Hotel, RoomType } from "../../type"

export const Room = () => {
  const { room } = useLoaderData() as RoomType

  return (
    <>
      <section className={styles.room}>
        <h2>{room.title}</h2>
        <div className={styles.roomInfo}>
          <div className={styles.roomSection}>
            <img src={room.img} alt={room.title} />
            <div className={styles.placeCardRating}>
              <div className={`${styles.placeCardStars} ${styles.ratingStars}`}>
                <span style={{width: `${room.rating}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <div className={styles.detail}>
              <span>{room.hotelType}</span>
              <span>&euro;{room.price}</span>
            </div>
          </div>

          <div className={styles.roomSection}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}