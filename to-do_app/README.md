<!-- @format -->

## Section -VI

### Styling React Components

- Setting dynamic Inline styles

- Exercise: Dynamic Styles
  - Your task is to dynamically apply a style (color: red) to the <p>Style me</p> element in the provided React app.
  - The style should be applied as an inline style (i.e., via the style attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, the styling should switch back to color: white, which should also be the initial style.
  - Make sure that the button toggles between these two styles (color: white <=> color: red).
  - Solution: App.js
  ```JavaScript
  import React from 'react';
  export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);
     function clickHandler() {
        setHighlighted(isHighlighted => !isHighlighted);
    }
    return (
        <div>
            <p style={{color: highlighted ? 'red' : 'white'}}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
    }
  ```
- Setting CSS Classes Dynamically

- Exercise: Dynamic CSS Classes

  - Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app. This task is therefore very similar to the previous coding exercise but you're now going to set a CSS class dynamically - instead of an inline style.
  - The style should be applied as an CSS class (i.e., via the className attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, all CSS classes should be removed from the <p> element (this should also be the initial state).
  - Make sure that the button toggles between these two styles (no CSS class <=> active CSS class).
  - Solution:

  ```javascript
  - App.js
  import React from 'react';
  export default function App() {
  const [highlighted, setHighlighted] = React.useState(false);
   function clickHandler() {
      setHighlighted(isHighlighted => !isHighlighted);
  }
  return (
      <div>
          <p className={highlighted ? 'active' : ''}>Style me!</p>
          <button onClick={clickHandler}>Toggle style</button>
      </div>
  );
  }
  css
  - Styles.css
  body {
  font-family: sans-serif;
  margin: 0;
  padding: 3rem;
  background-color: #2d2c2c;
  color: #959090;
  text-align: center;
  }
  .active {
  background-color: orange;
  padding: 0.5rem;
  border-radius: 4px;
  color: black;}
  ```

- Introducing Styled Components
  - Approach 1: Styled Components
    - Style components is a package that helps you build components which have certain styles attached to them where the styles really only affect the components to which they were attached and not any other components.
    - Attacked template literal:
    ```javascript
    const Button = styled.button``;
    ```
    - 'button' is simply a method on this styled object Styled is an object we're importing from style components and there we can access the button method
      It's just a special kind of method. Instead of being a method, which we can call with parentheses, we can add back ticks after it and that's just a default JavaScript syntax
