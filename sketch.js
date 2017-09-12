var api = "http://exercise.wandome.com/offer/list?keyword=";// this varibale holds the url
var apiKey = "&token=1234567890abcd.12345678";// this variable holds the api key 
var input; // this is the variable for taking in the user input

// this function is called when the button is clicked on
function setup() {
noCanvas();
  var button =select('#submit');
  button.mousePressed(askProduct);
  input = select('#product');
}
// this function loads the url 
 function askProduct() {
 var url = api + input.value()+ apiKey ;
 loadJSON(url, gotData);

}

var img; // this is the variable that will store the images
// this function display the data that is selected from the url
function gotData(data) {
	
	for (var i = 0; i < data.data.offers.list.length; i++){
			img =createImg(data.data.offers.list[i].photo.main_url);
			img.size(224.6,425);
			
		}
	}
