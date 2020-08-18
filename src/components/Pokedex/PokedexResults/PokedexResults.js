import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { PokeCard } from "../PokeCard/PokeCard";
import "./PokedexResults.scss";

import InfiniteScroll from "react-infinite-scroller";
import { List } from "antd";

import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";
import { PokedexSpinner } from "../PokedexSpinner/PokedexSpinner";

const PokedexResults = (props) => {
  const [enableLoadMore, setEnableLoadMore] = useState(false);
  return (
    <section className="pokedex-results">
      <Row justify="center">
        <Col xs={20} lg={16}>
          <div className="pokedex-results__content">
            <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={() => props.loadMorePokemons()}
              hasMore={enableLoadMore && !props.loading && props.hasMore}
            >
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 3,
                  lg: 4,
                  xl: 4,
                  xxl: 4
                }}
                dataSource={props.pokemons || []}
                renderItem={(poke) => (
                  <List.Item>
                    <PokeCard
                      name={poke.name}
                      thumbnailImage={poke.thumbnailImage}
                      thumbnailAltText={poke.thumbnailAltText}
                      number={poke.number}
                      types={poke.type}
                      detailUrl={poke.detailUrl}
                    />
                  </List.Item>
                )}
              >
                {props.loading && props.hasMore && <PokedexSpinner />}
              </List>
            </InfiniteScroll>
            {!enableLoadMore && (
              <div style={{ textAlign: "center" }}>
                <Button className="pokedex-results__loadmore" onClick={() => setEnableLoadMore(true)}>
                  Load More
                </Button>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </section>
  );
};

const mapStateToProps = (state) => ({
  pokemons: state.pokedexReducer.pagedPokeList,
  loading: state.pokedexReducer.fetching,
  hasMore: state.pokedexReducer.hasMore
});

const mapDispatchToProps = {
  loadMorePokemons: actions.loadMorePokemons
};

export default connect(mapStateToProps, mapDispatchToProps)(PokedexResults);
