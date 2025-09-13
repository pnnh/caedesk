import { css, html } from 'react-strict-dom';

const styles2 = css.create({
  button: {
    backgroundColor: {
      default: 'lightblue',
      ':hover': 'lightgray'
    },
    height: 50,
    width: 200, 
    color: 'green',
    padding: 10
  }
});

export function MyButton() {
  return (
    <html.div style={styles2.button}>
      <html.span>A cross-platform button</html.span>
      
      <html.button onClick={()=>{
        console.log('Button clicked!');
      }}>Click me</html.button>
    </html.div>
  );
}