# MD SERIALIZE :scroll: :ribbon: :heart_on_fire:

![GitHub CI](https://github.com/iamtheblackunicorn/mdserialize/actions/workflows/node.yml/badge.svg)

***A small package to serialize Markdown in Javascript.*** :scroll: :ribbon: :heart_on_fire:

## ABOUT :books:

Since I read some posts online about how some people might want to write a blog using Markdown and Node.js, I thought a small package that gives access to a Markdown file's content in a serialized format might be helpful. Enjoy.

## USAGE :hammer:

### Use ***MD Serialize*** in a Node.js project

To use ***MD Serialize*** in a Node.js project, run this command in your project's root directory:

```bash
$ npm install --save-dev mdserialize
```

Be sure to also add the `"type":"module"` flag to your project's manifest, `package.json`.

### APIs

***MD Serialize*** offers the following functions:

- `listDir(path)`: Returns the contents of a directory as a list.
- `nukeFrontMatter(lineList, indexArray)`: Removes all list items pertaining to the Markdown string's frontmatter.
- `readFile(file)`: Reads the contents of a file and returns it as a string.
- `splitListForMarkdown(subjectList, indexArray)`: Returns the content of a Markdown string without the frontmatter as a list.
- `serialize(mdString)`: Serializes a Markdown file as a Javascript Object.

### Example

Here's a small example:

- 1.) Initialize a new Node.js project with the following command in a directory of your choosing:

```bash
$ npm init -y 
```

- 2.) Install ***MD Serialize***:

```bash
$ npm install --save-dev mdserialize
```

- 3.) Be sure to add this line to your project's `package.json`:

```JSON
"type":"module",
```

- 4.) Create your `index.js` and put the following code inside it:

```js
// index.js
import mdserialize from 'mdserialize';

function main(){
  var myMarkdownFile = 'test.markdown';
  var fileContents = mdserialize.readFile(myMarkdownFile);
  console.log(mdserialize.serialize(fileContents));
}

main();
```

- 5.) Run the project:

```bash
$ node .
```

- 6.) Optional: If you're not sure how to use this project, check out the example project.

## CHANGELOG :black_nib:

### Version 1.0.0

- Initial release.
- Upload to GitHub.
- Upload to NPM.

## NOTE :scroll:

- *MD Serialize :scroll: :ribbon: :heart_on_fire:* by Alexander Abraham :black_heart: a.k.a. *"The Black Unicorn" :unicorn:*
- Licensed under the MIT license.
