import { useGetAllCountriesQuery } from "../services/countryApi";
import { Card, Row, Col, Typography, Input, Divider } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const { data: countries, isFetching } = useGetAllCountriesQuery();
  const [searchQuery, setSearchQuery] = useState("");
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    const filteredCountries = countries?.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setCountriesList(filteredCountries);
  }, [countries, searchQuery]);

  if (isFetching) return "loading...";

  return (
    <>
      <div className="mb-4 mt-4 w-full lg:w-[50%] px-6  ">
        <Input
          className="w-full p-2 "
          placeholder="Search Countries..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Row style={{ margin: 0 }} gutter={[20, 20]} className="w-full p-3 ">
        {countriesList?.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </Row>
    </>
  );
}

const CountryCard = ({ country }) => {
  return (
    <Col xs={24} sm={12} lg={8}>
      <Link to={`/country/${country.name.common}`}>
        <Card hoverable className="shadow-lg rounded-lg">
          <div className="flex items-center justify-between">
            <Typography.Title level={4}>{country.name.common}</Typography.Title>
            <img
              className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full shadow-lg"
              src={country.flags.png}
              alt=""
            />
          </div>
          <Divider></Divider>
          <div>
            <Typography.Paragraph>
              Capital: {country.capital}
            </Typography.Paragraph>
            <Typography.Paragraph>
              Population: {country.population}
            </Typography.Paragraph>
            <Typography.Paragraph>
              Region: {country.region}
            </Typography.Paragraph>
          </div>
        </Card>
      </Link>
    </Col>
  );
};
