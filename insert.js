if(!document.getElementById('bootstrap-scripts')) {
    var script = document.createElement('script');
    script.id = 'bootstrap-scripts';
    script.type = 'text/javascript';
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"; 
    script.integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3";
    script.crossOrigin="anonymous";
    document.head.appendChild(script);
}
if(!document.getElementById('jquery-scripts')) {
    var script = document.createElement('script');
    script.id = 'jquery-scripts';
    script.type = 'text/javascript';
    script.src = "https://code.jquery.com/jquery-3.6.1.min.js";
    document.head.appendChild(script);
}
if(!document.getElementById('bootstrap-styles')) {
    var link = document.createElement('link');
    link.id = 'bootstrap-styles';
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css';
    script.integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi";
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
