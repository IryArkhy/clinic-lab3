const consultations = [
  { title: 'Консультація лікаря-спеціаліста', details: '30хв', price: '500' },
  {
    title: 'Консультація лікаря-спеціаліста доктора медичних наук',
    details: '45хв',
    price: '1000',
  },
  { title: 'Консультація гінеколога', details: '20хв', price: '600' },
  { title: 'Огляд імунолога перед вакцинацією', details: '10хв', price: '400' },
  {
    title:
      'Консультація щодо визначення діагностичної тактики та/або коментар з інтерпретацією результатів досліджень',
    details: '30хв',
    price: '1000',
  },
];

const manipulations = [
  {
    title: 'Взяття матеріалу із зовнішніх сечостатевих органів',
    details: '10хв',
    price: '65',
  },
  { title: 'Мануальна корекція хребта', details: '20хв', price: '200' },
  { title: 'Масаж кінцівки', details: '10хв', price: '350' },
  { title: 'Масаж обличчя', details: '15хв', price: '350' },
  {
    title: 'Масаж попереково-крижового відділу хребта',
    details: '15хв',
    price: '400',
  },
  { title: 'Масаж суглоба', details: '15хв', price: '300' },
  { title: 'Паравертебральні блокади', details: '10хв', price: '500' },
  { title: 'ЛФК індивідуальне заняття', details: '15хв', price: '200' },
];

const examination = [
  { title: 'Код COLPO. Кольпоскопія', details: '5хв', price: '200' },
  { title: 'Доплерографія судин шиї', details: '10хв', price: '200' },
  { title: 'Нейросонографія (діти до 1 року)', details: '10хв', price: '400' },
  { title: 'Електрокардіограмма', details: '10хв', price: '200' },
];

const doctors = [
  {
    img: 'https://cdn.pixabay.com/photo/2021/12/11/21/33/johnny-depp-6863687_1280.jpg',
    name: 'Василь Симоненко',
    title: 'Психіатр',
    exp: '20 років',
  },
  {
    img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Симон Петлюра',
    title: 'Педіатр',
    exp: '10 років',
  },
  {
    img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Михайло Грушевський',
    title: 'Отоларинголог',
    exp: '5 років',
  },
  {
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Лариса Косач',
    title: 'Педіатр',
    exp: '7 років',
  },
  {
    img: 'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Ольга Кобилянська',
    title: 'Гінеколог',
    exp: '17 років',
  },
  {
    img: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Володимир Винниченко',
    title: 'Стоматолог',
    exp: '6 років',
  },
  {
    img: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Наталія Сумська',
    title: 'Педіатр',
    exp: '8 років',
  },
];

const feedback = [
  {
    author: 'Тетяна Петрівна',
    title: 'Дуже сподобалось',
    text: 'З моменту переїзду до Києва, в разі потреби, відвідую виключно Центр сімейної медицини. Мені подобаються і лікарі, і атмосфера в клініці, завжди зустрічають з посмішкою. Ще кав’ярню відкрили у приміщенні, дуже доречно!',
  },
  {
    author: 'Олександр Глушко',
    title: 'Могло би бути краще',
    text: 'Не отримав вичерпної інформації з першого візиту.',
  },
  {
    author: 'Василіса Прекрасна',
    title: 'Дуже привітний лікар',
    text: 'Зверталася у Клініку до дерматолога. Візитом залишилася задоволена, фахівець кваліфікований, сервіс відмінний. Усім раджу!',
  },
  {
    author: 'Марина Галушка',
    title: 'Інформаційна консультація',
    text: 'Візитом залишилася задоволена.',
  },
  {
    author: 'Степан Васильович',
    title: 'Все сподобалось',
    text: 'Фахівець кваліфікований, сервіс відмінний.',
  },
  {
    author: 'Галина',
    title: 'Наплутали із часом прийому',
    text: 'Прийшла на призначений час, проте у лікаря був вже пацієнт. Вибачились і змінили час запису.',
  },
  { author: 'Андрій', title: 'Дякую!', text: 'Лікар дуже допоміг!' },
  {
    author: 'Катерина Степанівна',
    title: 'Привітні прицівники на рецепції',
    text: 'Завжди зустрічають з посмішкою і пригощають кавою.',
  },
];

module.exports.consultations = consultations;
module.exports.doctors = doctors;
module.exports.manipulations = manipulations;
module.exports.examination = examination;
module.exports.feedback = feedback;
