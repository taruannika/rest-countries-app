import { useNavigate, useParams } from "react-router-dom";
import { useGetCountryQuery } from "../services/countryApi";
import { Button, Image, Typography } from "antd";
import Weather from "../components/Weather";

export default function Country() {
  const { name } = useParams();
  const { data: country, isFetching } = useGetCountryQuery(name);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  if (isFetching) return "Loading...";

  if (!country) return null;

  return (
    <div className="mt-5 p-3 ">
      <Typography.Title>{country[0]?.name.common}</Typography.Title>
      <Button onClick={handleButtonClick}>Back to Home</Button>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-10 mt-10 p-3  ">
        <div className="col-span-4">
          <Image
            className="w-full lg:w-[50%]"
            src={country[0].flags.png}
          ></Image>
        </div>
        <div className="col-span-3 flex  flex-col gap-6">
          <p>
            <span className="font-semibold">Official Name: </span>
            {country[0].name.official}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {country[0].capital}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {country[0].region}
          </p>
          <p>
            <span className="font-semibold">Population: </span>
            {country[0].population}
          </p>
          <p>
            <span className="font-semibold">Area: </span>
            {country[0].area}
          </p>
          <p>
            <span className="font-semibold">Independent: </span>
            {country[0].independent ? "True" : "False"}
          </p>
          <p>
            <span className="font-semibold">Land Locked: </span>
            {country[0].landLocked ? "True" : "False"}
          </p>
          <p>
            <span className="font-semibold">Start of the week: </span>
            {country[0].startOfWeek}
          </p>
          <p>
            <span className="font-semibold">Status: </span>
            {country[0].status}
          </p>

          <div className="  flex flex-wrap gap-4 ">
            <span className="font-semibold">Languages:</span>
            {Object.values(country[0].languages).map((l, index) => (
              <div key={index}>
                <span key={index}>{l}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 ">
            <span className="font-semibold">Currencies: </span>
            {Object.values(country[0].currencies).map((c, index) => (
              <div key={index} className="flex gap-2">
                <span key={index}>{c.name}</span>
                <span className="font-medium">{c.symbol}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3">
          <Weather country={country} />
        </div>
      </div>

      <div className="col-span-3"></div>
    </div>
  );
}
