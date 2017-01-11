function getTable(itemID)
{
    var text = getItem(itemID);
    if(text && text.tables.length == 1)
        return text.tables[0];
    return null;
}

function getItem(itemID)
{
    var found = 0;
    with(app.activeWindow.activeSpread)
    {
        var textItems = toArray(textFrames);
        for(var n = 0; n < textItems.length; n++)
        {
            //$.writeln("INFO "+textItems[n].label+" "+itemID);
            if(textItems[n].label == itemID)
            {
                return textItems[n];
                found++;
            }
        }
    }

    if(found == 0)
        $.writeln("WARNING item "+itemID+" not found");
    return null;
}

function fillText(itemID, value)
{
    var text = getItem(itemID);
    if(text)
        text.contents = value;

    return text;
}