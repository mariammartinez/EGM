const recipes = require("../models/recipes");

exports.createQuiz = (req,res,next) => { 

    let arr = [0,0,0];

    // todo faire une boucle ?
    arr[req.body.q1-1]++;
    arr[req.body.q2-1]++;
    arr[req.body.q3-1]++;
    arr[req.body.q4-1]++;
    arr[req.body.q5-1]++;

    let n = arr.indexOf(Math.max(...arr))+1;

    let url = "/recipes/" + n + "/show";

    res.redirect(303, url);

};