if(!document.getElementById('bootstrap-scripts')) {
    var script = document.createElement('script');
    script.id = 'bootstrap-scripts';
    script.type = 'text/javascript';
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"; 
    script.integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL";
    script.crossOrigin="anonymous";
    document.head.appendChild(script);
}
if(!document.getElementById('jquery-scripts')) {
    var script = document.createElement('script');
    script.id = 'jquery-scripts';
    script.type = 'text/javascript';
    script.src = "https://code.jquery.com/jquery-3.7.1.min.js";
    document.head.appendChild(script);
}
if(!document.getElementById('bootstrap-styles')) {
    var link = document.createElement('link');
    link.id = 'bootstrap-styles';
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    script.integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN";
    script.crossOrigin="anonymous";
    document.head.appendChild(link);
}
if(!document.getElementById('W3-styles')) {
    var link = document.createElement('link');
    link.id = 'W3-styles';
    link.rel = 'stylesheet';
    link.href = 'https://www.w3schools.com/w3css/4/w3.css';
    document.head.appendChild(link);
}
