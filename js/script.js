const ComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

