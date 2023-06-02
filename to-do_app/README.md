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
