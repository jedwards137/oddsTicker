import {useEffect, useState} from "react";

const DisplayPage = () => {
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    const fetchOdds = async () => {
      const response = await fetch('/events/today?sports=americanfootball_nfl');
      console.log(response)
      const responseJson = await response.json();
      console.log(responseJson)
      if (response.ok) {
        setOdds(responseJson);
        console.log(responseJson);
      }
    }

    fetchOdds();
  }, [])

  return (
    <div>
      <h1>display page</h1>
    </div>
  );
}

export default DisplayPage;