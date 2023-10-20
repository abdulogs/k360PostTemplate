// $(document).on("click", "#templateText", () => {
//     let text = "";
//     if (window.getSelection) {
//         text = window.getSelection();
//     } else if (document.getSelection) {
//         text = document.getSelection();
//     } else if (document.selection) {
//         text = document.selection.createRange().text;
//     }
//     $("#selectedText").val(text);
// });

$(document).on("change", "#fontFamily", function (e) {
    e.preventDefault();
    let val = $(this).val();
    document.execCommand('fontName', true, val);
    $(this).val("");
});


$(document).on("change", "#fontSize", function (e) {
    e.preventDefault();
    let val = $(this).val();
    document.execCommand('fontSize', '', val);
    // $(this).val("");
});

$(document).on("change", "#emojis", function (e) {
    e.preventDefault();
    let val = $(this).val();
    document.execCommand('insertHTML', true, val);
    $(this).val("");
});


$(document).on("change", "#alignment", function (e) {
    e.preventDefault();
    let val = $(this).val();
    if (val == "center") {
        document.execCommand('justifyCenter');
    } else if (val == "justify") {
        document.execCommand('justifyFull');
    } else if (val == "left") {
        document.execCommand('justifyLeft');
    } else if (val == "right") {
        document.execCommand('justifyRight');
    }
    $(this).val("");
});


$(document).on("change", "#listing", function (e) {
    e.preventDefault();
    let val = $(this).val();
    if (val == "ol") {
        document.execCommand('insertOrderedList');
    } else if (val == "ul") {
        document.execCommand('insertUnorderedList');
    }
    $(this).val("");
});

$(document).on("change", "#format", function (e) {
    e.preventDefault();
    let val = $(this).val();
    if (val == "bold") {
        document.execCommand('bold');
    } else if (val == "italic") {
        document.execCommand('italic');
    } else if (val == "underline") {
        document.execCommand('underline');
    } else if (val == "strikethrough") {
        document.execCommand('strikeThrough');
    } else if (val == "subscript") {
        document.execCommand('subscript');
    } else if (val == "superscript") {
        document.execCommand('superscript');
    } else if (val == "outdent") {
        document.execCommand('outdent');
    } else if (val == "indent") {
        document.execCommand('indent');
    } else if (val == "hr") {
        document.execCommand('insertHorizontalRule');
    } else if (val == "removeFormat") {
        document.execCommand('removeFormat');
    }
    $(this).val("");
});



$(document).on("click", ".editor-btn", function (e) {
    e.preventDefault();
    let type = $(this).data("type");

    if (type == "bold") {
        document.execCommand('bold');
    } else if (type == "italic") {
        document.execCommand('italic');
    } else if (type == "underline") {
        document.execCommand('underline');
    } else if (type == "justifyCenter") {
        document.execCommand('justifyCenter');
    } else if (type == "justifyFull") {
        document.execCommand('justifyFull');
    } else if (type == "justifyLeft") {
        document.execCommand('justifyLeft');
    } else if (type == "justifyRight") {
        document.execCommand('justifyRight');
    } else if (type == "heading") {
        document.execCommand('heading', false, "h1");
    } else if (type == "paragraph") {
        document.execCommand('insertParagraph');
    } else if (type == "cut") {
        document.execCommand('cut');
    } else if (type == "copy") {
        document.execCommand('copy');
    } else if (type == "paste") {
        document.execCommand('paste');
    } else if (type == "delete") {
        document.execCommand('delete');
    } else if (type == "undo") {
        document.execCommand('undo');
    } else if (type == "redo") {
        document.execCommand('redo');
    } else if (type == "ol") {
        document.execCommand('insertOrderedList');
    } else if (type == "ul") {
        document.execCommand('insertUnorderedList');
    } else if (type == "strikethrough") {
        document.execCommand('strikeThrough');
    } else if (type == "mark") {
        document.execCommand('hiliteColor', true, "orange");
    } else if (type == "subscript") {
        document.execCommand('subscript');
    } else if (type == "superscript") {
        document.execCommand('superscript');
    } else if (type == "hr") {
        document.execCommand('insertHorizontalRule');
    } else if (type == "leftIndent") {
        document.execCommand('outdent');
    } else if (type == "rightIndent") {
        document.execCommand('indent');
    }


});