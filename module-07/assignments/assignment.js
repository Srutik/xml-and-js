const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  const age = data.map((p) => p.died - p.born);

  console.log("Display AGE after MAP function, is: ");
  console.log("---------------------------------");
  console.log(age);
 
  const filter = age.filter((p) => p > 75);

  console.log("---------------------------------");
  console.log("Display Age after FILTER function, is: ");
  console.log("---------------------------------");
  console.log(filter);
 
  const oldest = filter.reduce((account, i) => {
    if (account > i) {
      return i;
    } else {
      return i;
    }
  }, 0);

  console.log("Oldest year is :- ");
  console.log("---------------------------------");
  console.log(oldest);
 
  const oldestLink = data
    .map((p) => p.died - p.born)
    .filter((p) => p > 75)
    .reduce((account, p) => {
      if ((account, p)) {
        return p;
      } else {
        return p;
      }
    }, 0);

  console.log("---------------------------------");
  console.log("Result after CHAINING is: ");
  console.log("---------------------------------");
  console.log(oldestLink);