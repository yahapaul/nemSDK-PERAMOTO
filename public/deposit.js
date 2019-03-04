(function(){
	console.log("andito?");
	var withdraw = document.getElementById('transfer');
	//console.log(createAccount);
	withdraw.addEventListener('click',function(event){
    var quantity = document.getElementById('amount');
    var mosaicName = document.getElementById('mosaicName');
    console.log('here now?');
		axios.post('http://localhost:3000/api/deposit',{ amount:quantity.value, mosaicName: mosaicName.value})
			.then(function(res){
				console.log('here now?');
				
			})
			.catch(function(err){
				console.log(err);
			});
	});//end of var createAccount

})();