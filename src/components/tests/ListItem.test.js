import renderer, { act } from 'react-test-renderer'
import { ListItem } from '../ListItem';

const mockOnPressIncrement = jest.fn();
const mockOnPressDecrement = jest.fn();

const MOCK_PROPS = {
    id: 1,
    colour: "Black",
    name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
    price: 10,
    img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
    onPressIncrement: mockOnPressIncrement,
    onPressDecrement: mockOnPressDecrement,
}

describe('Test ListItem', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<ListItem {...MOCK_PROPS} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('show list item name correctly', () => {
        const component = renderer.create(<ListItem {...MOCK_PROPS} />).root;
        const listItemName = component.findByProps({ testID: 'listItemName' });
        expect(listItemName.props.children).toBe(MOCK_PROPS.name);
    });
    test('show list item colour correctly', () => {
        const component = renderer.create(<ListItem {...MOCK_PROPS} />).root;
        const listItemColor = component.findByProps({ testID: 'listItemColor' });
        expect(listItemColor.props.children).toBe(MOCK_PROPS.colour);
    });
    test('show list item price correctly', () => {
        const component = renderer.create(<ListItem {...MOCK_PROPS} />).root;
        const listItemPrice = component.findByProps({ testID: 'listItemPrice' });
        expect(listItemPrice.props.children).toBe(MOCK_PROPS.price);
    });
    test('to perform decrement action correctly', () => {
        const newMockProps = {
            ...MOCK_PROPS,
            selectedCount: 2,
        };
        const component = renderer.create(<ListItem {...newMockProps} />).root;
        const listItemDecermentButton = component.findByProps({ testID: 'listItemDecermentButton' });
        act(() => {
            listItemDecermentButton.props.onPress();
        })
        expect(mockOnPressDecrement).toHaveBeenCalled();
    });
    test('to perform increment action correctly', () => {
        const newMockProps = {
            ...MOCK_PROPS,
            selectedCount: 2,
        };
        const component = renderer.create(<ListItem {...newMockProps} />).root;
        const listItemIncermentButton = component.findByProps({ testID: 'listItemIncermentButton' });
        act(() => {
            listItemIncermentButton.props.onPress();
        })
        expect(mockOnPressIncrement).toHaveBeenCalled();
    });
    test('to perform add to cart action correctly', () => {
        const component = renderer.create(<ListItem {...MOCK_PROPS} />).root;
        const listItemAddToCartButton = component.findByProps({ testID: 'listItemAddToCartButton' });
        act(() => {
            listItemAddToCartButton.props.onPress();
        })
        expect(mockOnPressIncrement).toHaveBeenCalled();
    });
})
