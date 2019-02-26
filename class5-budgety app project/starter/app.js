
///Budget controller
var budgetController = function (){

    var income = function (id, input,value){
        this.id = id;
        this.input = input;
        this.value = value;
    };

    var expense = function (id, input,value){
        this.id = id;
        this.input = input;
        this.value = value;

    };


var data = {
    addItem : {
        Inc: [],
        Exp: []
    },
    total: {
        Inc: 0,
        Exp: 0
    },
    Budget: 0,
    percentages: -1
};




}();
/// UI Controller
var UIcontroller = function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn',

    }


    return {
        getInput: function(){
            return{    /// return everything the same time use object 
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    };









}();
///App Controller
var appController = function(budgetCtrl,UICtrl){

    var setupEvenListener = function(){
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.addBtn).addEventListener('click',ctrlAddItem); // ctrlAddItem() don't need to call() evenlistener will call it
        document.addEventListener('keypress',function(event){
       
    if (event.keyCode === 13  ){  // or event.which === 13 
            ctrlAddItem();
    }
    });
    }


    

    var ctrlAddItem = function(){

        // 1. get the field input data
            var input = UICtrl.getInput();
            console.log (input);
        // 2. add item to budgrt contrller

        // 3. add itenm to the UI

        // 4.   calculate the budget

        // 5. display the budget on the UI

}

        return {
            unit: function(){
                console.log('appication has started evenlistener')
                setupEvenListener();
            }
        }

}(budgetController,UIcontroller);
appController.unit();



























































































