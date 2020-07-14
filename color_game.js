window.setTimeout(
function() 
{
	var mode=6;
	var colors=[];
	var pickedColor;

	var div=document.getElementsByClassName("square");
	var message=document.querySelector("#score");
	var colorDisplay=document.getElementById("rgbcolor");
	var reset=document.querySelector("#reset");
	var easybutton=document.querySelector("#Easy");
	var hardbutton=document.querySelector("#Hard");
	var modebuttons=document.querySelectorAll(".modes");

	init();

	function init()
	{
		//mode button
		for(var i=0;i<modebuttons.length;i++)
		{
			modebuttons[i].addEventListener("click",function(){
				modebuttons[1].classList.remove("selected");
				modebuttons[0].classList.remove("selected");
				this.classList.add("selected");
				
				if(this.textContent==="Easy")mode=3;
				else mode=6;
				resetfun();

			});
		}

		for(var i=0;i<div.length;i++)
		{
			div[i].addEventListener("click",function(){
				if(this.style.backgroundColor!==pickedColor)
				{
					message.textContent="try again!"
					this.style.backgroundColor="#232323";
				}

				else
				{
					message.textContent="correct!"
					for(var j=0;j<colors.length;j++)
					{
						div[j].style.backgroundColor=pickedColor;
					}
					document.querySelector("h1").style.backgroundColor=pickedColor;
					reset.textContent="Play Again!";
				}
			});
		}

		resetfun();
	}



	function resetfun(){
		colors=genrateRandom(mode);
		pickedColor=pickColor();

		for(var i=0;i<div.length;i++)
		{
			if(colors[i])
			{
				div[i].style.backgroundColor=colors[i];
				if(i>=3)div[i].style.display="block";
			}

			else
			div[i].style.display="none";
		}
		colorDisplay.textContent=pickedColor;
		document.querySelector("h1").style.backgroundColor="steelblue";
		reset.textContent="New Colour";
		message.textContent="";
	}

	reset.addEventListener("click",function()
	{
		resetfun();
	});

	function pickColor()
	{
		return colors[Math.floor(Math.random()*colors.length)];
	}

	function genrateRandom(num)
	{
		var arr=[];
		for(var i=0;i<num;i++)
		{
			arr.push(random());//get random color and push it into array
		}
		return arr;
	}

	function random()
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		return "rgb("+ r +", "+ g +", "+ b +")";
	}
},
500);