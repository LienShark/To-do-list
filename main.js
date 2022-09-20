var submit = document.getElementById('btn');
		var result = document.getElementById('result');

		submit.addEventListener('click' , function(e){
			var todoThing = document.getElementById('todo').value;

			if(todoThing !==''){
				var list = document.createElement('LI');
				list.innerHTML = todoThing + '<button>x</button>' ;
				result.appendChild(list);
				document.getElementById('todo').value = '';
			}else{
				alert('請輸入代辦事項');
			}
		})

		result.addEventListener('click' , function(e){
			//console.log(e.target.parentNode);
			e.target.parentNode.parentNode.removeChild(e.target.parentNode);
		})