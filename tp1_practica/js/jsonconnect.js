const path = '../data/data.json'

let req = new XMLHttpRequest();

req.open('GET', path, true); 
req.onreadystatechange = function () {
 if (req.readyState == 4)
  if  (req.status == 200) {
   obj = JSON.parse(req.responseText);

   
   header.innerHTML = (obj.squadName)
   console.log(obj.squadName, ' ' , obj.members[0].name);
   console.log(obj);
  } else {
   html.innerHTML+="<p>error "+req.status;
 }
};
req.send(null);

const header = document.getElementById('pipa')

