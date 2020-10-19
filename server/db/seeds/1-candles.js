const guid = require('../../utils/guid.util')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('candles')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('candles').insert([
        {
          id: guid({ prefix: 'CDL' }),
          name: 'Carousel Mini',
          size: '65g Natural Soy Wax',
          wick: 'Cotton Wick',
          price: 10,
          img: './images/1.jpg',
          details:
            'These are the perfect size for small gift, party/wedding favour or a tester when your not sure which scent to choose. Bulk orders for a special occasion will have a discount applied. Email us at loveandlighthomefragrances@gmail.com to enquire.',
          gift_boxed: 'This Jar does not come Gift Boxed',
        },
        {
          id: guid({ prefix: 'CDL' }),
          name: 'Carousel Large',
          size: '175g Natural Soy Wax',
          wick: 'Cotton Wick',
          price: 25,
          img: './images/2.jpg',
          details:
            'This jar is always a favourite, very beautiful and very useful once candle has sadly finished. Wash this one out with hot soapy water and use it for your jewelery or other little nik naks.',
          gift_boxed: 'This Jar comes Gift Boxed',
        },
        {
          id: guid({ prefix: 'CDL' }),
          name: 'Teardrop',
          size: '230g Natural Soy Wax',
          wick: 'Cotton Wick',
          price: 24,
          img: './images/3.jpg',
          details:
            'A medium sized jar with a stunning teardrop lid. Wash this one out with hot soapy water and reuse as the perfect lollie jar, makeup brush holder or bathroom storage.',
          gift_boxed: 'This Jar comes Gift Boxed',
        },
        {
          id: guid({ prefix: 'CDL' }),
          name: 'Vintage Clear',
          size: '300g Natural Soy Wax',
          wick: 'Cotton Wick',
          price: 30,
          img: './images/1.jpg',
          details:
            'One of our most popular sizes this jar makes a beautiful piece to add to your home or office. Wash this one out with hot soapy water and re use as the perfect lollie jar, makeup brush holder, bathroom storage.',
          gift_boxed: 'This Jar comes Gift Boxed',
        },
        {
          id: guid({ prefix: 'CDL' }),
          name: 'Vintage Tiffany Blue',
          size: '300g Natural Soy Wax',
          wick: 'Cotton Wick',
          price: 30,
          img: './images/4.jpg',
          details:
            'One of our most popular candles with its beautiful colour. This jar also comes in the clear glass. Wash this one out with hot soapy water and re use as the perfect lollie jar, makeup brush holder, bathroom storage.',
          gift_boxed: 'This Jar comes Gift Boxed',
        },
        {
          id: guid({ prefix: 'CDL' }),
          name: 'Geo Large',
          size: '500g Natural Soy Wax',
          wick: 'Double Cotton Wick',
          price: 40,
          img: './images/4.jpg',
          details:
            'This jar is our most popular size when looking for the perfect gift. The Geo is made with 2 wicks for a more even burn and the one to choose when you cant get enough of your fragrance and need it to last.',
          gift_boxed: 'This Jar comes Gift Boxed',
        },
        {
          id: guid({ prefix: 'CDL' }),
          name: 'Renee Mauve Marble',
          size: '500g Natural Soy Wax',
          wick: 'Cotton Wick',
          price: 35,
          img: './images/2.jpg',
          details:
            'This one is a personal favourite of mine and such a nice piece to add to your home. When your candle has sadly finished, wash out with hot soapy water and re use as a beautiful drinking/wine glass.',
          gift_boxed: 'This Jar comes Gift Boxed',
        },
        {
          id: guid({ prefix: 'CDL' }),
          name: 'Renee Pink Marble',
          size: '500g Natural Soy Wax',
          wick: 'Cotton Wick',
          price: 35,
          img: './images/5.jpg',
          details:
            'This one is a personal favourite of mine and such a nice piece to add to your home. When your candle has sadly finished, wash out with hot soapy water and re use as a beautiful drinking/wine glass.',
          gift_boxed: 'This Jar comes Gift Boxed',
        },
        {
          id: guid({ prefix: 'CDL' }),
          name: 'Omg',
          size: '620g Natural Soy Wax',
          wick: 'Triple Cotton Wick',
          price: 44,
          img: './images/2.jpg',
          details:
            'Our biggest one yet, this candle is made with three wicks to ensure an even burn. A beautiful statement piece to add in any home or office',
          gift_boxed: 'This Jar comes Gift Boxed',
        },
      ])
    })
}
