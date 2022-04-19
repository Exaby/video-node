var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<html lang="en">' +
        "<head>" +
        '<meta http-equiv="content-type" content="text/html; charset=UTF-8">' +
        '<meta charset="UTF-8">' +
        '<meta name="viewport" content="width=device-width; height=device-height;"></meta>' +
        '<link rel="shortcut icon" href="https://cdn.spco.xyz/assets/img/home/favicon.png"></link>' +
        '<link rel="stylesheet" href="https://spco.xyz/video/c/videocontrols.css" />' +
        "<link" +
        '  rel="stylesheet"' +
        '  href="https://spco.xyz/video/c/TopLevelVideoDocument.css"' +
        "/>" +
        "<link" +
        '  rel="stylesheet"' +
        '  href="https://spco.xyz/video/c/BottomLevelVideoDocument.css"' +
        "/>" +
        "<script" +
        '  type="text/javascript"' +
        '  src="https://spco.xyz/video/j/TopLevelVideoDocument.js"' +
        "></script>" +

        "<meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\">"+

        '<meta property="og:type" content="video.other" />' +
        '<meta property="og:video:url" content="' +
        req.url.substring(7) +
        '" />' +
        '<meta property="og:video:width" content="1280" />' +
        '<meta property="og:video:height" content="720" />' +
        "</head>" +
        "<body>" +
        '<video controls="controls" autoplay="autoplay" loop="" src="' +
        req.url.substring(7) +
        '" poster="" height="100%%"></video>' +
        "</body>" +
        "</html>"
    );
    res.end();
  })
  .listen(8984);
