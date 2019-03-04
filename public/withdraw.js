(function(){
	console.log("andito?");
	var withdraw = document.getElementById('transfer');
	//console.log(createAccount);
	withdraw.addEventListener('click',function(event){
    var quantity = document.getElementById('amount');
    var mosaicName = document.getElementById('mosaicName');
    console.log(quantity.value);
		axios.post('http://localhost:3000/api/withdraw',{ amount:quantity.value, mosaicName: mosaicName.value})
			.then(function(res){

				
			})
			.catch(function(err){
				console.log(err);
			});
	});//end of var createAccount

})();