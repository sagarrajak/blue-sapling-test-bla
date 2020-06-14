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
  deleteBulkCardAction,
} from "../actions/restorentSearchAction";

export function NavbarComponent() {
  const dispatch = useDispatch();
  const apiLocationIdSearchState = useSelector(
    (state) => state[apiLocationIdSearch.uniqueKey]
  );
  const currentCity = useSelector((state) => state.stateSearch.currentCity);

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
          <Nav>
            <NavItem>
              <Button
                color="primary"
                onClick={() => {
                  if (!currentCity) {
                    alert("please select city");
                    return;
                  }
                  dispatch({
                    type: API_ACTION,
                    payload: {
                      ...apiLocationIdSearch,
                      url: "/locations",
                      method: "GET",
                      data: {
                        query: currentCity,
                      },
                    },
                  });
                }}
              >
                Search
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color="primary"
                onClick={() => {
                  dispatch(deleteBulkCardAction());
                }}
                style={{
                  marginLeft: "10px",
                }}
              >
                Bulk Delete
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
