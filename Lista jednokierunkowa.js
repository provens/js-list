function List() {
	this.pos = 0;
	this.listElements = [];
	this.listSize = 0;
	
	this.clear = function(element){
	  this.pos = 0;
  	this.listElements = [];
  	this.listSize = 0;
	};
	
	this.find = function(element){
	  	for (var i = 0; i < this.listElements.length; i++) {
		  	if(this.listElements[i] == element){
		  		return i;
	  		} 
		} return -1;
	};
	
	this.push_back = function(element){
		this.listElements[this.listSize++] = element;
	};
	
	this.push_front = function(element){

		this.listSize++;
		this.listElements.splice(0,0,element);
		};
	
	this.pop_front = function()
  {
    this.listElements.splice(0,1);
    this.listSize--;
  };
  this.pop_back = function()
  {
    this.listElements.splice(this.listElements.length--,1);
    this.listSize--;
  };
  
	this.remove = function(element){
		var elemPos = this.find(element);
		if(elemPos > -1){
			this.listElements.splice(elemPos,1);
			this.listSize--;
		}
	};
	this.size = function(){
		return "Dlugosc listy to: "+ this.listSize;
	};
	this.view = function(){
		return this.listElements;
	};
	this.insert = function(element, after){
		var afterPos = this.find(after);
		if(afterPos > -1){
			this.listElements.splice(afterPos+1,0,element);
			this.listSize++;
		}
	};
	this.contains = function(element){
		var elemPos = this.find(element);
		if(elemPos > -1) {
			return "Wyszukanie elementu | " +element+" | na liscie: Element istnieje i jest na pozycji "+ elemPos;
		} else {
			return "Wyszukanie elementu | " +element+" | na liscie: Element nie istnieje";
		}
	};
	this.moveTo = function(position){
		this.pos = position
	};
	this.getElem = function(){
		return this.listElements[this.pos];
	};
	this.previous = function(){
		return this.listElements[--this.pos];
	};
	this.next = function(){
		return this.listElements[this.pos++];
	};
	this.front = function(){
		this.pos = 0;
	};
	this.end = function(){
		this.pos = this.listSize-1;
	};
}


var list=new List();
console.log(list.view(),list.size());
list.push_back("11");
list.push_back("22");
list.push_front("00");
list.push_back("33");
list.push_back("44");
console.log(list.view(),list.size());

console.log("zerowanie listy");
list.clear();

console.log(list.view(),list.size());
list.push_front("11");
list.push_front("22");
list.push_back("33");
list.push_front("44");
console.log(list.view(),list.size());
list.pop_front();
console.log(list.view(),list.size());

console.log("test pop/push back");
list.push_back("44");
console.log(list.view(),list.size());
list.pop_back();
console.log(list.view(),list.size());

/*console.log(list.contains(prompt("Podaj szukana wartosc: ", "22")));
console.log(list.contains("99"));*/