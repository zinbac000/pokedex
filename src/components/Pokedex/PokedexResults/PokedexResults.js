import React from "react";
import { Row, Col } from "antd";
import { PokeCard } from "../PokeCard/PokeCard";
import "./PokedexResults.scss";

export const PokedexResults = () => {
  return (
    <section className="pokedex-results">
      <Row justify="center">
        <Col xs={20} lg={16}>
          <div className="pokedex-results__content">
            <Row gutter={16}>
              <Col span={24} sm={12} md={8} lg={6}>
                <PokeCard />
              </Col>
              <Col span={24} sm={12} md={8} lg={6}>
                <PokeCard />
              </Col>
              <Col span={24} sm={12} md={8} lg={6}>
                <PokeCard />
              </Col>
              <Col span={24} sm={12} md={8} lg={6}>
                <PokeCard />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
};
