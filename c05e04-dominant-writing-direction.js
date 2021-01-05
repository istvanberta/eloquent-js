function dominantDirection(text) {
  let scripts = [];
  for (let char of text) {
    scripts.push(characterScript(char.codePointAt(0))); 
  }
  scripts = scripts.filter(script => script != null);
  let scriptCounts = countBy(scripts, script => script.name);
  let winner = scriptCounts.reduce((a, b) => a.count < b.count ? b : a);
  return scripts.find(script => script.name == winner.name).direction;
}
