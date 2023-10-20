// Get description
$(document).on("keyup", "#description", (e) => {
    let text = $("#description").val()
    $("#templateText").html(text);
});


// Logo light
$(document).on("click", "#light-theme", (e) => {
    e.preventDefault();
    document.getElementById('logo').src = "./src/images/logo-light.png";
    $("#logo").html(`<img src="" class="image" alt="">`);
    $("#card").removeClass("card-dark");
    $("#card").addClass("card-light");
});

// Logo dark
$(document).on("click", "#dark-theme", (e) => {
    e.preventDefault();
    document.getElementById('logo').src = "./src/images/logo-light.png";
    $("#card").addClass("card-dark");
    $("#card").removeClass("card-light");
});

// Download
$(document).on("click", "#downloadBtn", function (e) {
    e.preventDefault();
    html2canvas(document.querySelector("#card"), {
        removeContainer: false,
        backgroundColor: "transparent"
    }).then(canvas => {
        saveAs(canvas.toDataURL(), "download")
    });
});

function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}