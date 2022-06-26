/*
MDSERIALIZE.JS by Alexander Abraham,
a.k.a. "the Black Unicorn", a.k.a. "Angeldust Duke".
Licensed under the MIT license.
*/

'use strict';

import fs from 'fs';

// Returns the contents of a directory
// as a list.
export function listDir(path){
    var files = fs.readdirSync(path);
    return files;
}

// Removes all list items pertaining to the
// Markdownstring's frontmatter.
export function nukeFrontMatter(lineList, indexArray){
    var lineListCopy = lineList;
    var start = indexArray[0];
    var end = indexArray[1];
    lineListCopy.splice(start, end - start + 1);
    return lineListCopy;
}

// Reads the contents of a file and
// returns it as a string.
export function readFile(file){
    return fs.readFileSync(file).toString();
}

// Returns the content of a Markdownstring without the
// frontmatter as a list.
export function splitListForMarkdown(subjectList, indexArray){
    var rangeEnd = indexArray[1] + 1;
    let result = []
    for (var i = indexArray[0]; i < rangeEnd; i++){
        if (subjectList[i] == '---'){}
        else {
            result.push(subjectList[i]);
        }
    }
    return result;
}

// Serializes a Markdownstring as
// a Javascript Object.
export function serialize(mdString){
    var result = new Object();
    let lineList = mdString.split('\n');
    let delimiterIndexList = [];
    for (var i = 0; i < lineList.length; i++){
        if (lineList[i] == '---'){
            delimiterIndexList.push(i)
        }
        else {}
    }
    if (delimiterIndexList.length == 2){
        var frontMatter = splitListForMarkdown(lineList, delimiterIndexList);
        for (var i = 0; i < frontMatter.length; i++){
            let key = frontMatter[i].split(':')[0];
            let value = frontMatter[i].split(':')[1];
            result[key] = value;
        }
        result['content'] = nukeFrontMatter(lineList, delimiterIndexList).join(' ');
    }
    else {
        throw 'Frontmatter not delimited!';
    }
    return result;
}