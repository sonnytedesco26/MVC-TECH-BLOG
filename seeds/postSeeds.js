const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: 'Donec posuere metus vitae ipsum.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Morbi non quam nec dui luctus rutrum',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augpx',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'hDonec diam ndddddddeque, vestibulum eget, vulputate ut, ultrices vel, aug',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: 'esque eget nuncpx',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: 'ipsum dolor sit amet, consectetuer adipisc',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'tasse platea dictum',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'i non quam nec dui luctus rut',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_text: 'Duis',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_text: 'urabitur at ipsum ac tellus semper i',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'latea dictumst',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_text: ' odio odio, elementum eu, interdum eujson',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_text: ' dapibunoxml',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_text: 'tellustml',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_text: 'pede, malesuada in, imperdiet et, commodo vu',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_text: 'nte ipsum primis in faucibus orci luctus et ',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'habitasse platea dictumst.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_text: 'Etiam',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_text: 'hd mauris vulputate elementu',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_text: 'nteger pede justo, lacinia eget, tincidunt eget, te',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
