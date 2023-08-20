import renderer, { act } from 'react-test-renderer'
import { Cart } from '../Cart'

const mockOnPressIncrement = jest.fn();
const mockOnPressDecrement = jest.fn();

const MOCK_PROPS = {
    selectedList: [
        {
          "id": 1,
          "colour": "Black",
          "name": "Black Sheet Strappy Textured Glitter Bodycon Dress",
          "price": 10,
          "selectedCount": 3,
          "img": "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024"
        },
        {
          "id": 2,
          "colour": "Stone",
          "name": "Stone Ribbed Strappy Cut Out Detail Bodycon Dress",
          "price": 4,
          "selectedCount": 2,
          "img": "https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024"
        }
    ],
    actions: {
        increment: mockOnPressIncrement,
        decrement: mockOnPressDecrement
    }
}

describe('Test Cart', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<Cart {...MOCK_PROPS} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('show cart list correctly', () => {
        const component = renderer.create(<Cart {...MOCK_PROPS} />).root;
        const cartList = component.findByProps({ testID: 'cartList' });
        expect(cartList.props.data.length).toBeGreaterThan(0);
    });
    test('show cart list total correctly', () => {
        const component = renderer.create(<Cart {...MOCK_PROPS} />).root;
        const cartTotal = component.findByProps({ testID: 'total' });
        expect(cartTotal.props.children).toBe(MOCK_PROPS.selectedList.reduce((acc, {price, selectedCount}) => acc + (price * selectedCount), 0));
    });
})
