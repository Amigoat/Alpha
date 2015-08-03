//Using the build function that takes three parameters
//Firstly we are joining an array of strings and place a new line between them 'n'

//String contains place holders for the 'title','pagetitle' and 'content'

//Replace functions are replacing these with actual content.
//Placeholders means we can have 'title'in many locations and each will get replaced

//Seperate lines 'n' is for readability

exports.build = function(title, pagetitle, content) {
 
 return ['<!doctype html>',

  '<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>{title}</title>',
  '<link rel="stylesheet" href="/assets/style.css" />\n</head>',
 
  '<body><h1>{pagetitle}</h1>',
 
  //'<div id="content">{content}</div>\n</body>\n</html>'
  '<div id="content">{content}</div></body></html>'
 
 ].join('\n')

 .replace(/\{title\}/g, title)

 .replace(/\{pagetitle\}/g, pagetitle)

 .replace(/\{content\}/g, content);

}