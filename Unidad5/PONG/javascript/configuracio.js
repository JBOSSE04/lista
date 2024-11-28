function configuracion(){
        game = {
            svg : document.getElementById("svg"),
            player1 : document.getElementById("p1"),
            player2 : document.getElementById("p2"),
            ball : document.getElementById("ball"),
            radio : parseInt(document.getElementById("ball").getAttribute("r")),
            c1: document.getElementById("c1"),
            c2: document.getElementById("c2"),
            line: document.getElementById("line"),
            g1: document.getElementById("g1"),
            g2: document.getElementById("g2"),
        }

        pelotaConfig={
            velY : 1,
            velY : 1,
            px : 50,
            py : 50,
        }
        

        game.c1.setAttribute("x",(game.svg.clienteWidth/2)-70);
        game.c2.setAttribute("x",(game.svg.clienteWidth/2)+70);
        game.line.setAttribute("x",(game.svg.clienteWidth/2));
        game.player1.setAttribute("y",(game.svg.clienteHeight/2));
        game.player1.setAttribute("x", 60);
        game.g1.setAttribute("y", (game.svg.clienteHeight/3.7));


}