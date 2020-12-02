
function wyszukaj(){
	var podane_slowo = document.querySelector("#word").value;
	
	
//synonimy
fetch("https://wordsapiv1.p.rapidapi.com/words/"+podane_slowo+"/synonyms", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d17e4b3c35mshb554c2264c4792dp1f0f85jsnf8c2294f6730",
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	}
})
    .then(res => res.json())
    .then((out) => {
         var synonimy = out["synonyms"];
		
		var dlugosc = synonimy.length;
		document.querySelector("#wordS").innerHTML = podane_slowo;
		if (dlugosc == 0){
			document.querySelector("#wordS").innerHTML += "  - brak przykładów";
		 }
		if (dlugosc > 10){
			dlugosc = 10
		}
		
		for (var i = 0;i <dlugosc;i++){
			if (dlugosc== 0){
				break
			 }
			var li = document.createElement("li");
			li.innerHTML = out["synonyms"][i];
			document.querySelector(".synonyms").appendChild(li)
			
		}
         }
      
).catch(err => console.error(err));

//definicje
fetch("https://wordsapiv1.p.rapidapi.com/words/"+podane_slowo+"/definitions", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d17e4b3c35mshb554c2264c4792dp1f0f85jsnf8c2294f6730",
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	}
})
.then(res => res.json())
.then((out) => {
	 
	 var definicje = out["definitions"];
	
	 var dlugosc_definicji = definicje.length;
	 document.querySelector("#wordD").innerHTML = podane_slowo;
	 if (dlugosc_definicji == 0){
		document.querySelector("#wordD").innerHTML += "  - brak przykładów";
	 }
	 if (dlugosc_definicji > 10){
		dlugosc_definicji = 10;
	}
	for (var i = 0;i <dlugosc_definicji;i++){
		if (dlugosc_definicji == 0){
			break
		 }
		var li = document.createElement("li");
		li.innerHTML = definicje[i]["definition"];
		document.querySelector(".def").appendChild(li);
		
	}
	
	 

	 }
  
).catch(err => console.error(err));

//przyklady
fetch("https://wordsapiv1.p.rapidapi.com/words/"+podane_slowo+"/examples", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d17e4b3c35mshb554c2264c4792dp1f0f85jsnf8c2294f6730",
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	}
})
.then(res => res.json())
.then((out) => {
	 console.log(out);
	 var przyklady = out["examples"];
	 var dl_przykladu = przyklady.length;
	 document.querySelector("#wordU").innerHTML = podane_slowo;
	 if (dl_przykladu == 0){
		document.querySelector("#wordU").innerHTML += "  - brak przykładów";
	 }
	 if (dl_przykladu > 10){
		dl_przykladu = 10;
	}
	for (var i = 0;i <dl_przykladu;i++){
		if (dl_przykladu == 0){
			break
		 }
		var li = document.createElement("li");
		li.innerHTML = przyklady[i];
		document.querySelector(".use").appendChild(li);
		
	}

	 }
  
).catch(err => console.error(err));
document.querySelector('button[type="submit"]').style.display="none";
document.querySelector('button[type="reset"]').style.display="inline";
}


