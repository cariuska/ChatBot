
module.exports = function(robot) {

    robot.respond(/Hello (.*)/i, function(res){
        teste = res.match[1]
        res.reply("Hello "+teste);        
    });

    robot.hear(/Today/i, function(res){
        var today = new Date();
        user = res.envelope.user.name
        res.send("Hello @"+user+", find...");

        setTimeout(
            () => res.send("Today is " + today)
            , 5000);
        
    });

    robot.hear(/Code (.*)/i, function(res){

        code = res.match[1]

        res.send("`"+code+"`");
        
    });

    robot.hear(/Block (.*)/i, function(res){


        code = res.match[1]

        res.send("```"+code+"```");
        
    });

    robot.hear(/smile/i, function(res){

        res.send(":smile:");
        
    });

    robot.hear(/canal (.*)/i, function(res){

        canal = res.match[1]

        res.send("canal "+canal); // <#canal>
        
    });

    robot.hear(/here/i, function(res){

        res.send("<!here>");
        
    });


    robot.hear(/thanks/i, function(res){

        user_mentions = [];

        //console.log(res.message);

        res.message.mentions.forEach(mention => {

            if (mention.type === "user" ){
                user_mentions.push(mention);
            }
        })

        //console.log(user_mentions);


        thank_scores = {}    
        if (user_mentions.length > 0) {
            response_text = ""
            

            user_mentions.forEach(user => {
                thank_scores[user.id] = thank_scores[user.id] ? thank_scores[user.id] + 1 : 1;
                response_text += "<@"+user.id+"> has been thanked "+thank_scores[user.id]+" times!\n";

            });
        
            res.send(response_text);

        }

        
    });

}

