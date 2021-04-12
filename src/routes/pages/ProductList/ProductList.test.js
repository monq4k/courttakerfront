import React from 'react';
import { shallow } from 'enzyme';

import ProductList from './ProductList';

const products = [
  {
    id: 0,
    title: 'Ergonomic Fresh Bacon',
    img: 'https://unsplash.it/720/1280?image=957',
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    price: 209,
  },
  {
    id: 1,
    title: 'Fantastic Metal Gloves',
    img: 'https://unsplash.it/720/1280?image=221',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: 634,
  },
];

const defaultProps = {
  cardList: [],
  requestAllProducts: jest.fn(),
};
let wrapper;

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  wrapper = shallow(<ProductList {...defaultProps} />);
});

describe('ProductList', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('cardList prop should be not null', () => {
    expect(wrapper.prop('cardList')).not.toBeNull();
  });

  it('contentToRender should contains only favorite after click on showFavButton', () => {
    const props = {
      cardList: products,
      favorite: [{
        id: 1,
        title: 'Fantastic Metal Gloves',
        img: 'https://unsplash.it/720/1280?image=221',
        description:
          'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
        price: 634,
      }],
    };
    wrapper = shallow(<ProductList {...props} />);
    expect(wrapper.state('isShowFavorite')).to.equal(false);
  });
  // should call requestAllProducts
  // cardList
  // instance
  // onClick filters button
  // in actions - fetch-mock
});
