$(document).ready(function () {
    // this.element.main.classlist.add("keyboard", "keyboard-- hidden");
    // this.element.keysContainer.classlist.add("keyboard", "keyboard__keys");
    let promptarea = $("#prompt-container");
    let targetContainer = $("#targetContainer");
    let upperkeyboard = $("#meyboard-upper-container");
    let lowerkeyboard = $("#keyboard-lower-container");
    let trgtarea = $("#target-letter")
    let sentencearea = $("#sentence")
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let eachsentence = 0;
    let sentenceletters = 0;
    upperkeyboard.hide();
    $(document).keydown(function(e) {
        if (e.which ===27) {
            upperkeyboard.show();
            lowerkeyboard.hide();
        }
    })
    $(document).keyup(function(e) {
        if (e.which ===27) {
            upperkeyboard.hide();
            lowerkeyboard.show();
        }  
        })
        
        $(document).keypress(function(e) {
            let anykey = $("#" + e.which);
            anykey.css("backgroundColor", "yellow");
            $(document).keyup(function(e) {
                anykey.css("backgroundColor", "");
            })
            
            $(sentencearea).text(sentences[eachsentence]);
            $(trgtarea).text(sentences[eachsentence][sentenceletters]);
        })

            $(document).keypress(function(e) {
                sentenceletters++;
                console.log(sentenceletters)
                
                
            })
            
        })