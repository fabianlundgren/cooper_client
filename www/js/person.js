function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.weight = attr.weight;
  this.height = attr.height;
}

Person.prototype.assessCooper = function (distance) {
  this.cooperMessage = cooperAssessmentOf(this, distance);
};

Person.prototype.calculate_bmi_met = function() {
  calculator = new BMICalculator();
  calculator.metric_bmi(this);
};
