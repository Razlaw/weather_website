import "./currentWeather.scss";
import { Card } from "semantic-ui-react";

export default function CurrentWeather({ weatherData }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header className="header">{weatherData.name}</Card.Header>
      </Card.Content>
    </Card>
  );
}
