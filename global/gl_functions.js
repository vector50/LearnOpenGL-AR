//load json file containing GL functions
import functions from "../global/gl_functions.json" with {type: 'json'};


window.onload = function()
{
    for (let i = 0; i < document.getElementsByTagName("dialog").length; i++)
    {
        let x = 0;

        switch (document.getElementsByTagName("dialog")[i].id)
        {
            case "glEnable":
            {
                for (let j = 0; j < document.getElementsByTagName("dialog")[i].childElementCount; j++)
                {
                    switch (document.getElementsByTagName("dialog")[i].children[j].className)
                    {
                        case "dialogExplain":
                            {
                                document.getElementsByTagName("dialog")[i].children[j].textContent = functions.glEnable.explain;
                                break;
                            }
                        case "dialogParamExplain":
                            {
                                document.getElementsByTagName("dialog")[i].children[j].textContent = functions.glEnable.paramExplain;
                                break;
                            }
                        case "dialogParam":
                            {
                                document.getElementsByTagName("dialog")[i].children[j].textContent = functions.glEnable.params[x++];
                                break;
                            }
                        case "dialogExampleUsage":
                            {
                                document.getElementsByTagName("dialog")[i].children[j].children[0].textContent = functions.glEnable.exampleUsage;
                                break;
                            }
                    }
                }
                break;
            }
        }
    }
    hljs.highlightAll();
}
