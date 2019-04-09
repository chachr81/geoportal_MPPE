var modo=true;

function ini()
{
	var btn_act=document.getElementById('btn_act');
	btn_act.addEventListener("click",act_aside,false);

	var aside0=document.getElementById('aside0');
	aside0.addEventListener("click",act_aside,false);
}
window.addEventListener("DOMContentLoaded",ini,false);

function act_aside()
{
	var aside0=document.getElementById('aside0');
	var aside1=document.getElementById('aside1');
	if(modo==true)
	{
		modo=false;
		aside1.style.width='100%';
		aside0.style.display='block';
	}
	else
	{
		modo=true;
		aside1.style.width='0%';
		aside0.style.display='none';
	}
}