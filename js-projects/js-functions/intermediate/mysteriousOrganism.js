/*
Challenge Project - Mysterious Organism

Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. 
Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. 
The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. 
However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. 
Your job is to create objects that simulate the DNA of P. aequor for your research team to study.
*/


// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  //Since you need to create multiple objects, create a factory function pAequorFactory()
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
  
      /*----- (1) 
      .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
      */
      mutate() {
        console.log(
          `Mutating specimen${this.specimenNum}, with bases: ${this.dna}`
        ); // info message
        // random index of the base to change
        let index = Math.floor(Math.random() * dna.length);
  
        console.log("Base to change at index: " + index); // log message of the index to change
        // random base to replace
        let random = returnRandBase();
  
        console.log("New random base to insert: " + random); // logs the random base to use as replacer
        // loop until new random base is diff from the old base. Logs if random and old base are equal, generating a random base
        while (random === dna[index]) {
          console.log("The two bases are equal, will generate a new random base");
          random = returnRandBase();
        }
  
        // replacing the base with a random one
        dna.splice(index, 1, random);
        console.log(`New dna strand: ${this.dna}`);
      },
  
  
      /*----- (2)
      The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.
      */
      compareDNA(pAequorObj) {
        let count = 0; // variable to count the number of matching bases between the DNA sequences.
  
        for (let i = 0; i < this.dna.length; i++) {
          // if it's the first iteration, log the DNA sequences of the current object (this.dna) and the pAequorObj object to the console. 
          if (i === 0) {
            console.log(`\nComparing DNA strands:\nSpecimen${this.specimenNum} bases: ${this.dna}`);
            console.log(`Specimen${pAequorObj.specimenNum} bases: ${pAequorObj.dna}`);
          }
          /*
          Here, it compares the base at the current index i of the DNA sequence of the current object (this.dna[i]) with the corresponding base at the same index of pAequorObj (pAequorObj.dna[i]). If they are equal, it logs a message to the console indicating that the bases are equal, increments the count by 1, and logs the current count of matching bases.
          */
          if (this.dna[i] === pAequorObj.dna[i]) {
            console.log(`${this.dna[i]} and ${pAequorObj.dna[i]} are equal`);
            count += 1;
            console.log(`Matching bases so far: ${count}`);
          }
        }
  
        let basesInCommon = Math.floor((100 / 15) * count); // compute percentage of compatibility.
        return console.log(`Specimen ${this.specimenNum} and Specimen ${pAequorObj.specimenNum} are ${basesInCommon}% compatible.`);
        //console.log(`Specimen ${this.specimenNum} and Specimen ${pAequorObj.specimenNum} are ${basesInCommon}% compatible.`); // message that states the percentage of DNA the two objects have in common.
      },
  
      /*----- (3)
      .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.
      */
      willLikelySurvive() {
        let count = 0; // variable to count the number of matching bases C || G.
  
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'C' || this.dna[i] === 'G') {
            count += 1;
          }
        }
        let minimunNumBases = (15*60)/100; // Find mininum number of bases (= 9) to reach 60%
        return (count >= minimunNumBases);
        /*
        if (count >= minimunNumBases) {
          console.log(`\nTrue. Specimen ${this.specimenNum} will likely survive.`);
        } else {
          console.log(`\nFalse. Specimen ${this.specimenNum} will NOT likely survive.`);
        }
        */
      },
  
      /*----- (5)
      If you’d like to challenge yourself further, you could consider the following:
      - Create a .complementStrand() method to the factory function’s object that returns the complementary DNA strand. 
      The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa. (Check the hint for more details).
      - Use the .compareDNA() to find the two most related instances of pAequor.
      */
      complementStrand() {                                 
        let complementaryStrand = [];
        for ( let i = 0; i < this.dna.length; i++ ) {      // iterates through the strand bases
          if ( this.dna[i] === "A" ) { complementaryStrand.push("T"); }           // replaces A with T
          else if ( this.dna[i] === "T" ) { complementaryStrand.push("A"); }      // replaces T with A
          else if ( this.dna[i] === "C" ) { complementaryStrand.push("G"); }      // replaces C with G
          else if ( this.dna[i] === "G" ) { complementaryStrand.push("C"); }      // replaces G with C
          else complementaryStrand.push(this.dna[i]);
        }
        return `\nGenerating the complementary DNA strand:\nOriginal DNA strand: ${this.dna}
  Complementary DNA strand: ${complementaryStrand}`
        }
  
      
    };
  };
  
  
  
  /*----- (4)
  With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.
  */
  
  let newInstances = () => {
    let sampleArray= [];                                // array to contain specimen for which .willLikelySurvive() returns "true"  
    while ( sampleArray.length < 30 ) {                  // loop until adaptingSpecimen array contains 30 elements
    let i = 1;                                           // counter up until 30
    let sample = pAequorFactory(i, mockUpStrand())       // generating specimen
      if ( sample.willLikelySurvive() ) {
        sampleArray.push(sample.dna);
      }
      i++;
    }
    return sampleArray;
  }
  
  /*
  let newInstances = () => {
    let nestedArray = [];
  
    for (let i = 0; i < 30; i++) {
      nestedArray.push(mockUpStrand());
      if ()
    }
    return nestedArray;
  }
  */
  
  //----------------------------- TEST
  // (1)
  pAequorFactory(12345, ['A', 'C','T', 'G', 'C', 'A', 'C','T', 'G', 'C', 'A', 'C','T', 'G', 'C']).mutate();
  
  // (2)
  pAequorFactory(12345, ['A', 'C','T', 'G', 'C', 'A', 'C','T', 'G', 'C', 'A', 'C','T', 'G', 'C']).compareDNA({
    specimenNum: 54321,
    dna: ['A', 'T', 'C', 'G', 'A', 'A', 'T', 'C', 'G', 'A', 'A', 'T', 'C', 'G', 'A']
  });
  
  // (3)
  pAequorFactory(12345, ['A', 'C','T', 'G', 'C', 'A', 'C','T', 'G', 'C', 'A', 'C','T', 'G', 'C']).willLikelySurvive();
  
  // (4)
  console.log(newInstances());
  
  // (5)
  console.log(pAequorFactory(12345, ['A', 'C','T', 'G', 'C', 'A', 'C','T', 'G', 'C', 'A', 'C','T', 'G', 'C']).complementStrand());