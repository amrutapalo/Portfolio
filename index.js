var a = 0;
function x(){
    var a1 = 1;
    function y(){
        var a1 = 2;
    }
    y();
}
x();