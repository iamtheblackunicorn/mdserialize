import mdserialize from 'mdserialize';

function main(){
  var myMarkdownFile = 'test.markdown';
  var fileContents = mdserialize.readFile(myMarkdownFile);
  console.log(mdserialize.serialize(fileContents));
}

main();