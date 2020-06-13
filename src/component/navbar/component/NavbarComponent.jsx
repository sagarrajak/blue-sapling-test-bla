import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
} from "reactstrap";
import { API_ACTION } from "../../../store/apiMiddleware";
import {
  SearchCityComponent,
  SearchStateComponent,
} from "../../foodSearch/index";
import {
  apiLocationIdSearch,
  apiRestaurantFetch,
} from "../actions/restorentSearchAction";

export function NavbarComponent() {
  const dispatch = useDispatch();
  const apiLocationIdSearchState = useSelector(
    (state) => state[apiLocationIdSearch.uniqueKey]
  );

  useEffect(() => {
    if (!apiLocationIdSearchState.loading) {
      if (apiLocationIdSearchState.success) {
        dispatch({
          type: API_ACTION,
          payload: {
            ...apiRestaurantFetch,
            url: "/search",
            method: "GET",
            data: {
              entity_id:
                apiLocationIdSearchState.success.location_suggestions[0]
                  .entity_id,
              entity_type: "city",
            },
          },
        });
      }
    }
  }, [apiLocationIdSearchState]);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Blue Sampling Food</NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <SearchStateComponent />
            </NavItem>
            <NavItem>
              <SearchCityComponent />
            </NavItem>
          </Nav>
          <NavbarText>
            <NavItem>
              <Button
                color="primary"
                onClick={() => {
                  dispatch({
                    type: API_ACTION,
                    payload: {
                      ...apiLocationIdSearch,
                      url: "/locations",
                      method: "GET",
                      data: {
                        query: "jamshedpur",
                      },
                    },
                  });
                }}
              >
                Search
              </Button>
            </NavItem>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
