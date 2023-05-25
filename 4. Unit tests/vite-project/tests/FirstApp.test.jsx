import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Test FirstApp componen', () => {
    test('match with snapshot', () => {
        const title = 'Hola, soy Goku!!';
        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    })

    test('title should be h1 tag', () => {
        const title = 'Hola, soy Goku!!';
        const {container, getByText} = render(<FirstApp title={title}/>);
        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
    })
})