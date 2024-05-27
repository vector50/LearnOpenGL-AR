function setBgMode(mode_int)
{
    switch (mode_int)
    {
        case 0:
        {
            document.body.style.backgroundColor = "#eee";
            document.body.style.color = "black";
            document.getElementsByClassName("mainHead")[0].style.color = "#303236";
            document.getElementsByTagName("header")[0].style.backgroundColor = "#7b7b7b";
            for (let i = 0; i < document.getElementsByClassName("pageChooseButton").length; i++)
            {
                document.getElementsByClassName("pageChooseButton")[i].style.backgroundColor = "#eee";
                document.getElementsByClassName("pageChooseButton")[i].style.color = "black";
            }
            for (let i = 0; i < document.getElementsByClassName("secondaryPageChooseButton").length; i++)
            {
                document.getElementsByClassName("secondaryPageChooseButton")[i].style.backgroundColor = "#a5a5a5";
                document.getElementsByClassName("secondaryPageChooseButton")[i].style.color = "black";
            }
            for (let i = 0; i < document.getElementsByClassName("secondaryHead").length; i++)
            {
                document.getElementsByClassName("secondaryHead")[i].style.color = "#334267";
            }
            for (let i = 0; i < document.getElementsByClassName("thirdHead").length; i++)
            {
                document.getElementsByClassName("thirdHead")[i].style.color = "#7a3a3d";
            }
            for (let i = 0; i < document.getElementsByTagName("dialog").length; i++)
            {
                document.getElementsByTagName("dialog")[i].style.backgroundColor = "#eee";
                document.getElementsByTagName("dialog")[i].style.color = "black";
            }
            break;
        }
        case 1:
        {
            document.body.style.backgroundColor = "rgb(50, 50, 50)";
            document.body.style.color = "#eee";
            document.getElementsByClassName("mainHead")[0].style.color = "#eee";
            document.getElementsByTagName("header")[0].style.backgroundColor = "#282828";
            for (let i = 0; i < document.getElementsByClassName("pageChooseButton").length; i++)
            {
                document.getElementsByClassName("pageChooseButton")[i].style.backgroundColor = "rgb(50, 50, 50)";
                document.getElementsByClassName("pageChooseButton")[i].style.color = "#eee";
            }
            for (let i = 0; i < document.getElementsByClassName("secondaryPageChooseButton").length; i++)
            {
                document.getElementsByClassName("secondaryPageChooseButton")[i].style.backgroundColor = "#282828";
                document.getElementsByClassName("secondaryPageChooseButton")[i].style.color = "#eee";
            }
            for (let i = 0; i < document.getElementsByClassName("secondaryHead").length; i++)
            {
                document.getElementsByClassName("secondaryHead")[i].style.color = "#88a1db";
            }
            for (let i = 0; i < document.getElementsByClassName("thirdHead").length; i++)
            {
                document.getElementsByClassName("thirdHead")[i].style.color = "#ad3138";
            }
            for (let i = 0; i < document.getElementsByTagName("dialog").length; i++)
            {
                document.getElementsByTagName("dialog")[i].style.backgroundColor = "rgb(50, 50, 50)";
                document.getElementsByTagName("dialog")[i].style.color = "#eee";
            }
            break;
        }
    }
}

let bg = localStorage.getItem("bg");
if (bg == "1" || bg == null)
{
    setBgMode(1)
}
else
{
    setBgMode(0)
}

function switchBg()
{
    let bg = localStorage.getItem("bg");
    if (bg == "0" || bg == null)
    {
        localStorage.setItem("bg", "1");
        setBgMode(1)
    }
    else
    {
        localStorage.setItem("bg", "0");
        setBgMode(0)
    }
}


function redirect(to)
{
    window.location.href = ("http://"+to);
}

function newTab(to)
{
    window.open(("http://"+to), '_blank').focus();
}

let openedMenu = "none";
if (typeof openedMenu_ != "undefined"){openedMenu = openedMenu_;}
function openCloseMenu(menu)
{
    document.getElementById("underHeader-gettingStarted").style.display = "none";
    switch (menu)
    {
        case "gettingStarted":
        {
            if (openedMenu != "gettingStarted")
            {
                openedMenu = "gettingStarted";
                document.getElementById("underHeader-gettingStarted").style.display = "inline";
                if (typeof currentMenu == "undefined" || currentMenu != "gettingStarted")
                {
                    document.getElementById("button-gettingStarted").style.borderColor = "rgb(9, 89, 89)";
                }
            }
            else
            {
                openedMenu = "none";
                if (typeof currentMenu == "undefined" || currentMenu != "gettingStarted")
                {
                document.getElementById("button-gettingStarted").style.borderColor = "transparent";
                }
            }
            break;
        }
    }
}


function showFunctionDialog(dialogId)
{
    document.getElementById(dialogId).open = true;
}

function hideFunctionDialog(dialogId)
{
    document.getElementById(dialogId).open = false;
}
