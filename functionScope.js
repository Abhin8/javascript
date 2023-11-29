var num1 = 20;
    num2 = 5;
    name= "Coder";

    function multiply(){
        return num1*num2
    }

    console.log(multiply())

    // nested function example

    function getScore(){
        var num1 = 10;
            num2 = 2;

            function add(){
                return name + "scored " +  (num1+num2)
            }
            return add();
    }

    console.log(getScore());