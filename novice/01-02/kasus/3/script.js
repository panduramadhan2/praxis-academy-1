var x = window.prompt("Input x = ", "0");
var y = window.prompt("Input y = ", "0");
var z = window.prompt("Input z = ", "0");

if (x>y && x>z)
{
        if (y>z)
        {
            window.prompt(x + ", " + y + ", " +z);
        }
        else
        {
            window.prompt(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             window.prompt(y + ", " + x + ", " +z);
        }
        else
        {
             window.prompt(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            window.prompt(z + ", " + x + ", " +y);
        }
        else
        {
            window.prompt(z + ", " + y + ", " +x);
        }
}       
  