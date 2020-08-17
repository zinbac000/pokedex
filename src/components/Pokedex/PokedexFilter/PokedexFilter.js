import React from "react";
import { Row, Col, Typography, AutoComplete, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "./PokedexFilter.scss";

const { Paragraph, Title } = Typography;

export const PokedexFilter = () => {
  return (
    <section className="pokedex-filter">
      <Row justify="center">
        <Col span={20} lg={16}>
          <Row justify="space-between">
            <Col span={24} md={11}>
              <div className="pokedex-filter__search">
                <Title className="pokedex-filter__title" level={2}>
                  Name or Number
                </Title>
                <div className="pokedex-filter__input">
                  <AutoComplete />
                  <Button icon={<SearchOutlined />} />
                </div>
                <Paragraph className="pokedex-filter__recommend">
                  Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more!
                </Paragraph>
              </div>
            </Col>
            <Col span={24} md={11}>
              <div className="pokedex-filter__tips">
                <Paragraph>Search for a Pokémon by name or using its National Pokédex number</Paragraph>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};
