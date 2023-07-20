// const dictionary = async()=>{
//     const words = document.querySelector("input").value;
//     await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`)
//     .then((response)=> response.json())
//     .then((res)=>{
//         const word = res[0].word;
//         const meanings = res[0].meanings[0].definitions[0].definition;
//          const partOfSpeech = res[0].meanings[0].partOfSpeech;
//          const phonetics = res[0].phonetics[0].text;
//         const synonyms = res[0].meanings[0].synonyms;
//          const antonyms = res[0].meanings[0].antonyms;




//         document.querySelector(".word").innerHTML= "Word: " + word;
//         document.querySelector(".meanings").innerHTML = "Meaning: " + meanings;
//         document.querySelector(".partOfSpeech").innerHTML ="Part Of Speech: " + partOfSpeech;
//          document.querySelector(".phonetics").innerHTML ="Phonetics: " + phonetics;
//           document.querySelector(".synonyms").innerHTML ="Synonyms: " + synonyms;
//         //  document.querySelector(".antonyms").innerHTML = "Antonyms: " + antonyms;
         
        
        
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// }
// dictionary()



const dictionary= async()=>{
    const words= document.querySelector("input").value;
    await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`)
    .then((Response)=> Response.json())
    .then((res) =>{
        const word = res[0].word;
        const meaning = res[0].meanings[0].definitions[0].definition;
        const partOfSpeech = res[0].meanings[0].partOfSpeech;

        const phonetics = res[0].phonetics[0].text;
        const synonyms = res[0].meanings[0].synonyms;
        const antonyms = res[0].meanings[0].antonyms;

        // const synonyms = res[0].meanings[0].definitions[0].;


    
        document.querySelector(".word").innerHTML = word;
        document.querySelector(".meaning").innerHTML = "MEANING: " + meaning;
        document.querySelector(".partOfSpeech").innerHTML ="PART OF SPEECH: " + partOfSpeech;

        document.querySelector(".phonetics").innerHTML = phonetics;
        document.querySelector(".synonyms").innerHTML = "SYNONYMS: " + synonyms;

        // document.querySelector(".antonyms").innerHTML = antonyms;



        
    })
    .catch((error)=>{
        console.log(error);
    })

}

dictionary()























