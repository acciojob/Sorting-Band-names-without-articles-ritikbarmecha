//your code h
let regex=/\bThe\b| \ban\b| \ba\b/gi;
	let tr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
   let ans=[];
for(let itm of  tr){
	let x=itm.replace(regex,"").trim();
	ans.push(x);
}