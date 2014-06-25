/**
 * Created with JetBrains WebStorm.
 * User: manusis
 * Date: 25/6/14
 * Time: 2:09 PM
 * To change this template use File | Settings | File Templates.
 */

var a=0
var b=0
var c=0

function fun()
{
    if(b==60)
    {
        c=c+1;
        b=0;
    }
    if (a==60)
    {
        b=b+1;
        a=0;
    }
    document.getElementById('t3').value=a
    a++;
    document.getElementById('t2').value=b
    document.getElementById('t1').value=c

}
function str()
{
    var ref=setInterval(function(){fun()},10)

}
function stp()
{
    clearInterval(str())
}