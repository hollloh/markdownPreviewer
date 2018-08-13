import React from 'react';
import marked from 'marked';
import './App.css';

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  return `<a target='_blank' href='${href}' title='${href}'>${text}</a>`;
}

class Preview extends React.Component {
  converter() {
    let raw = marked(this.props.content, {renderer});
    return {__html: raw};
  }
  render() {
    return (
      <div id='preview' dangerouslySetInnerHTML={this.converter()}>
      </div>
    );  
  }
}

function Editor(props) {
  return (
    <div className='centering-container'>
      <textarea
        id='editor'
        rows='20'
        wrap='off'
        value={props.content}
        onChange={props.onChange}
      />
    </div>
  );      
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: sample
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(e) {
    this.setState({content: e.target.value});
  }

  render() {
    const content = this.state.content;

    return (
      <div>
        <Editor content={content} onChange={this.handleEditorChange} />
        <Preview content={content} />
      </div>
    );
  }
}

const sample = `## This is a
# Markdown Previewer
### made using the power of React
## allowing you to write in markdown
#### and instantaneously 
##### see an updated live preview.
<br />

As demonstrated above, you can display different size headers using hashes (\`#\`)
and add line breaks with \`<br />\`.
<br />

Using \`[\`brackets\`]\` \`(\`and a url in parentheses\`)\`
you can embed [links](https://www.bing.com/).
<br />

Wrapping text within two backticks (\`\` \`\`\`\`) displays \`inline-code\`.
<br />

You can display a block of code by writing within six backticks

\`\` \`\`\`\`\`
like so
\`\`  \`\`\`\`\`

the output looking like this:
\`\`\`
let y = 'World';

function blockOfCode(arguments) {
  let x = 'Hello ';
  return x + arguments;
}
blockOfCode(y);
\`\`\`
<br />

1. Display ordered lists
2. by writing a number
3. followed by a period and a space;


+ unordered lists can use \`+\` , \`-\` or \`*\`
- for
* example

<br />

1. adding spaces before the numbers
 * or other symbles
 * lets you use sublists
    * and sub-sublists
2. and carry on with numbers again

<br />

>Block quote's are called with a \`>\`
and can be continued with a line break.

<br />

Images have the same syntax as links, but begin with a \`!\`.
\`![\`alternative text in brackets\`]\` \`(\`url in parentheses\`)\`
![ruuuuuuuuuuuuuuuuuuuuuuuuuuuu](https://media.giphy.com/media/1YcIK4djgSkUocABjS/giphy.gif)
<br />

Na HA **how**, hold on there partner,
cause we got **sauce**;
**BAAARBEQUE** sauce!
**YEEESSIIIREEE** it's Cowbow Mike's Own Original Red Hot Rico**SHEEE**t Barbeque Sauce!
## \`BOOOLD ?!\`
Well hell **yes** it's **\`bold\`**!
It's Cowboy Mike's Own Original Red Hot Rico**sheee**t Barbeque Sauce!
It's **mighty \`bold\`**.
How **\`bold\`** is it?
It's **\`bold\`** enough to **bulldog** your tastebuds and hog**tie** your tongue!
That's how **\`bold\`** this stuff is you little priss**and i mean it's \`BOOOLD\`**!
Come on **steak**, **you want some?**
I'll tell you what you hair-dressing little cowpokes,
you check the umbiliport and you'll find yourself a **free** sample
of Cowboy Mike's Own Original Red Hot Rico**SHEEE**t Barbeque Sauce!
## It's \`BOOOLD\`!
Now available in new **EXTRA \`BOOOLD\`**!
Now this is **rbrbrbrbreeeally \`bold\`**!
So **\`bold\`** it's not recommended for human consumption.
There is **no** known antidote for new **extree \`bold\`**
### Cowboy Mike's Own Original Red Hot RicoSHEEEt Barbeque Sauce[!](https://youtu.be/GfBr5l4S63Q)
`;

export default App;