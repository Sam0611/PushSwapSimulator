/*  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */
/*  *   *   *   *   *   *   FONCTIONS DE CLIGNOTEMENT   *   *   *   *   *   *   */
/*  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

var c = 0, c2 = 0, c3 = 0, c4 = 0;
var myTimeout, myTimeout2, myTimeout3, myTimeout4;

function blink(elem)
{
    c++;
    if (elem.style.backgroundColor == "grey")
        elem.style.backgroundColor = "white";
    else
        elem.style.backgroundColor = "grey";
    myTimeout = setTimeout(blink, 200, elem);
    if (c == 7)
    {
        clearTimeout(myTimeout);
        c = 0;
        elem.style.backgroundColor = "grey";
    }
}

function blink2(elem)
{
    c2++;
    if (elem.style.backgroundColor == "grey")
        elem.style.backgroundColor = "white";
    else
        elem.style.backgroundColor = "grey";
    myTimeout2 = setTimeout(blink2, 200, elem);
    if (c2 == 7)
    {
        clearTimeout(myTimeout2);
        c2 = 0;
        elem.style.backgroundColor = "grey";
    }
}

function blink3(elem)
{
    c3++;
    if (elem.style.backgroundColor == "grey")
        elem.style.backgroundColor = "white";
    else
        elem.style.backgroundColor = "grey";
    myTimeout3 = setTimeout(blink3, 200, elem);
    if (c3 == 7)
    {
        clearTimeout(myTimeout3);
        c3 = 0;
        elem.style.backgroundColor = "grey";
    }
}

function blink4(elem)
{
    c4++;
    if (elem.style.backgroundColor == "grey")
        elem.style.backgroundColor = "white";
    else
        elem.style.backgroundColor = "grey";
    myTimeout4 = setTimeout(blink4, 200, elem);
    if (c4 == 7)
    {
        clearTimeout(myTimeout4);
        c4 = 0;
        elem.style.backgroundColor = "grey";
    }
}

/*  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */
/*  *   *   *   *   *   *   *   *   FONCTIONS DE TRI   *   *    *   *   *   *   */
/*  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

function swap_a()
{
    var A_list = document.getElementsByClassName("val_A");
    var v1 = A_list[0].innerHTML;
    var v2 = A_list[1].innerHTML;
    A_list[0].innerHTML = v2;
    A_list[1].innerHTML = v1;
    document.getElementById("ct").innerHTML = ++nb_tries;
    if (sort_check() == 0)
    {
        blink(A_list[0]);
        blink2(A_list[1]);
    }
}

function swap_b()
{
    var B_list = document.getElementsByClassName("val_B");
    var v1 = B_list[0].innerHTML;
    var v2 = B_list[1].innerHTML;
    B_list[0].innerHTML = v2;
    B_list[1].innerHTML = v1;
    document.getElementById("ct").innerHTML = ++nb_tries;
    blink3(B_list[0]);
    blink4(B_list[1]);
}

function swap_ab()
{
    var A_list = document.getElementsByClassName("val_A");
    var B_list = document.getElementsByClassName("val_B");
    document.getElementById("ct").innerHTML = ++nb_tries;
    if (A_list[0] && A_list[1])
    {
        var v1 = A_list[0].innerHTML;
        var v2 = A_list[1].innerHTML;
        A_list[0].innerHTML = v2;
        A_list[1].innerHTML = v1;
        if (sort_check() == 0)
        {
            blink(A_list[0]);
            blink2(A_list[1]);
        }
    }
    if (B_list[0] && B_list[1])
    {
        var v3 = B_list[0].innerHTML;
        var v4 = B_list[1].innerHTML;
        B_list[0].innerHTML = v4;
        B_list[1].innerHTML = v3;
        blink3(B_list[0]);
        blink4(B_list[1]);
    }
}

function push_a()
{
    var v1 = document.getElementsByClassName("val_B")[0].innerHTML;
    document.getElementById("nb").innerHTML += "<li class='val_A'>" + v1 + "</li>";
    document.getElementsByClassName("val_B")[0].remove();
    reverse_rotate_a();
}

function push_b()
{
    var v1 = document.getElementsByClassName("val_A")[0].innerHTML;
    document.getElementById("nb2").innerHTML += "<li class='val_B'>" + v1 + "</li>";
    document.getElementsByClassName("val_A")[0].remove();
    sort_check();
    reverse_rotate_b();
}

function rotate_a()
{
    var len = 0;
    var tmp;
    var A_list = document.getElementsByClassName("val_A");
    tmp = A_list[len].innerHTML;
    while (A_list[++len])
        A_list[len - 1].innerHTML = A_list[len].innerHTML;
    A_list[len - 1].innerHTML = tmp;
    document.getElementById("ct").innerHTML = ++nb_tries;
    if (sort_check() == 0)
        blink(A_list[len - 1]);
}

function rotate_b()
{
    var len = 0;
    var tmp;
    var B_list = document.getElementsByClassName("val_B");
    tmp = B_list[len].innerHTML;
    while (B_list[++len])
        B_list[len - 1].innerHTML = B_list[len].innerHTML;
    B_list[len - 1].innerHTML = tmp;
    document.getElementById("ct").innerHTML = ++nb_tries;
    blink2(B_list[len - 1]);
}

function rotate_ab()
{
    var len = 0;
    var tmp;
    var A_list = document.getElementsByClassName("val_A");
    var B_list = document.getElementsByClassName("val_B");
    document.getElementById("ct").innerHTML = ++nb_tries;
    if (A_list[0] && A_list[1])
    {
        tmp = A_list[len].innerHTML;
        while (A_list[++len])
            A_list[len - 1].innerHTML = A_list[len].innerHTML;
        A_list[len - 1].innerHTML = tmp;
        if (sort_check() == 0)
            blink(A_list[len - 1]);
    }
    if (B_list[0] && B_list[1])
    {
        len = 0;
        tmp = B_list[len].innerHTML;
        while (B_list[++len])
            B_list[len - 1].innerHTML = B_list[len].innerHTML;
        B_list[len - 1].innerHTML = tmp;
        blink2(B_list[len - 1]);
    }
}

function reverse_rotate_a()
{
    var len = 0;
    var tmp;
    var A_list = document.getElementsByClassName("val_A");
    while (A_list[len])
        len++;
    tmp = A_list[len - 1].innerHTML;
    while (--len > 0)
        A_list[len].innerHTML = A_list[len - 1].innerHTML;
    A_list[len].innerHTML = tmp;
    document.getElementById("ct").innerHTML = ++nb_tries;
    if (sort_check() == 0)
        blink(A_list[len]);
}

function reverse_rotate_b()
{
    var len = 0;
    var tmp;
    var B_list = document.getElementsByClassName("val_B");
    while (B_list[len])
        len++;
    tmp = B_list[len - 1].innerHTML;
    while (--len > 0)
        B_list[len].innerHTML = B_list[len - 1].innerHTML;
    B_list[len].innerHTML = tmp;
    document.getElementById("ct").innerHTML = ++nb_tries;
    blink2(B_list[len]);
}

function reverse_rotate_ab()
{
    var len = 0;
    var tmp;
    var A_list = document.getElementsByClassName("val_A");
    var B_list = document.getElementsByClassName("val_B");
    document.getElementById("ct").innerHTML = ++nb_tries;
    if (A_list[0] && A_list[1])
    {
        while (A_list[len])
            len++;
        tmp = A_list[len - 1].innerHTML;
        while (--len > 0)
            A_list[len].innerHTML = A_list[len - 1].innerHTML;
        A_list[len].innerHTML = tmp;
        if (sort_check() == 0)
            blink(A_list[len]);
    }
    if (B_list[0] && B_list[1])
    {
        len = 0;
        var tmp;
        while (B_list[len])
            len++;
        tmp = B_list[len - 1].innerHTML;
        while (--len > 0)
            B_list[len].innerHTML = B_list[len - 1].innerHTML;
        B_list[len].innerHTML = tmp;
        blink2(B_list[len]);
    }
}

/*  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */