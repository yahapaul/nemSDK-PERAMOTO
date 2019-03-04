(function(){
        var history =[];
	var historyTable = document.getElementById('balance');
        
        axios.get('http://localhost:3000/api/balance')
   	  .then(function(res){
                //alert(res.data);
                console.log(res.data);
                var self = this;
                history = res.data;
                renderHistory(history);
        })
        .catch(function(err) {
        	
        });

        function renderHistory(history) {
                // console.log(history);
                historyTable.innerHTML = '';
                //var headers = ['ID', 'Title', 'Description'];
                //var thead = document.createElement('tr');
                var headers = ['MosaicName', 'Quantity'];
                var thead = document.createElement('tr');
                        headers.forEach(function(header) {
                        var td = document.createElement('th',scope="col");
                        td.textContent = header;
                thead.append(td);
                });

                historyTable.append(thead);
                history.forEach(function(histo){
                var tr = document.createElement('tr');
                var tdMosaic = document.createElement('td');
                var tdQuantity = document.createElement('td');

                tdMosaic.textContent = histo.mosaicName;
                tdQuantity.textContent = histo.quantity;

                tr.append(tdMosaic);
                tr.append(tdQuantity);
                historyTable.append(tr);
                });
        }

})();