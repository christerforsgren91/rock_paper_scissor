import React, { useState } from "react";
import { Header, Container, Grid, Button, Segment } from "semantic-ui-react";
import whoWins from "./theGame.js";

const Game = () => {
  const [player, setPlayer] = useState(0);
  const [computer, setComputer] = useState(0);
  const [tie, setTie] = useState("");

  const gameHandler = (choice) => {
    const winner = whoWins(choice);
    setTie("");
    if (winner === "computer") {
      return setComputer(computer + 1);
    } else if (winner === "tie") {
      return setTie("Its a tie, go again");
    }
    return setPlayer(player + 1);
  };

  const restartGame = () => {
    setComputer(0);
    setPlayer(0);
    setTie("");
  };
  return (
    <Container text>
      <Header data-cy="header" textAlign="center" size="huge">
        Rock Paper Scissor
      </Header>
      <Header data-cy="lucky-text" textAlign="center" as="h3">
        Is it your lucky day?
      </Header>

      <Grid columns="3" textAlign="center">
        <Grid.Row>
          <Button data-cy="rock-button" onClick={() => gameHandler("ROCK")}>
            ROCK
          </Button>
          <Button data-cy="paper-button" onClick={() => gameHandler("PAPER")}>
            PAPER
          </Button>
          <Button data-cy="scissor-button"onClick={() => gameHandler("SCISSOR")}>
            SCISSOR
          </Button>
        </Grid.Row>
      </Grid>

      <Segment.Group horizontal>
        <Segment compact textAlign data-cy="player-score">
          Player score:{player}
        </Segment>
        <Segment compact textAlign data-cy="computer-score">
          Computer score:{computer}
        </Segment>
      </Segment.Group>

      <Button data-cy="restart-button" onClick={() => restartGame("Restart")}>
        Restart
      </Button>

      <p data-cy="tie" >{tie}</p>
    </Container>
  );
};

export default Game;
