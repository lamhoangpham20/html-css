function DecConvert()
{
var x = document.getElementById('dec').value;
x = parseInt(x);
var bin = x.toString(2);
var hex = x.toString(16).toUpperCase();
var oct = x.toString(8);
document.getElementById('bin').innerHTML = bin; 
document.getElementById('hex').innerHTML = hex;
document.getElementById('oct').innerHTML = oct;
} 

function BinConvert()
{
    var y = document.getElementById('bin').value;
    y = y.toString();
   
    if( y.indexOf(2) != -1 || y.indexOf(3) != -1 || y.indexOf(4) != -1 ||
    y.indexOf(5) != -1 || y.indexOf(6) != -1 || y.indexOf(7) != -1 || 
    y.indexOf(8) != -1 || y.indexOf(9) != -1 )
    {
        document.getElementById('warning').innerHTML = "Binary contains only 1 and 0";    
        document.getElementById('dec').innerHTML = ""; 
        document.getElementById('hex').innerHTML = "";
        document.getElementById('oct').innerHTML = "";
    }
    else
    {
    y = parseInt(y, 2);
    var dec = y.toString(10);
    var hex = y.toString(16).toUpperCase();
    var oct = y.toString(8);
    document.getElementById('dec').innerHTML = dec; 
    document.getElementById('hex').innerHTML = hex;
    document.getElementById('oct').innerHTML = oct;
    document.getElementById('warning').innerHTML = "";
    }
}

function HexConvert()
{
    var z = document.getElementById('hex').value;
    z = parseInt(z, 16);
    var dec = z.toString(10);
    var bin = z.toString(2);
    var oct = z.toString(8);
    document.getElementById('dec').innerHTML = dec; 
    document.getElementById('bin').innerHTML = bin;
    document.getElementById('oct').innerHTML = oct;
}

function OctConvert()
{

    var a = document.getElementById('oct').value;
    a = parseInt(a, 8);
    var dec = a.toString(10);
    var bin = a.toString(2);
    var hex = a.toString(16).toUpperCase();
    document.getElementById('dec').innerHTML = dec; 
    document.getElementById('bin').innerHTML = bin;
    document.getElementById('hex').innerHTML = hex;
}