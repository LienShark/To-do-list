var submit = document.getElementById('btn');
		var result = document.getElementById('result');
		var result1 = document.getElementById('result1');
		var result2 = document.getElementById('result2');
		var result3 = document.getElementById('result3');
		var result4 = document.getElementById('result4');

		submit.addEventListener('click' , function(e){
			var todoThing = document.getElementById('todo').value;
			var option = document.getElementById('option').value;
			if(todoThing !==''){
				if(option === 'mon'){
					var list = document.createElement('LI');
					list.innerHTML = todoThing + '<button>x</button>' ;
					result.appendChild(list);
					document.getElementById('todo').value = '';
				}else if(option === 'thu'){
					var list = document.createElement('LI');
					list.innerHTML = todoThing + '<button>x</button>' ;
					result1.appendChild(list);
					document.getElementById('todo').value = '';
				}else if(option === 'wen'){
					var list = document.createElement('LI');
					list.innerHTML = todoThing + '<button>x</button>' ;
					result2.appendChild(list);
					document.getElementById('todo').value = '';					
				}else if(option === 'tus'){
					var list = document.createElement('LI');
					list.innerHTML = todoThing + '<button>x</button>' ;
					result3.appendChild(list);
					document.getElementById('todo').value = '';					
				}else if(option ==='fri'){
					var list = document.createElement('LI');
					list.innerHTML = todoThing + '<button>x</button>' ;
					result4.appendChild(list);
					document.getElementById('todo').value = '';					
				}
			}else{
				alert('請輸入代辦事項');
			}
		})

		result.addEventListener('click' , function(e){
			//console.log(e.target.parentNode);
			e.target.parentNode.parentNode.removeChild(e.target.parentNode);
		})

		result1.addEventListener('click' , function(e){
			//console.log(e.target.parentNode);
			e.target.parentNode.parentNode.removeChild(e.target.parentNode);
		})

		result2.addEventListener('click' , function(e){
			//console.log(e.target.parentNode);
			e.target.parentNode.parentNode.removeChild(e.target.parentNode);
		})

		result3.addEventListener('click' , function(e){
			//console.log(e.target.parentNode);
			e.target.parentNode.parentNode.removeChild(e.target.parentNode);
		})


		result4.addEventListener('click' , function(e){
			//console.log(e.target.parentNode);
			e.target.parentNode.parentNode.removeChild(e.target.parentNode);
		})