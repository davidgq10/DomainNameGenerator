  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
  let extension = ['.com', '.net', '.us', '.io'];

pronoun.forEach(pronounItem => {
    adj.forEach(adjItem => {
        noun.forEach(nounItem => {
            extension.forEach(extenItem => {
                console.log(pronounItem + adjItem + nounItem + extenItem);
            });         
        });
    });
});