let toggle = document.querySelector("#dark_mode");
let currmode="light";
let body = document.querySelector("body")
toggle.addEventListener("click", ()=>
{
	if(currmode ==="light"){
		currmode="dark";
		body.classList.add("dark");
		body.classList.remove("light");
	}
	else{
		currmode="light";
		body.classList.add("light");
		body.classList.remove("dark");
	}
	console.log(currmode);
});