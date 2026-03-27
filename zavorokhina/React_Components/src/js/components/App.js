import Paragraph from "./Paragraph";
import Button from "./Button";
import Title from "./Title";
import Card from "./Card";
import Counter from "./Counter";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import Timer from './Timer';
import ToggleButton from "./Toggle";
import SimpleAlert from "./Alert";
import Alert from "./Alert";
import ItemList from "./ItemList";
import Modal from "./Modal";
import React, { useState } from 'react';
import Accordion from "./Accordion";
import Dropdown from './Dropdown';
import DropdownWithSearch from './Dropdown';
import Pagination from './Pagination';
import PaginationCompact from './Pagination';
import Rating from './Rating';
import RatingHalfStars from "./Rating";
import RatingIcons from "./Rating";
import RatingWithFeedback from "./Rating";
import Tabs from "./Tabs";
import Search from "./Search";


const products = [
  { id: 1, name: 'Name of smthing1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrU19hI7wyPYBvHmyarklEx4eKGsfJ6ziE6w&s', text: 'text1' },
  { id: 2, name: 'Name of smthing2', image: 'https://the-challenger.ru/wp-content/uploads/2017/12/shutterstock_1022224348-800x534.jpg', text: 'text2' },
  { id: 3, name: 'Name of smthing3', image: 'https://s0.rbk.ru/v6_top_pics/media/img/5/34/347350386436345.jpeg', text: 'text3' },
  { id: 4, name: 'Name of smthing4', image: 'https://doninturflot.com/upload/dev2fun.imagecompress/webp/uf/259/259e77caabd4ed25f603ae099510e754/dd00421575cf7720c6a0a0012e21d1cb.webp', text: 'text4' }
];

function App() {

  /* Cards: */
  // const tovary = products.map(function (product) {
  const tovary = products.map((product) => {
    return (
      <Card key={product.id} title={product.name} image={{ src: product.image, alt: product.name }}>
        {product.text}
      </Card>
    )
  });

  /* Modal: */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  /* Accordion: */
  const faqItems = [
    { title: 'Вопрос 1', content: 'Ответ 1' },
    { title: 'Вопрос 2', content: 'Ответ 2' },
  ];

  /* Dropdown: */
  const options = [
    { value: '1', label: 'Вариант 1' },
    { value: '2', label: 'Вариант 2' },
    { value: '3', label: 'Вариант 3' },
  ];

  const [selected, setSelected] = useState(null);

  /* Pagination: */
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log('Текущая страница:', page);
  };

  /* Rating: */
  const [rating, setRating] = useState(3);

  /* Tabs: */
  const tabs = [
    {
      label: 'Вкладка 1',
      content: <p>Содержимое первой вкладки</p>
    },
    {
      label: 'Вкладка 2',
      content: <p>Содержимое второй вкладки</p>
    },
    {
      label: 'Вкладка 3',
      content: <p>Содержимое третьей вкладки</p>
    }
  ];

  /* Search: */
  const items = [
    'Яблоко',
    'Банан',
    'Апельсин',
    'Груша',
    'Ананас'
  ];

  return (
    <>
      <Timer />
      <Title level={1} text={'Header'} />
      <Paragraph >
        Lorem Lorem Lorem LoremLorem
        LoremLorem Lorem Lorem Lorem
      </ Paragraph>
      <Paragraph>
        Lorem Lorem Lorem LoremLorem
        LoremLorem Lorem Lorem Lorem
      </ Paragraph>

      <div className="buttons">
        <button disabled={null}>Disabled button</button>
        <Button disabled={false} label="Button text" handleClick={() => alert('clicked button')} />
        <Button disabled={false} label="Button text" handleClick={() => alert('clicked button')} />
      </div>

      <div className="card-wrapper">
        {tovary}
      </div>

      <Counter />
      <ToggleButton />

      <TextInput placeholder={"Write something here :-)"} />
      {/* <TextInput value={10} onChange={(event) => console.log(event.target.value) /> */}

      <LoginForm />

      {/* <SimpleAlert /> */}
      {/* <Alert type = {'warning'} title = {'Arert Title'} message = {'Alert Messages'} onClose = {'onClose'} /> */}
      <Alert type="success" title="Success!" message="Your action was completed." onClose={true} />

      <ItemList />

      <div id="modal-win" style={{ padding: '40px' }}>
        <button onClick={openModal} className="modal-button">Открыть модальное окно</button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Привет из модального окна!</h2>
          <p>Это пример кастомного модального окна.</p>
          <button onClick={closeModal}>Закрыть</button>
        </Modal>
      </div>

      {/* <Accordion items={faqItems} /> */}

      <div className="accordion-2">
        <Accordion>
          <Accordion.Item>
            <Accordion.Header>Заголовок 1</Accordion.Header>
            <Accordion.Content>Контент 1</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>Заголовок 2</Accordion.Header>
            <Accordion.Content>Контент 2</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>

      {/* <Dropdown
      options={options}
      value={selected}
      onChange={setSelected}
      placeholder="Выберите вариант"
      /> */}

      <DropdownWithSearch
        options={options}
        value={selected}
        onChange={setSelected}
        placeholder="Выберите вариант"
      />

      {/* <div>
        <h2>Пагинация:</h2>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div> */}

      <div className="pagination-field">
        <h2>Пагинация:</h2>
        <PaginationCompact
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      <div className="rating-field">
        <h2>Ваш рейтинг: {rating}</h2>
        <Rating
          value={rating}
          max={5}
          onChange={(newRating) => setRating(newRating)}
        />
      </div>

      {/* <div className="rating-field">
        <h2>Ваш рейтинг: {rating}</h2>
        <RatingHalfStars
          value={rating}
          max={5}
          onChange={(newRating) => setRating(newRating)}
        />
      </div> */}

      {/* <div className="rating-field">
        <h2>Ваш рейтинг: {rating}</h2>
        <RatingIcons
          value={rating}
          max={5}
          onChange={(newRating) => setRating(newRating)}
        />
      </div> */}

      {/* <Tabs tabs={tabs} /> */}
      <Tabs />

      <div className="search-field">
        <Search
          data={items}
          renderItem={(item) => <span>{item}</span>}
        />
      </div>

    </>
  );
}

export default App;