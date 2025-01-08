export const seasons = [

    {
      seasonNumber: 1, //Change the season number to whatever is correct
      seasonName: "Big Brother Northeastern (BBNEU)", //insert name
      votingChart: "/images/votingcharts/season14.png", // IMPORTANT --> put a tba photo in public images if theres not chart
      juryVotes: "/images/juryVotes/season14.png", //Same thing make sure this goes to A PHOTO or says null
      logo: "/images/logos/season14.jpg", //if theres nothing just delete this logo.
      year: "(Spring 2024)", //When the season is
      placement: true, //This is only true if you have the placement and role filled out. If not its false. 
      vertical: true, // Are the photos vertical? if so true. if not false. 
      schema: "Schema: 18 people on 2 starting tribes, swap to 3 tribes of 5, swap to 2 tribes of 6, merge at 11", // Fill in the schema. 
      tribes: [
        { //Tribe 1
          name: "Tribe 1 Name",
          photo: "/images/Players/Season {number}/Tribe1/Tribe1.jpg", // Tribe photo
          color: "red", // Tribe color
          players: [
          {//Player 1 
            name: "", //Put their name
            year: "", //_____ Year (type year)
            major: "",//_____ Major (type major)
            location: "", // "From ______"
            funFact: "", // Put funfact here
            placement: 10, //Put placement not string.
            role: "Jury", //"Jury"/"Prejury"/ or "Finalist"
            photo: "/images/Players/Season {number}/Tribe1/Player1.jpg", //Photos need to be uploaded to public images. from there make the pathing match and .jpg
          }, 
          //Copy as many players as needed and as many tribes as needed. 
         
        
        ]},
      ],
      
    }
    //Not this




    
]