import firstAp from '../markup/img/apartment-01.jpg'
import firstroom from '../markup/img/room.jpg'
import secondAp from '../markup/img/apartment-02.jpg'
import thirdAp from '../markup/img/apartment-03.jpg'
import secondRoom from '../markup/img/room.jpg'

export type Hotel = {
  premium: boolean;
  img: string;
  price: number,
  inBookmarks: boolean,
  rating: number,
  title: string,
  hotelType: string
}

export const hotels: Hotel[] = [
  {
    "premium": true,
    "img": firstAp,
    "price": 120,
    "inBookmarks": false,
    "rating": 80,
    "title": "Beautiful & luxurious apartment at great location",
    "hotelType": "Apartment"
  },
  {
    "premium": false,
    "img": firstroom,
    "price": 80,
    "inBookmarks": true,
    "rating": 80,
    "title": "Wood and stone place",
    "hotelType": "Private room"
  },
  {
    "premium": false,
    "img": secondAp,
    "price": 132,
    "inBookmarks": false,
    "rating": 80,
    "title": "Canal View Prinsengracht",
    "hotelType": "Apartment"
  },
  {
    "premium": true,
    "img": thirdAp,
    "price": 180,
    "inBookmarks": false,
    "rating": 100,
    "title": "Nice, cozy, warm big bed apartment",
    "hotelType": "Apartment"
  },
  {
    "premium": false,
    "img": secondRoom,
    "price": 80,
    "inBookmarks": true,
    "rating": 80,
    "title": "Wood and stone place",
    "hotelType": "Private room"
  }
]