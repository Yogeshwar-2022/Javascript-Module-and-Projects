

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.



// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.


let D_score1 = 96;
let D_score2 = 108;
let D_score3 = 89;

let K_score1 = 88;
let K_score2 = 91;
let K_score3 = 110;

let scoreDolphins = (D_score1 + D_score2 + D_score3) / 3;
let scoreKoalas = (K_score1 + K_score2 + K_score3) / 3;


if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
}
else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
}
else {
    console.log("Both win the trophy");
}

