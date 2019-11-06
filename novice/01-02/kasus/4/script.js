var a = window.prompt("Input a = ", "0");
var b = window.prompt("Input b = ", "0");
var c = window.prompt("Input c = ", "0");
var d = window.prompt("Input d = ", "0");
var f = window.prompt("Input f = ", "0");

if (a>b && a>c && a>d && a>f)
{
    window.prompt(a);
}
else if (b>a && b>c && b>d && b>f)
{
    window.prompt(b);
}
else if (c>a && c>b && c>d && c>f)
{
    window.prompt(c);
}
else if (d>a && d>c && d>b && d>f)
{
    window.prompt(d);
}
else
{
    window.prompt(f);
}