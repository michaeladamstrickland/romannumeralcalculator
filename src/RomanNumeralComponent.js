import React, {useState} from 'react';



export default function RomanNumeralComponent () {
    
    const [calculatedAnswer, updateAnswer] = useState("Nulla");
    const [input, updateInput] = useState(" ");


    const addAndConvertToRomanNumerals = (ints) => {
        /* Implement me! */
        var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
        for ( i in lookup ) {
          while ( ints >= lookup[i] ) {
            roman += i;
            ints -= lookup[i];
          }
        }
        return roman;
    }
    addAndConvertToRomanNumerals(36);

    const addNumbers = (inputString) => {
        const numbersStringArray = inputString.split(",");
        const numbers = numbersStringArray.map((numberAsString) => { return parseInt(numberAsString, 10) });
        let sum = 0;
     for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i]
      }
     
        /* numbers is an array of ints. E.g. [1, 2, 3] */
        const answer = addAndConvertToRomanNumerals(sum)

        return answer;
    }

    const handleChange = (event) => {
        
        
        updateInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const answer = addNumbers(input);
        updateAnswer(answer);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{paddingRight: "10px"}}>
                    <span style={{paddingRight: "10px"}}>Numbers (separated by commas):</span>
                    <input type="text" name="input-form" onChange={handleChange}/>
                </label>
                <input type="submit" value="Add Numbers" />
            </form>
            <div>Answer in Roman Numerals: {calculatedAnswer}
           
            </div>
        </div>
    )
}