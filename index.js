function shout (input_string) {
    return input_string.toUpperCase() ;
}

function whisper (input_string) {
    return input_string.toLowerCase() ;
}

function logShout (input_string) {
    console.log (input_string.toUpperCase());
}

function logWhisper (input_string) {
    console.log (input_string.toLowerCase());
}

function sayHiToHeadphonedRoommate(input_string) {
    if (input_string === input_string.toLowerCase())
        return "I can't hear you!";
    else if (input_string === input_string.toUpperCase()) 
        return "YES INDEED!";
    else if (input_string === "Let's have dinner together!")
        return "I would love to!";
}