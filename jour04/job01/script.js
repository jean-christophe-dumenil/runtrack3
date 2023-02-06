document.getElementById("button").addEventListener("click", function() {
    fetch("expression.txt")
      .then(response => response.text())
      .then(data => {
        var p = document.createElement("p");
        var text = document.createTextNode(data);
        p.appendChild(text);
        document.body.appendChild(p);
      });
  });