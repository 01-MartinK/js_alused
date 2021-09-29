// elemendi loomine
const p = document.createElement('p');

// klassi määramine
p.className = 'collection-item';

// teksti lisamine
p.appendChild(document.createTextNode('Study element creation.'));

// elemendi lisamine teise elemendi sisse
document.getElementById("todoBox").appendChild(p);

console.log(p);