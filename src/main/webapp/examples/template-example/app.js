function Employee(name, city, date) {
	this.name = name;
	this.city = city;
	this.date = date;
}

function Company() {
	this.employers = new Array();
	this.employers.push(new Employee('Anna', 'Munich', '19.7.2015'));
	this.employers.push(new Employee('Sam', 'Berlin', '20.7.2015'));
	this.employers.push(new Employee('Douglas', 'Hamburg', '21.7.2015'));
	this.test = "Example Value";
	
	this.getCount = function() {
		return this.employers.length;
	}

}

var benJS = BENJS.org.benjs.core;
var DemoController = benJS.createController({
	id : "my-controller",
	model : new Company()
});

var DemoTemplate = benJS.createTemplate({
	id : "my-template",
	url : "view.html"
});

benJS.init({
		appVersion : "1.0.0"
});
