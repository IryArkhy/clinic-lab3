const express = require('express');

const {
  doctors,
  manipulations,
  examination,
  feedback,
  consultations,
} = require('./constants');

const router = express.Router();

router.get('/', (_, res) => {
  res.render('main', { title: 'Головна' });
});

router.get('/about', (_, res) => {
  res.render('about', { title: 'Про нас' });
});

router.get('/price', (_, res) => {
  res.render('price', {
    title: 'Ціни',
    consultations,
    manipulations,
    examination,
  });
});

router.get('/staff', (_, res) => {
  res.render('staff', { title: 'Лікарі', doctors });
});

router.get('/contacts', (_, res) => {
  res.render('contacts', { title: 'Контакти' });
});

router.get('/feedback', (_, res) => {
  res.render('feedback', { title: 'Відгуки', feedback });
});

module.exports = router;
