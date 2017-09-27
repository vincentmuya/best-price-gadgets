import Ember from 'ember';
var products = [{
  name: 'samsung s8',
  img: 'http://s7d2.scene7.com/is/image/SamsungUS/S8_Black_front?$product-details-jpg$',
  price: '99000'
}, {
  name: 'Iphone X',
  img: 'http://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg',
  price: '200000'
}, {
  name: 'Nokia 6',
  img: 'http://cdn2.gsmarena.com/vv/pics/nokia/nokia-6-white1.jpg',
  price: '50000'
}, {
  name: 'Blackberry keynote',
  img: 'http://zdnet4.cbsistatic.com/hub/i/r/2017/02/25/de66a33f-787c-45c3-af06-3aeb3e9773d5/resize/770xauto/d816c3f3436958196f3049f146ccc992/jugmictg0ksmlclf8gp7hwwxhqefay6espzkzsnr9la2cvuu8aunk9-q5azkzlazdrrl9jd2cmbpmbtstwnsj78.jpg',
  price: '50000'
}, {
  name: 'HTC 10',
  img: 'http://www.htc.com/managed-assets/shared/desktop/smartphones/htc-10/explorer/htc-10-us-camellia-red-phone-listing.png',
  price: '50000'
}, {
  name: 'Huawei Mate 10',
  img: 'http://cdn01.androidauthority.net/wp-content/uploads/2017/08/Huawei-Mate-10-concept.jpg',
  price: '50000'
}]

export default Ember.Route.extend({
  model() {
    return products
  }
});
