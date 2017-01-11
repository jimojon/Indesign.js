/**
 *
 * Duplicate pages beetween documents
 * Uses a cache to avoid to reopen a same file when multiples duplicates are done (can be very expensive in ressources)
 *
 * Source and destination files MUST be openend in Indesign
 *
 * Reference :
 * https://indisnip.wordpress.com/2010/08/09/moveduplicate-pages-between-documents/
 *
 */

// Caches
var duplicateSourcesCache = {};
var duplicateDestinationCaches = {};

/**
 * Clears cache use by duplicate
 */
function clearDuplicateCache()
{
    duplicateSourcesCache = {};
    duplicateDestinationCaches = {};
}

/**
 * Duplicate 2 pages of source file to the end of destination file
 */
function duplicate(sourceDoc, fromIndex, destDoc)
{
    $.writeln("duplicate"+sourceDoc+" "+fromIndex+" "+destDoc);
    //alert ("Current setting is "+app.layoutWindows[0].transformReferencePoint);

    var src = null;
    var srcPage = null;
    var dest = null;

    try {
        if(!duplicateSourcesCache[sourceDoc])
            duplicateSourcesCache[sourceDoc] = app.documents.item(sourceDoc);
        src = duplicateSourcesCache[sourceDoc];

        if(!duplicateDestinationCaches[destDoc])
            duplicateDestinationCaches[destDoc] = app.documents.item(destDoc);
        dest = duplicateDestinationCaches[destDoc];

        if(app.activeDocument != dest)
            app.activeDocument = dest;

        if(!srcPage)
            srcPage = src.pages.itemByRange(fromIndex, fromIndex+1);

    } catch (e) {
        $.writeln("Duplicate error: "+e);
    }

    try {
        var res = srcPage.duplicate(LocationOptions.AFTER, dest.pages.item(-1));
        var n = res.length;
        for(var i=0; i<n; i++)
        {
            setMargin(res[i].marginPreferences, prevMargin[i]);
        }

    }catch (e){
        $.writeln("Duplicate error:  "+e);
    }

    try {
        app.select(dest.pages.item(-2));
    }catch (e){
        $.writeln("Duplicate error:  "+e);
    }

    $.writeln("duplicate complete");
}


