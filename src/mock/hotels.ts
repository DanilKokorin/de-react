import firstAp from '../assets/img/apartment-01.jpg'
import firstroom from '../assets/img/room.jpg'
import secondAp from '../assets/img/apartment-02.jpg'
import thirdAp from '../assets/img/apartment-03.jpg'
import secondRoom from '../assets/img/room.jpg'
import { Hotel } from '../type/types'

export const hotels: Hotel[] = [
  {
    "premium": true,
    "id": 1,
    "img": firstAp,
    "price": 120,
    "inBookmarks": false,
    "rating": 80,
    "title": "Beautiful & luxurious apartment at great location",
    "hotelType": "Apartment"
  },
  {
    "premium": false,
    "id": 2,
    "img": firstroom,
    "price": 80,
    "inBookmarks": true,
    "rating": 80,
    "title": "Wood and stone place",
    "hotelType": "Private room"
  },
  {
    "premium": false,
    "id": 3,
    "img": secondAp,
    "price": 132,
    "inBookmarks": false,
    "rating": 80,
    "title": "Canal View Prinsengracht",
    "hotelType": "Apartment"
  },
  {
    "premium": true,
    "id": 4,
    "img": thirdAp,
    "price": 180,
    "inBookmarks": false,
    "rating": 100,
    "title": "Nice, cozy, warm big bed apartment",
    "hotelType": "Apartment"
  },
  {
    "premium": false,
    "id": 5,
    "img": secondRoom,
    "price": 80,
    "inBookmarks": true,
    "rating": 80,
    "title": "Wood and stone place",
    "hotelType": "Private room"
  }
]